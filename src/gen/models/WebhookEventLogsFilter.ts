/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.62.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  WebhookEventLogsFilterService,
  WebhookEventLogsFilterServiceFromJSON,
  WebhookEventLogsFilterServiceToJSON
} from './WebhookEventLogsFilterService'

/**
 *
 * @export
 * @interface WebhookEventLogsFilter
 */
export interface WebhookEventLogsFilter {
  /**
   *
   * @type {string}
   * @memberof WebhookEventLogsFilter
   */
  exclude_apis?: string | null
  /**
   *
   * @type {WebhookEventLogsFilterService}
   * @memberof WebhookEventLogsFilter
   */
  service?: WebhookEventLogsFilterService | null
  /**
   *
   * @type {string}
   * @memberof WebhookEventLogsFilter
   */
  consumer_id?: string | null
  /**
   *
   * @type {string}
   * @memberof WebhookEventLogsFilter
   */
  entity_type?: string | null
  /**
   *
   * @type {string}
   * @memberof WebhookEventLogsFilter
   */
  event_type?: string | null
}

export function WebhookEventLogsFilterFromJSON(json: any): WebhookEventLogsFilter {
  return WebhookEventLogsFilterFromJSONTyped(json, false)
}

export function WebhookEventLogsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEventLogsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    exclude_apis: !exists(json, 'exclude_apis') ? undefined : json['exclude_apis'],
    service: !exists(json, 'service')
      ? undefined
      : WebhookEventLogsFilterServiceFromJSON(json['service']),
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    entity_type: !exists(json, 'entity_type') ? undefined : json['entity_type'],
    event_type: !exists(json, 'event_type') ? undefined : json['event_type']
  }
}

export function WebhookEventLogsFilterToJSON(value?: WebhookEventLogsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    exclude_apis: value.exclude_apis,
    service: WebhookEventLogsFilterServiceToJSON(value.service),
    consumer_id: value.consumer_id,
    entity_type: value.entity_type,
    event_type: value.event_type
  }
}
