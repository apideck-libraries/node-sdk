/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Event, EventFromJSON, EventToJSON } from './Event'
import { Status, StatusFromJSON, StatusToJSON } from './Status'

/**
 *
 * @export
 * @interface UpdateWebhookRequest
 */
export interface UpdateWebhookRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  readonly id?: string
  /**
   * An optional description of what the webhook is used for.
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  description?: string
  /**
   *
   * @type {Status}
   * @memberof UpdateWebhookRequest
   */
  status?: Status
  /**
   * The URL of the webhook endpoint.
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  url?: string
  /**
   * The list of subscribed events for this webhook. [’*’] indicates that all events are enabled.
   * @type {Array<Event>}
   * @memberof UpdateWebhookRequest
   */
  events?: Array<Event>
  /**
   *
   * @type {Date}
   * @memberof UpdateWebhookRequest
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof UpdateWebhookRequest
   */
  readonly created_at?: Date
}

export function UpdateWebhookRequestFromJSON(json: any): UpdateWebhookRequest {
  return UpdateWebhookRequestFromJSONTyped(json, false)
}

export function UpdateWebhookRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateWebhookRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : StatusFromJSON(json['status']),
    url: !exists(json, 'url') ? undefined : json['url'],
    events: !exists(json, 'events') ? undefined : (json['events'] as Array<any>).map(EventFromJSON),
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function UpdateWebhookRequestToJSON(value?: UpdateWebhookRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    description: value.description,
    status: StatusToJSON(value.status),
    url: value.url,
    events: value.events === undefined ? undefined : (value.events as Array<any>).map(EventToJSON)
  }
}
