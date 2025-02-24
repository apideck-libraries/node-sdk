/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { Webhook, WebhookFromJSON, WebhookToJSON } from './Webhook'

/**
 *
 * @export
 * @interface GetWebhooksResponse
 */
export interface GetWebhooksResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetWebhooksResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetWebhooksResponse
   */
  status: string
  /**
   *
   * @type {Array<Webhook>}
   * @memberof GetWebhooksResponse
   */
  data: Array<Webhook>
  /**
   *
   * @type {Meta}
   * @memberof GetWebhooksResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetWebhooksResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetWebhooksResponse
   */
  _raw?: Raw | null
}

export function GetWebhooksResponseFromJSON(json: any): GetWebhooksResponse {
  return GetWebhooksResponseFromJSONTyped(json, false)
}

export function GetWebhooksResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetWebhooksResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(WebhookFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetWebhooksResponseToJSON(value?: GetWebhooksResponse | null): any {
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
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
