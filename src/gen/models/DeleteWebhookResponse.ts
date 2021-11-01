/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Webhook, WebhookFromJSON, WebhookToJSON } from './Webhook'

/**
 *
 * @export
 * @interface DeleteWebhookResponse
 */
export interface DeleteWebhookResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteWebhookResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteWebhookResponse
   */
  status: string
  /**
   *
   * @type {Webhook}
   * @memberof DeleteWebhookResponse
   */
  data: Webhook
}

export function DeleteWebhookResponseFromJSON(json: any): DeleteWebhookResponse {
  return DeleteWebhookResponseFromJSONTyped(json, false)
}

export function DeleteWebhookResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteWebhookResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: WebhookFromJSON(json['data'])
  }
}

export function DeleteWebhookResponseToJSON(value?: DeleteWebhookResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: WebhookToJSON(value.data)
  }
}
