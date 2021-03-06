/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Status, StatusFromJSON, StatusToJSON } from './Status'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'
import {
  WebhookEventType,
  WebhookEventTypeFromJSON,
  WebhookEventTypeToJSON
} from './WebhookEventType'

/**
 *
 * @export
 * @interface Webhook
 */
export interface Webhook {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof Webhook
   */
  unified_api: UnifiedApiId
  /**
   *
   * @type {Status}
   * @memberof Webhook
   */
  status: Status
  /**
   * The delivery url of the webhook endpoint.
   * @type {string}
   * @memberof Webhook
   */
  delivery_url: string
  /**
   * The Unify Base URL events from connectors will be sent to after service id is appended.
   * @type {string}
   * @memberof Webhook
   */
  readonly execute_base_url: string
  /**
   * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
   * @type {Array<WebhookEventType>}
   * @memberof Webhook
   */
  events: Array<WebhookEventType>
  /**
   *
   * @type {string}
   * @memberof Webhook
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Webhook
   */
  description?: string | null
  /**
   *
   * @type {Date}
   * @memberof Webhook
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Webhook
   */
  readonly created_at?: Date
}

export function WebhookFromJSON(json: any): Webhook {
  return WebhookFromJSONTyped(json, false)
}

export function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_api: UnifiedApiIdFromJSON(json['unified_api']),
    status: StatusFromJSON(json['status']),
    delivery_url: json['delivery_url'],
    execute_base_url: json['execute_base_url'],
    events: (json['events'] as Array<any>).map(WebhookEventTypeFromJSON),
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function WebhookToJSON(value?: Webhook | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_api: UnifiedApiIdToJSON(value.unified_api),
    status: StatusToJSON(value.status),
    delivery_url: value.delivery_url,
    events: (value.events as Array<any>).map(WebhookEventTypeToJSON),
    description: value.description
  }
}
