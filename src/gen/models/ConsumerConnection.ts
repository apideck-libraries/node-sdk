/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { AuthType, AuthTypeFromJSON, AuthTypeToJSON } from './AuthType'
import { ConnectionState, ConnectionStateFromJSON, ConnectionStateToJSON } from './ConnectionState'

/**
 *
 * @export
 * @interface ConsumerConnection
 */
export interface ConsumerConnection {
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  icon?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  logo?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  readonly website?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  readonly tag_line?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  service_id?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  unified_api?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  consumer_id?: string
  /**
   *
   * @type {AuthType}
   * @memberof ConsumerConnection
   */
  auth_type?: AuthType
  /**
   *
   * @type {boolean}
   * @memberof ConsumerConnection
   */
  enabled?: boolean
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   * @type {{ [key: string]: unknown; }}
   * @memberof ConsumerConnection
   */
  settings?: { [key: string]: unknown } | null
  /**
   * Attach your own consumer specific metadata
   * @type {{ [key: string]: unknown; }}
   * @memberof ConsumerConnection
   */
  metadata?: { [key: string]: unknown } | null
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerConnection
   */
  updated_at?: string | null
  /**
   *
   * @type {ConnectionState}
   * @memberof ConsumerConnection
   */
  state?: ConnectionState
}

export function ConsumerConnectionFromJSON(json: any): ConsumerConnection {
  return ConsumerConnectionFromJSONTyped(json, false)
}

export function ConsumerConnectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConsumerConnection {
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
    auth_type: !exists(json, 'auth_type') ? undefined : AuthTypeFromJSON(json['auth_type']),
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    settings: !exists(json, 'settings') ? undefined : json['settings'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    state: !exists(json, 'state') ? undefined : ConnectionStateFromJSON(json['state'])
  }
}

export function ConsumerConnectionToJSON(value?: ConsumerConnection | null): any {
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
    auth_type: AuthTypeToJSON(value.auth_type),
    enabled: value.enabled,
    settings: value.settings,
    metadata: value.metadata,
    created_at: value.created_at,
    updated_at: value.updated_at,
    state: ConnectionStateToJSON(value.state)
  }
}
