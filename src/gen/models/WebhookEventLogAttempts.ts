/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
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
 * @interface WebhookEventLogAttempts
 */
export interface WebhookEventLogAttempts {
  /**
   * ISO Date and time when the request was made.
   * @type {string}
   * @memberof WebhookEventLogAttempts
   */
  timestamp?: string
  /**
   * Number of attempts webhook endpoint was called before a success was returned or eventually failed
   * @type {number}
   * @memberof WebhookEventLogAttempts
   */
  execution_attempt?: number
  /**
   * HTTP Status code that was returned.
   * @type {number}
   * @memberof WebhookEventLogAttempts
   */
  status_code?: number
  /**
   * Whether or not the request was successful.
   * @type {boolean}
   * @memberof WebhookEventLogAttempts
   */
  success?: boolean
}

export function WebhookEventLogAttemptsFromJSON(json: any): WebhookEventLogAttempts {
  return WebhookEventLogAttemptsFromJSONTyped(json, false)
}

export function WebhookEventLogAttemptsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEventLogAttempts {
  if (json === undefined || json === null) {
    return json
  }
  return {
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp'],
    execution_attempt: !exists(json, 'execution_attempt') ? undefined : json['execution_attempt'],
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    success: !exists(json, 'success') ? undefined : json['success']
  }
}

export function WebhookEventLogAttemptsToJSON(value?: WebhookEventLogAttempts | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    timestamp: value.timestamp,
    execution_attempt: value.execution_attempt,
    status_code: value.status_code,
    success: value.success
  }
}
