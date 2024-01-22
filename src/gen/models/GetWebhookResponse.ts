/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
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
 * @interface GetWebhookResponse
 */
export interface GetWebhookResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetWebhookResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetWebhookResponse
   */
  status: string
  /**
   *
   * @type {Webhook}
   * @memberof GetWebhookResponse
   */
  data: Webhook
}

export function GetWebhookResponseFromJSON(json: any): GetWebhookResponse {
  return GetWebhookResponseFromJSONTyped(json, false)
}

export function GetWebhookResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetWebhookResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: WebhookFromJSON(json['data'])
  }
}

export function GetWebhookResponseToJSON(value?: GetWebhookResponse | null): any {
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
