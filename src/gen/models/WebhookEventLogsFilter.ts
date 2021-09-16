/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.12.0
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
   * @type {number}
   * @memberof WebhookEventLogsFilter
   */
  status_code?: number | null
  /**
   *
   * @type {string}
   * @memberof WebhookEventLogsFilter
   */
  exclude_unified_apis?: string | null
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
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    exclude_unified_apis: !exists(json, 'exclude_unified_apis')
      ? undefined
      : json['exclude_unified_apis'],
    service: !exists(json, 'service')
      ? undefined
      : WebhookEventLogsFilterServiceFromJSON(json['service']),
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
    status_code: value.status_code,
    exclude_unified_apis: value.exclude_unified_apis,
    service: WebhookEventLogsFilterServiceToJSON(value.service),
    entity_type: value.entity_type,
    event_type: value.event_type
  }
}
