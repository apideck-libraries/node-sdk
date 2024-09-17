/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
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
 * @interface UpdateWebhookResponse
 */
export interface UpdateWebhookResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateWebhookResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateWebhookResponse
   */
  status: string
  /**
   *
   * @type {Webhook}
   * @memberof UpdateWebhookResponse
   */
  data: Webhook
}

export function UpdateWebhookResponseFromJSON(json: any): UpdateWebhookResponse {
  return UpdateWebhookResponseFromJSONTyped(json, false)
}

export function UpdateWebhookResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateWebhookResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: WebhookFromJSON(json['data'])
  }
}

export function UpdateWebhookResponseToJSON(value?: UpdateWebhookResponse | null): any {
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
