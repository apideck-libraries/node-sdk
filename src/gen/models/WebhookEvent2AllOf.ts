/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.12.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { EventType2, EventType2FromJSON, EventType2ToJSON } from './EventType2'

/**
 *
 * @export
 * @interface WebhookEvent2AllOf
 */
export interface WebhookEvent2AllOf {
  /**
   *
   * @type {EventType2}
   * @memberof WebhookEvent2AllOf
   */
  event_type?: EventType2
}

export function WebhookEvent2AllOfFromJSON(json: any): WebhookEvent2AllOf {
  return WebhookEvent2AllOfFromJSONTyped(json, false)
}

export function WebhookEvent2AllOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEvent2AllOf {
  if (json === undefined || json === null) {
    return json
  }
  return {
    event_type: !exists(json, 'event_type') ? undefined : EventType2FromJSON(json['event_type'])
  }
}

export function WebhookEvent2AllOfToJSON(value?: WebhookEvent2AllOf | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    event_type: EventType2ToJSON(value.event_type)
  }
}
