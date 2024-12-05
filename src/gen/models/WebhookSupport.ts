/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { VirtualWebhooks, VirtualWebhooksFromJSON, VirtualWebhooksToJSON } from './VirtualWebhooks'

/**
 * How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
 * @export
 * @interface WebhookSupport
 */
export interface WebhookSupport {
  /**
   * Mode of the webhook support.
   * @type {string}
   * @memberof WebhookSupport
   */
  mode?: WebhookSupportMode
  /**
   * Received events are scoped to connection or across integration.
   * @type {string}
   * @memberof WebhookSupport
   */
  subscription_level?: WebhookSupportSubscriptionLevel
  /**
   * How the subscription is managed in the downstream.
   * @type {string}
   * @memberof WebhookSupport
   */
  managed_via?: WebhookSupportManagedVia
  /**
   *
   * @type {VirtualWebhooks}
   * @memberof WebhookSupport
   */
  virtual_webhooks?: VirtualWebhooks
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookSupportMode {
  native = 'native',
  virtual = 'virtual',
  none = 'none'
}
/**
 * @export
 * @enum {string}
 */
export enum WebhookSupportSubscriptionLevel {
  connection = 'connection',
  integration = 'integration'
}
/**
 * @export
 * @enum {string}
 */
export enum WebhookSupportManagedVia {
  manual = 'manual',
  api = 'api'
}

export function WebhookSupportFromJSON(json: any): WebhookSupport {
  return WebhookSupportFromJSONTyped(json, false)
}

export function WebhookSupportFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookSupport {
  if (json === undefined || json === null) {
    return json
  }
  return {
    mode: !exists(json, 'mode') ? undefined : json['mode'],
    subscription_level: !exists(json, 'subscription_level')
      ? undefined
      : json['subscription_level'],
    managed_via: !exists(json, 'managed_via') ? undefined : json['managed_via'],
    virtual_webhooks: !exists(json, 'virtual_webhooks')
      ? undefined
      : VirtualWebhooksFromJSON(json['virtual_webhooks'])
  }
}

export function WebhookSupportToJSON(value?: WebhookSupport | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    mode: value.mode,
    subscription_level: value.subscription_level,
    managed_via: value.managed_via,
    virtual_webhooks: VirtualWebhooksToJSON(value.virtual_webhooks)
  }
}
