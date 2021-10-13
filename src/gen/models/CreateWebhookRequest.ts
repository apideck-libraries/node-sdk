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
import { EventType4, EventType4FromJSON, EventType4ToJSON } from './EventType4'
import { Status, StatusFromJSON, StatusToJSON } from './Status'

/**
 *
 * @export
 * @interface CreateWebhookRequest
 */
export interface CreateWebhookRequest {
  /**
   * The unifiedApi the webhook originated from
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  unified_api: string
  /**
   *
   * @type {Status}
   * @memberof CreateWebhookRequest
   */
  status: Status
  /**
   * The URL of the webhook endpoint.
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  url: string
  /**
   * The list of subscribed events for this webhook. [’*’] indicates that all events are enabled.
   * @type {Array<EventType4>}
   * @memberof CreateWebhookRequest
   */
  events: Array<EventType4>
  /**
   *
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  readonly id?: string
  /**
   * An optional description of what the webhook is used for.
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  description?: string
  /**
   *
   * @type {Date}
   * @memberof CreateWebhookRequest
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof CreateWebhookRequest
   */
  readonly created_at?: Date
}

export function CreateWebhookRequestFromJSON(json: any): CreateWebhookRequest {
  return CreateWebhookRequestFromJSONTyped(json, false)
}

export function CreateWebhookRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateWebhookRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_api: json['unified_api'],
    status: StatusFromJSON(json['status']),
    url: json['url'],
    events: (json['events'] as Array<any>).map(EventType4FromJSON),
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function CreateWebhookRequestToJSON(value?: CreateWebhookRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_api: value.unified_api,
    status: StatusToJSON(value.status),
    url: value.url,
    events: (value.events as Array<any>).map(EventType4ToJSON),
    description: value.description
  }
}
