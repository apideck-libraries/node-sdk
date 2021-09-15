import fetch from 'node-fetch'
import { Apideck } from '../../../'
const { Response } = jest.requireActual('node-fetch')

jest.mock('node-fetch', () => jest.fn())

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('FileStorageApi', () => {
  describe('#filesAll', () => {
    const endpoint = '/file-storage/files'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'zoho-crm',
        resource: 'Files',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'sample.jpg',
            description: 'A sample image',
            type: 'file',
            path: '/Documents/sample.jpg',
            mime_type: 'image/jpeg',
            downloadable: true,
            size: 1810673,
            owner: {
              id: '12345',
              email: 'hello@apideck.com',
              name: 'Elon Musk'
            },
            parent_folders: [
              {
                id: '12345',
                name: 'Documents'
              }
            ],
            parent_folders_complete: true,
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
          }
        ],
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {} as any
      const current = await fileStorage.filesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesDelete', () => {
    const endpoint = '/file-storage/files/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'zoho-crm',
        resource: 'Files',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.filesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesDownload', () => {
    const endpoint = '/file-storage/files/{id}/download'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {} as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.filesDownload(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesOne', () => {
    const endpoint = '/file-storage/files/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'zoho-crm',
        resource: 'Files',
        operation: 'one',
        data: {
          id: '12345',
          name: 'sample.jpg',
          description: 'A sample image',
          type: 'file',
          path: '/Documents/sample.jpg',
          mime_type: 'image/jpeg',
          downloadable: true,
          size: 1810673,
          owner: {
            id: '12345',
            email: 'hello@apideck.com',
            name: 'Elon Musk'
          },
          parent_folders: [
            {
              id: '12345',
              name: 'Documents'
            }
          ],
          parent_folders_complete: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.filesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesSearch', () => {
    const endpoint = '/file-storage/files/search'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'zoho-crm',
        resource: 'Files',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'sample.jpg',
            description: 'A sample image',
            type: 'file',
            path: '/Documents/sample.jpg',
            mime_type: 'image/jpeg',
            downloadable: true,
            size: 1810673,
            owner: {
              id: '12345',
              email: 'hello@apideck.com',
              name: 'Elon Musk'
            },
            parent_folders: [
              {
                id: '12345',
                name: 'Documents'
              }
            ],
            parent_folders_complete: true,
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
          }
        ],
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        filesSearch: {
          query: 'logo jpg'
        }
      } as any
      const current = await fileStorage.filesSearch(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
