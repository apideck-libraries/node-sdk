import fetch from 'node-fetch-commonjs'
import {
  AccountingApi,
  AtsApi,
  ConnectorApi,
  CrmApi,
  CustomerSupportApi,
  FileStorageApi,
  HrisApi,
  LeadApi,
  SmsApi,
  VaultApi,
  WebhookApi
} from './gen/'
import { Configuration } from './gen/runtime'
import { Utils } from './utils'

const isNode =
  typeof process !== 'undefined' && process.versions != null && process.versions.node != null

export type ApideckConfiguration = {
  basePath?: string
  apiKey: string
  appId: string
  consumerId?: string
  serviceId?: string
}

export class Apideck {
  readonly accounting: AccountingApi
  readonly ats: AtsApi
  readonly connector: ConnectorApi
  readonly crm: CrmApi
  readonly customerSupport: CustomerSupportApi
  readonly fileStorage: FileStorageApi
  readonly hris: HrisApi
  readonly lead: LeadApi
  readonly sms: SmsApi
  readonly vault: VaultApi
  readonly webhook: WebhookApi
  readonly utils: Utils
  constructor(readonly config: ApideckConfiguration) {
    if (!isNode) {
      console.warn(
        "THIS IS A SERVERSIDE (Node.JS) LIBRARY AND SHOULDN'T BE USED IN THE BROWSER AS YOU RISK LEAKING YOUR API KEYS."
      )
    }

    const configuration = new Configuration({
      fetchApi: (url, options) => (fetch as any)(url, { highWaterMark: 10000000, ...options }),
      basePath: config.basePath,
      apiKey: `Bearer ${config.apiKey}`,
      headers: {
        'x-apideck-app-id': config.appId,
        'x-apideck-consumer-id': config.consumerId || '',
        'x-apideck-service-id': config?.serviceId || ''
      }
    })

    this.accounting = new AccountingApi(configuration)
    this.ats = new AtsApi(configuration)
    this.connector = new ConnectorApi(configuration)
    this.crm = new CrmApi(configuration)
    this.customerSupport = new CustomerSupportApi(configuration)
    this.fileStorage = new FileStorageApi(configuration)
    this.hris = new HrisApi(configuration)
    this.lead = new LeadApi(configuration)
    this.sms = new SmsApi(configuration)
    this.vault = new VaultApi(configuration)
    this.webhook = new WebhookApi(configuration)

    this.utils = new Utils(this)
  }
}
