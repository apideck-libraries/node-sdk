import fetch from 'node-fetch'
import { CrmApi, LeadApi, VaultApi } from './gen/'
import { Configuration } from './gen/runtime'

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
  readonly crm: CrmApi
  readonly lead: LeadApi
  readonly vault: VaultApi
  constructor(readonly config: ApideckConfiguration) {
    if (!isNode) {
      console.warn(
        "THIS IS A SERVERSIDE (Node.JS) LIBRARY AND SHOULDN'T BE USED IN THE BROWSER AS YOU RISK LEAKING YOUR API KEYS."
      )
    }

    const configuration = new Configuration({
      fetchApi: fetch as any,
      basePath: config.basePath,
      apiKey: `Bearer ${config.apiKey}`,
      headers: {
        'x-apideck-app-id': config.appId,
        'x-apideck-consumer-id': config.consumerId || '',
        'x-apideck-service-id': config?.serviceId || ''
      }
    })

    this.crm = new CrmApi(configuration)
    this.lead = new LeadApi(configuration)
    this.vault = new VaultApi(configuration)
  }
}
