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
import { EventType, EventTypeFromJSON, EventTypeToJSON } from './EventType'

/**
 *
 * @export
 * @interface WebhookEventAllOf1
 */
export interface WebhookEventAllOf1 {
  /**
   *
   * @type {EventType}
   * @memberof WebhookEventAllOf1
   */
  event_type?: EventType
}

export function WebhookEventAllOf1FromJSON(json: any): WebhookEventAllOf1 {
  return WebhookEventAllOf1FromJSONTyped(json, false)
}

export function WebhookEventAllOf1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEventAllOf1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    event_type: !exists(json, 'event_type') ? undefined : EventTypeFromJSON(json['event_type'])
  }
}

export function WebhookEventAllOf1ToJSON(value?: WebhookEventAllOf1 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    event_type: EventTypeToJSON(value.event_type)
  }
}
