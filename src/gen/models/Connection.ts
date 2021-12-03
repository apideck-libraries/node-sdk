/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.9.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { AuthType, AuthTypeFromJSON, AuthTypeToJSON } from './AuthType'
import {
  ConnectionConfiguration,
  ConnectionConfigurationFromJSON,
  ConnectionConfigurationToJSON
} from './ConnectionConfiguration'
import { ConnectionState, ConnectionStateFromJSON, ConnectionStateToJSON } from './ConnectionState'
import { FormField, FormFieldFromJSON } from './FormField'

/**
 *
 * @export
 * @interface Connection
 */
export interface Connection {
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly service_id?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly name?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly tag_line?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly unified_api?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly website?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly icon?: string
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly logo?: string
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   * @type {object}
   * @memberof Connection
   */
  settings?: object | null
  /**
   * Attach your own consumer specific metadata
   * @type {{ [key: string]: object; }}
   * @memberof Connection
   */
  metadata?: { [key: string]: object } | null
  /**
   *
   * @type {AuthType}
   * @memberof Connection
   */
  auth_type?: AuthType
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly status?: ConnectionStatus
  /**
   *
   * @type {Array<FormField>}
   * @memberof Connection
   */
  readonly form_fields?: Array<FormField>
  /**
   *
   * @type {Array<ConnectionConfiguration>}
   * @memberof Connection
   */
  _configuration?: Array<ConnectionConfiguration>
  /**
   *
   * @type {Array<string>}
   * @memberof Connection
   */
  readonly configurable_resources?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof Connection
   */
  readonly resource_schema_support?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof Connection
   */
  readonly resource_settings_support?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof Connection
   */
  readonly settings_required_for_authorization?: Array<string>
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly authorize_url?: string | null
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly revoke_url?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Connection
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof Connection
   */
  readonly created_at?: number
  /**
   *
   * @type {number}
   * @memberof Connection
   */
  readonly updated_at?: number | null
  /**
   *
   * @type {ConnectionState}
   * @memberof Connection
   */
  state?: ConnectionState
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectionStatus {
  live = 'live',
  upcoming = 'upcoming',
  requested = 'requested'
}

export function ConnectionFromJSON(json: any): Connection {
  return ConnectionFromJSONTyped(json, false)
}

export function ConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Connection {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    service_id: !exists(json, 'service_id') ? undefined : json['service_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    tag_line: !exists(json, 'tag_line') ? undefined : json['tag_line'],
    unified_api: !exists(json, 'unified_api') ? undefined : json['unified_api'],
    website: !exists(json, 'website') ? undefined : json['website'],
    icon: !exists(json, 'icon') ? undefined : json['icon'],
    logo: !exists(json, 'logo') ? undefined : json['logo'],
    settings: !exists(json, 'settings') ? undefined : json['settings'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    auth_type: !exists(json, 'auth_type') ? undefined : AuthTypeFromJSON(json['auth_type']),
    status: !exists(json, 'status') ? undefined : json['status'],
    form_fields: !exists(json, 'form_fields')
      ? undefined
      : (json['form_fields'] as Array<any>).map(FormFieldFromJSON),
    _configuration: !exists(json, 'configuration')
      ? undefined
      : (json['configuration'] as Array<any>).map(ConnectionConfigurationFromJSON),
    configurable_resources: !exists(json, 'configurable_resources')
      ? undefined
      : json['configurable_resources'],
    resource_schema_support: !exists(json, 'resource_schema_support')
      ? undefined
      : json['resource_schema_support'],
    resource_settings_support: !exists(json, 'resource_settings_support')
      ? undefined
      : json['resource_settings_support'],
    settings_required_for_authorization: !exists(json, 'settings_required_for_authorization')
      ? undefined
      : json['settings_required_for_authorization'],
    authorize_url: !exists(json, 'authorize_url') ? undefined : json['authorize_url'],
    revoke_url: !exists(json, 'revoke_url') ? undefined : json['revoke_url'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    state: !exists(json, 'state') ? undefined : ConnectionStateFromJSON(json['state'])
  }
}

export function ConnectionToJSON(value?: Connection | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    settings: value.settings,
    metadata: value.metadata,
    auth_type: AuthTypeToJSON(value.auth_type),
    configuration:
      value._configuration === undefined
        ? undefined
        : (value._configuration as Array<any>).map(ConnectionConfigurationToJSON),
    enabled: value.enabled,
    state: ConnectionStateToJSON(value.state)
  }
}
