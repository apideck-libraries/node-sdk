/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.6.0
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
 * @interface Webhook
 */
export interface Webhook {
  /**
   * The status of the webhook.
   * @type {string}
   * @memberof Webhook
   */
  status: WebhookStatus
  /**
   * The URL of the webhook endpoint.
   * @type {string}
   * @memberof Webhook
   */
  url: string
  /**
   * The list of subscribed events for this webhook. [’*’] indicates that all events are enabled.
   * @type {Array<string>}
   * @memberof Webhook
   */
  events: Array<WebhookEvents>
  /**
   *
   * @type {string}
   * @memberof Webhook
   */
  readonly id?: string
  /**
   * An optional description of what the webhook is used for.
   * @type {string}
   * @memberof Webhook
   */
  description?: string
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

/**
 * @export
 * @enum {string}
 */
export enum WebhookStatus {
  enabled = 'enabled',
  disabled = 'disabled'
}
/**
 * @export
 * @enum {string}
 */
export enum WebhookEvents {
  Star = '*',
  vault_connection_created = 'vault.connection.created',
  vault_connection_updated = 'vault.connection.updated'
}

export function WebhookFromJSON(json: any): Webhook {
  return WebhookFromJSONTyped(json, false)
}

export function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status: json['status'],
    url: json['url'],
    events: json['events'],
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
    status: value.status,
    url: value.url,
    events: value.events,
    description: value.description
  }
}
