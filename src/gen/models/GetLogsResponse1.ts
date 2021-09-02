/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.5.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Webhook, WebhookFromJSON, WebhookToJSON } from './Webhook'

/**
 *
 * @export
 * @interface GetLogsResponse1
 */
export interface GetLogsResponse1 {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLogsResponse1
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLogsResponse1
   */
  status: string
  /**
   *
   * @type {Array<Webhook>}
   * @memberof GetLogsResponse1
   */
  data: Array<Webhook>
  /**
   *
   * @type {Meta}
   * @memberof GetLogsResponse1
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetLogsResponse1
   */
  links?: Links
}

export function GetLogsResponse1FromJSON(json: any): GetLogsResponse1 {
  return GetLogsResponse1FromJSONTyped(json, false)
}

export function GetLogsResponse1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLogsResponse1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(WebhookFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetLogsResponse1ToJSON(value?: GetLogsResponse1 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(WebhookToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
