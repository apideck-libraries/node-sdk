/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Status, StatusFromJSON, StatusToJSON } from './Status'
import {
  WebhookEventType,
  WebhookEventTypeFromJSON,
  WebhookEventTypeToJSON
} from './WebhookEventType'

/**
 *
 * @export
 * @interface UpdateWebhookRequest
 */
export interface UpdateWebhookRequest {
  /**
   * A description of the object.
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  description?: string | null
  /**
   *
   * @type {Status}
   * @memberof UpdateWebhookRequest
   */
  status?: Status
  /**
   * The delivery url of the webhook endpoint.
   * @type {string}
   * @memberof UpdateWebhookRequest
   */
  delivery_url?: string
  /**
   * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
   * @type {Array<WebhookEventType>}
   * @memberof UpdateWebhookRequest
   */
  events?: Array<WebhookEventType>
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
    delivery_url: !exists(json, 'delivery_url') ? undefined : json['delivery_url'],
    events: !exists(json, 'events')
      ? undefined
      : (json['events'] as Array<any>).map(WebhookEventTypeFromJSON)
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
    delivery_url: value.delivery_url,
    events:
      value.events === undefined
        ? undefined
        : (value.events as Array<any>).map(WebhookEventTypeToJSON)
  }
}
