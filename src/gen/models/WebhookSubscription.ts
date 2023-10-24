/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface WebhookSubscription
 */
export interface WebhookSubscription {
  /**
   * The ID of the downstream service
   * @type {string}
   * @memberof WebhookSubscription
   */
  downstream_id?: string
  /**
   * The list of Unify Events this connection is subscribed to
   * @type {Array<string>}
   * @memberof WebhookSubscription
   */
  unify_event_types?: Array<string>
  /**
   * The list of downstream Events this connection is subscribed to
   * @type {Array<string>}
   * @memberof WebhookSubscription
   */
  downstream_event_types?: Array<string>
  /**
   * The URL the downstream is sending to when the event is triggered
   * @type {string}
   * @memberof WebhookSubscription
   */
  execute_url?: string
  /**
   * The date and time the webhook subscription was created downstream
   * @type {string}
   * @memberof WebhookSubscription
   */
  created_at?: string
}

export function WebhookSubscriptionFromJSON(json: any): WebhookSubscription {
  return WebhookSubscriptionFromJSONTyped(json, false)
}

export function WebhookSubscriptionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookSubscription {
  if (json === undefined || json === null) {
    return json
  }
  return {
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    unify_event_types: !exists(json, 'unify_event_types') ? undefined : json['unify_event_types'],
    downstream_event_types: !exists(json, 'downstream_event_types')
      ? undefined
      : json['downstream_event_types'],
    execute_url: !exists(json, 'execute_url') ? undefined : json['execute_url'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at']
  }
}

export function WebhookSubscriptionToJSON(value?: WebhookSubscription | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    downstream_id: value.downstream_id,
    unify_event_types: value.unify_event_types,
    downstream_event_types: value.downstream_event_types,
    execute_url: value.execute_url,
    created_at: value.created_at
  }
}
