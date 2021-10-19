/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 6.0.0
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
 * @interface ConnectionEvent1Entity
 */
export interface ConnectionEvent1Entity {
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  icon?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  logo?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  readonly website?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  readonly tag_line?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  service_id?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  unified_api?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  consumer_id?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  auth_type?: ConnectionEvent1EntityAuthType
  /**
   *
   * @type {boolean}
   * @memberof ConnectionEvent1Entity
   */
  enabled?: boolean
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   * @type {object}
   * @memberof ConnectionEvent1Entity
   */
  settings?: object | null
  /**
   * Attach your own consumer specific metadata
   * @type {{ [key: string]: object; }}
   * @memberof ConnectionEvent1Entity
   */
  metadata?: { [key: string]: object } | null
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  updated_at?: string | null
  /**
   *
   * @type {string}
   * @memberof ConnectionEvent1Entity
   */
  state?: ConnectionEvent1EntityState
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectionEvent1EntityAuthType {
  oauth2 = 'oauth2',
  apiKey = 'apiKey',
  basic = 'basic',
  none = 'none'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectionEvent1EntityState {
  available = 'available',
  callable = 'callable',
  added = 'added',
  configured = 'configured',
  authorized = 'authorized'
}

export function ConnectionEvent1EntityFromJSON(json: any): ConnectionEvent1Entity {
  return ConnectionEvent1EntityFromJSONTyped(json, false)
}

export function ConnectionEvent1EntityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionEvent1Entity {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    icon: !exists(json, 'icon') ? undefined : json['icon'],
    logo: !exists(json, 'logo') ? undefined : json['logo'],
    website: !exists(json, 'website') ? undefined : json['website'],
    tag_line: !exists(json, 'tag_line') ? undefined : json['tag_line'],
    service_id: !exists(json, 'service_id') ? undefined : json['service_id'],
    unified_api: !exists(json, 'unified_api') ? undefined : json['unified_api'],
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    auth_type: !exists(json, 'auth_type') ? undefined : json['auth_type'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    settings: !exists(json, 'settings') ? undefined : json['settings'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    state: !exists(json, 'state') ? undefined : json['state']
  }
}

export function ConnectionEvent1EntityToJSON(value?: ConnectionEvent1Entity | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    icon: value.icon,
    logo: value.logo,
    service_id: value.service_id,
    unified_api: value.unified_api,
    consumer_id: value.consumer_id,
    auth_type: value.auth_type,
    enabled: value.enabled,
    settings: value.settings,
    metadata: value.metadata,
    created_at: value.created_at,
    updated_at: value.updated_at,
    state: value.state
  }
}