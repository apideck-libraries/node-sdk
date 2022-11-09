/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.81.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Describes the configurations webhook support of the connector.
 * @export
 * @interface ConnectorWebhookSupportType
 */
export interface ConnectorWebhookSupportType {
  /**
   * Mode of the webhook support.
   * @type {string}
   * @memberof ConnectorWebhookSupportType
   */
  mode?: ConnectorWebhookSupportTypeMode
  /**
   * Received events are scoped to consumer or across integration.
   * @type {string}
   * @memberof ConnectorWebhookSupportType
   */
  subscription_level?: ConnectorWebhookSupportTypeSubscriptionLevel
  /**
   * How the subscription is managed in the downstream.
   * @type {string}
   * @memberof ConnectorWebhookSupportType
   */
  managed_via?: ConnectorWebhookSupportTypeManagedVia
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectorWebhookSupportTypeMode {
  native = 'native',
  virtual = 'virtual',
  none = 'none'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectorWebhookSupportTypeSubscriptionLevel {
  consumer = 'consumer',
  integration = 'integration'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectorWebhookSupportTypeManagedVia {
  manual = 'manual',
  api = 'api'
}

export function ConnectorWebhookSupportTypeFromJSON(json: any): ConnectorWebhookSupportType {
  return ConnectorWebhookSupportTypeFromJSONTyped(json, false)
}

export function ConnectorWebhookSupportTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorWebhookSupportType {
  if (json === undefined || json === null) {
    return json
  }
  return {
    mode: !exists(json, 'mode') ? undefined : json['mode'],
    subscription_level: !exists(json, 'subscription_level')
      ? undefined
      : json['subscription_level'],
    managed_via: !exists(json, 'managed_via') ? undefined : json['managed_via']
  }
}

export function ConnectorWebhookSupportTypeToJSON(value?: ConnectorWebhookSupportType | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    mode: value.mode,
    subscription_level: value.subscription_level,
    managed_via: value.managed_via
  }
}
