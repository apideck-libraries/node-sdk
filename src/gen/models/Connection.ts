/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
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
import { OAuthGrantType, OAuthGrantTypeFromJSON, OAuthGrantTypeToJSON } from './OAuthGrantType'

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
   * @type {ConnectionState}
   * @memberof Connection
   */
  state?: ConnectionState
  /**
   *
   * @type {AuthType}
   * @memberof Connection
   */
  auth_type?: AuthType
  /**
   *
   * @type {OAuthGrantType}
   * @memberof Connection
   */
  oauth_grant_type?: OAuthGrantType
  /**
   *
   * @type {string}
   * @memberof Connection
   */
  readonly status?: ConnectionStatus
  /**
   * Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.
   * @type {boolean}
   * @memberof Connection
   */
  enabled?: boolean
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
   * The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.
   * @type {string}
   * @memberof Connection
   */
  readonly authorize_url?: string | null
  /**
   * The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.
   * @type {string}
   * @memberof Connection
   */
  readonly revoke_url?: string | null
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   * @type {{ [key: string]: unknown; }}
   * @memberof Connection
   */
  settings?: { [key: string]: unknown } | null
  /**
   * Attach your own consumer specific metadata
   * @type {{ [key: string]: unknown; }}
   * @memberof Connection
   */
  metadata?: { [key: string]: unknown } | null
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
   * List of settings that are required to be configured on integration before authorization can occur
   * @type {Array<string>}
   * @memberof Connection
   */
  readonly settings_required_for_authorization?: Array<string>
  /**
   * Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection).
   * @type {boolean}
   * @memberof Connection
   */
  readonly has_guide?: boolean
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
    state: !exists(json, 'state') ? undefined : ConnectionStateFromJSON(json['state']),
    auth_type: !exists(json, 'auth_type') ? undefined : AuthTypeFromJSON(json['auth_type']),
    oauth_grant_type: !exists(json, 'oauth_grant_type')
      ? undefined
      : OAuthGrantTypeFromJSON(json['oauth_grant_type']),
    status: !exists(json, 'status') ? undefined : json['status'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    website: !exists(json, 'website') ? undefined : json['website'],
    icon: !exists(json, 'icon') ? undefined : json['icon'],
    logo: !exists(json, 'logo') ? undefined : json['logo'],
    authorize_url: !exists(json, 'authorize_url') ? undefined : json['authorize_url'],
    revoke_url: !exists(json, 'revoke_url') ? undefined : json['revoke_url'],
    settings: !exists(json, 'settings') ? undefined : json['settings'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
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
    has_guide: !exists(json, 'has_guide') ? undefined : json['has_guide'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at']
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
    state: ConnectionStateToJSON(value.state),
    auth_type: AuthTypeToJSON(value.auth_type),
    oauth_grant_type: OAuthGrantTypeToJSON(value.oauth_grant_type),
    enabled: value.enabled,
    settings: value.settings,
    metadata: value.metadata,
    configuration:
      value._configuration === undefined
        ? undefined
        : (value._configuration as Array<any>).map(ConnectionConfigurationToJSON)
  }
}
