/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.1
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
 * @interface CreateWebhookResponse
 */
export interface CreateWebhookResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateWebhookResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateWebhookResponse
   */
  status: string
  /**
   *
   * @type {Webhook}
   * @memberof CreateWebhookResponse
   */
  data: Webhook
}

export function CreateWebhookResponseFromJSON(json: any): CreateWebhookResponse {
  return CreateWebhookResponseFromJSONTyped(json, false)
}

export function CreateWebhookResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateWebhookResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: WebhookFromJSON(json['data'])
  }
}

export function CreateWebhookResponseToJSON(value?: CreateWebhookResponse | null): any {
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
