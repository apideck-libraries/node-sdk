/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
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
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp']
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
    timestamp: value.timestamp
  }
}
