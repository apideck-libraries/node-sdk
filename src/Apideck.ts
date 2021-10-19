import { AccountingApi, CrmApi, FileStorageApi, LeadApi, VaultApi, WebhookApi } from './gen/'
import { Configuration } from './gen/runtime'

const _importDynamic = new Function('modulePath', 'return import(modulePath)')
const isNode =
  typeof process !== 'undefined' && process.versions != null && process.versions.node != null

async function fetch(...args: [any, any]) {
  const { default: fetch } = await _importDynamic('node-fetch')
  return fetch(...args)
}

export type ApideckConfiguration = {
  basePath?: string
  apiKey: string
  appId: string
  consumerId?: string
  serviceId?: string
}

export class Apideck {
  readonly accounting: AccountingApi
  readonly crm: CrmApi
  readonly fileStorage: FileStorageApi
  readonly lead: LeadApi
  readonly vault: VaultApi
  readonly webhook: WebhookApi
  constructor(readonly config: ApideckConfiguration) {
    if (!isNode) {
      console.warn(
        "THIS IS A SERVERSIDE (Node.JS) LIBRARY AND SHOULDN'T BE USED IN THE BROWSER AS YOU RISK LEAKING YOUR API KEYS."
      )
    }

    const configuration = new Configuration({
      fetchApi: (url, options) => (fetch as any)(url, { ...options, highWaterMark: 10_000_000 }),
      basePath: config.basePath,
      apiKey: `Bearer ${config.apiKey}`,
      headers: {
        'x-apideck-app-id': config.appId,
        'x-apideck-consumer-id': config.consumerId || '',
        'x-apideck-service-id': config?.serviceId || ''
      }
    })

    this.accounting = new AccountingApi(configuration)
    this.crm = new CrmApi(configuration)
    this.fileStorage = new FileStorageApi(configuration)
    this.lead = new LeadApi(configuration)
    this.vault = new VaultApi(configuration)
    this.webhook = new WebhookApi(configuration)
  }
}
