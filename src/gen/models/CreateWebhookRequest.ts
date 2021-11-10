/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.5.0
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
 * @interface CreateWebhookRequest
 */
export interface CreateWebhookRequest {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof CreateWebhookRequest
   */
  unified_api: UnifiedApiId
  /**
   *
   * @type {Status}
   * @memberof CreateWebhookRequest
   */
  status: Status
  /**
   * The delivery url of the webhook endpoint.
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  delivery_url: string
  /**
   * The list of subscribed events for this webhook. [’*’] indicates that all events are enabled.
   * @type {Array<WebhookEventType>}
   * @memberof CreateWebhookRequest
   */
  events: Array<WebhookEventType>
  /**
   *
   * @type {string}
   * @memberof CreateWebhookRequest
   */
  description?: string | null
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
    unified_api: UnifiedApiIdFromJSON(json['unified_api']),
    status: StatusFromJSON(json['status']),
    delivery_url: json['delivery_url'],
    events: (json['events'] as Array<any>).map(WebhookEventTypeFromJSON),
    description: !exists(json, 'description') ? undefined : json['description']
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
    unified_api: UnifiedApiIdToJSON(value.unified_api),
    status: StatusToJSON(value.status),
    delivery_url: value.delivery_url,
    events: (value.events as Array<any>).map(WebhookEventTypeToJSON),
    description: value.description
  }
}
