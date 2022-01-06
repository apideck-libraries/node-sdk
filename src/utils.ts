import { Readable } from 'stream'
import { UnifiedFile } from './gen/models'

const toReadableStream = (input: Readable | Buffer | string, partSize: number): Readable => {
  return Readable.from(input, { objectMode: false, highWaterMark: partSize })
}

export class Utils {
  constructor(private apideck: any) {}

  async uploadFile(options: {
    file: string | Buffer
    name: string
    size: number
    contentType?: string
    parentFolderId?: string
    serviceId?: string
    consumerId?: string
    appId?: string
  }): Promise<UnifiedFile> {
    const appId = options.appId ?? this.apideck.config.appId
    const consumerId = options.consumerId ?? this.apideck.config.consumerId
    const serviceId = options.serviceId ?? this.apideck.config.serviceId

    if (options.size <= 4_000_000) {
      const response = await this.apideck.fileStorage['fetchApi'](
        `https://unify.apideck.com/file-storage/files`,
        {
          method: 'POST',
          headers: {
            'Content-Type': options.contentType ?? 'application/octet-stream',
            Authorization: `Bearer ${this.apideck.config.apiKey}`,
            'x-apideck-app-id': appId,
            'x-apideck-consumer-id': consumerId,
            'x-apideck-service-id': serviceId,
            'x-apideck-metadata': JSON.stringify({
              name: options.name,
              parent_folder_id: options.parentFolderId ?? 'root'
            })
          },
          body: options.file
        }
      )

      const {
        data: { id }
      } = await response.json()

      const fileResponse = await this.apideck.fileStorage['fetchApi'](
        `https://unify.apideck.com/file-storage/files/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.apideck.config.apiKey}`,
            'x-apideck-app-id': appId,
            'x-apideck-consumer-id': consumerId,
            'x-apideck-service-id': serviceId
          }
        }
      )

      const { data: file } = await fileResponse.json()

      return file
    }

    const {
      data: { id: sessionId }
    } = await this.apideck.fileStorage.uploadSessionsAdd({
      uploadSession: {
        size: options.size,
        name: options.name,
        parent_folder_id: options.parentFolderId ?? 'root'
      },
      appId,
      consumerId,
      serviceId
    })

    const cleanSessionId = sessionId.replace('=', '')

    const { data: session } = await this.apideck.fileStorage.uploadSessionsOne({
      id: cleanSessionId,
      appId,
      consumerId,
      serviceId
    })

    const partSize = session.part_size
    const stream = toReadableStream(options.file, partSize)
    stream.pause()

    let chunk = stream.read(partSize)
    let index = 0

    while (chunk) {
      await this.apideck.fileStorage['fetchApi'](
        `https://unify.apideck.com/file-storage/upload-sessions/${sessionId}?part_number=${index}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': options.contentType ?? 'application/octet-stream',
            Authorization: `Bearer ${this.apideck.config.apiKey}`,
            'x-apideck-app-id': appId,
            'x-apideck-consumer-id': consumerId,
            'x-apideck-service-id': serviceId
          },
          body: chunk
        }
      )
      chunk = stream.read(partSize)
      index++
    }

    const { data } = await this.apideck.fileStorage.uploadSessionsFinish({
      id: cleanSessionId,
      body: {},
      appId,
      consumerId,
      serviceId
    })

    return data
  }
}
