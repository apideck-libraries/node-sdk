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
import {
  WebhookEventLogAttempts,
  WebhookEventLogAttemptsFromJSON,
  WebhookEventLogAttemptsToJSON
} from './WebhookEventLogAttempts'
import {
  WebhookEventLogService,
  WebhookEventLogServiceFromJSON,
  WebhookEventLogServiceToJSON
} from './WebhookEventLogService'

/**
 *
 * @export
 * @interface WebhookEventLog
 */
export interface WebhookEventLog {
  /**
   *
   * @type {string}
   * @memberof WebhookEventLog
   */
  id?: string
  /**
   * HTTP Status code that was returned.
   * @type {number}
   * @memberof WebhookEventLog
   */
  status_code?: number
  /**
   * Whether or not the request was successful.
   * @type {boolean}
   * @memberof WebhookEventLog
   */
  success?: boolean
  /**
   * ID of your Apideck Application
   * @type {string}
   * @memberof WebhookEventLog
   */
  application_id?: string
  /**
   * Consumer identifier
   * @type {string}
   * @memberof WebhookEventLog
   */
  consumer_id?: string
  /**
   * The unifiedApi the webhook originated from
   * @type {string}
   * @memberof WebhookEventLog
   */
  unified_api?: string
  /**
   *
   * @type {WebhookEventLogService}
   * @memberof WebhookEventLog
   */
  service?: WebhookEventLogService
  /**
   * The URL of the webhook endpoint.
   * @type {string}
   * @memberof WebhookEventLog
   */
  endpoint?: string
  /**
   * Name of source event that webhook is subscribed to.
   * @type {string}
   * @memberof WebhookEventLog
   */
  event_type?: string
  /**
   * Number of attempts webhook endpoint was called before a success was returned or eventually failed
   * @type {number}
   * @memberof WebhookEventLog
   */
  execution_attempt?: number
  /**
   * HTTP Method of request to endpoint.
   * @type {string}
   * @memberof WebhookEventLog
   */
  http_method?: string
  /**
   * ISO Date and time when the request was made.
   * @type {string}
   * @memberof WebhookEventLog
   */
  timestamp?: string
  /**
   * Name of the Entity described by the attributes delivered within payload
   * @type {string}
   * @memberof WebhookEventLog
   */
  entity_type?: string
  /**
   * The JSON stringified payload that was delivered to the webhook endpoint.
   * @type {string}
   * @memberof WebhookEventLog
   */
  request_body?: string
  /**
   * The JSON stringified response that was returned from the webhook endpoint.
   * @type {string}
   * @memberof WebhookEventLog
   */
  response_body?: string
  /**
   * If the request has not hit the max retry limit and will be retried.
   * @type {boolean}
   * @memberof WebhookEventLog
   */
  retry_scheduled?: boolean
  /**
   * record of each attempt to call webhook endpoint
   * @type {Array<WebhookEventLogAttempts>}
   * @memberof WebhookEventLog
   */
  attempts?: Array<WebhookEventLogAttempts>
}

export function WebhookEventLogFromJSON(json: any): WebhookEventLog {
  return WebhookEventLogFromJSONTyped(json, false)
}

export function WebhookEventLogFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEventLog {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    success: !exists(json, 'success') ? undefined : json['success'],
    application_id: !exists(json, 'application_id') ? undefined : json['application_id'],
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    unified_api: !exists(json, 'unified_api') ? undefined : json['unified_api'],
    service: !exists(json, 'service') ? undefined : WebhookEventLogServiceFromJSON(json['service']),
    endpoint: !exists(json, 'endpoint') ? undefined : json['endpoint'],
    event_type: !exists(json, 'event_type') ? undefined : json['event_type'],
    execution_attempt: !exists(json, 'execution_attempt') ? undefined : json['execution_attempt'],
    http_method: !exists(json, 'http_method') ? undefined : json['http_method'],
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp'],
    entity_type: !exists(json, 'entity_type') ? undefined : json['entity_type'],
    request_body: !exists(json, 'request_body') ? undefined : json['request_body'],
    response_body: !exists(json, 'response_body') ? undefined : json['response_body'],
    retry_scheduled: !exists(json, 'retry_scheduled') ? undefined : json['retry_scheduled'],
    attempts: !exists(json, 'attempts')
      ? undefined
      : (json['attempts'] as Array<any>).map(WebhookEventLogAttemptsFromJSON)
  }
}

export function WebhookEventLogToJSON(value?: WebhookEventLog | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    status_code: value.status_code,
    success: value.success,
    application_id: value.application_id,
    consumer_id: value.consumer_id,
    unified_api: value.unified_api,
    service: WebhookEventLogServiceToJSON(value.service),
    endpoint: value.endpoint,
    event_type: value.event_type,
    execution_attempt: value.execution_attempt,
    http_method: value.http_method,
    timestamp: value.timestamp,
    entity_type: value.entity_type,
    request_body: value.request_body,
    response_body: value.response_body,
    retry_scheduled: value.retry_scheduled,
    attempts:
      value.attempts === undefined
        ? undefined
        : (value.attempts as Array<any>).map(WebhookEventLogAttemptsToJSON)
  }
}