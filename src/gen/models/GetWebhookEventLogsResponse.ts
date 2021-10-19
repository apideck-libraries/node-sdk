/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 6.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { WebhookEventLog, WebhookEventLogFromJSON, WebhookEventLogToJSON } from './WebhookEventLog'

/**
 *
 * @export
 * @interface GetWebhookEventLogsResponse
 */
export interface GetWebhookEventLogsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetWebhookEventLogsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetWebhookEventLogsResponse
   */
  status: string
  /**
   *
   * @type {Array<WebhookEventLog>}
   * @memberof GetWebhookEventLogsResponse
   */
  data: Array<WebhookEventLog>
  /**
   *
   * @type {Meta}
   * @memberof GetWebhookEventLogsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetWebhookEventLogsResponse
   */
  links?: Links
}

export function GetWebhookEventLogsResponseFromJSON(json: any): GetWebhookEventLogsResponse {
  return GetWebhookEventLogsResponseFromJSONTyped(json, false)
}

export function GetWebhookEventLogsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetWebhookEventLogsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(WebhookEventLogFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetWebhookEventLogsResponseToJSON(value?: GetWebhookEventLogsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(WebhookEventLogToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}