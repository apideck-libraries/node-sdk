/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.0.0
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
 * @interface UpdateWebhookRequest
 */
export interface UpdateWebhookRequest {
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
   * @type {Array<EventType4>}
   * @memberof UpdateWebhookRequest
   */
  events?: Array<EventType4>
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
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : StatusFromJSON(json['status']),
    url: !exists(json, 'url') ? undefined : json['url'],
    events: !exists(json, 'events')
      ? undefined
      : (json['events'] as Array<any>).map(EventType4FromJSON)
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
    events:
      value.events === undefined ? undefined : (value.events as Array<any>).map(EventType4ToJSON)
  }
}
