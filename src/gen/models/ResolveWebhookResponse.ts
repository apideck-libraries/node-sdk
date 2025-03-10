/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface ResolveWebhookResponse
 */
export interface ResolveWebhookResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof ResolveWebhookResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof ResolveWebhookResponse
   */
  status: string
  /**
   * UUID of the request received
   * @type {string}
   * @memberof ResolveWebhookResponse
   */
  request_id?: string
  /**
   * ISO Datetime webhook event was received
   * @type {string}
   * @memberof ResolveWebhookResponse
   */
  timestamp?: string
  /**
   *
   * @type {Raw}
   * @memberof ResolveWebhookResponse
   */
  _raw?: Raw | null
}

export function ResolveWebhookResponseFromJSON(json: any): ResolveWebhookResponse {
  return ResolveWebhookResponseFromJSONTyped(json, false)
}

export function ResolveWebhookResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ResolveWebhookResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    request_id: !exists(json, 'request_id') ? undefined : json['request_id'],
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp'],
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function ResolveWebhookResponseToJSON(value?: ResolveWebhookResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    request_id: value.request_id,
    timestamp: value.timestamp,
    _raw: RawToJSON(value._raw)
  }
}
