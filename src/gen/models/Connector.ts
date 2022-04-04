/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ConnectorDoc, ConnectorDocFromJSON, ConnectorDocToJSON } from './ConnectorDoc'
import {
  ConnectorSetting,
  ConnectorSettingFromJSON,
  ConnectorSettingToJSON
} from './ConnectorSetting'
import { ConnectorStatus, ConnectorStatusFromJSON, ConnectorStatusToJSON } from './ConnectorStatus'
import {
  ConnectorSupportedEvents,
  ConnectorSupportedEventsFromJSON,
  ConnectorSupportedEventsToJSON
} from './ConnectorSupportedEvents'
import {
  ConnectorSupportedResources,
  ConnectorSupportedResourcesFromJSON,
  ConnectorSupportedResourcesToJSON
} from './ConnectorSupportedResources'
import {
  ConnectorUnifiedApis,
  ConnectorUnifiedApisFromJSON,
  ConnectorUnifiedApisToJSON
} from './ConnectorUnifiedApis'

/**
 *
 * @export
 * @interface Connector
 */
export interface Connector {
  /**
   * ID of the connector.
   * @type {string}
   * @memberof Connector
   */
  readonly id?: string
  /**
   * Name of the connector.
   * @type {string}
   * @memberof Connector
   */
  name?: string
  /**
   *
   * @type {ConnectorStatus}
   * @memberof Connector
   */
  status?: ConnectorStatus
  /**
   *
   * @type {string}
   * @memberof Connector
   */
  description?: string | null
  /**
   * Link to a small square icon for the connector.
   * @type {string}
   * @memberof Connector
   */
  icon_url?: string
  /**
   * Link to the full logo for the connector.
   * @type {string}
   * @memberof Connector
   */
  logo_url?: string
  /**
   * Link to the connector's website.
   * @type {string}
   * @memberof Connector
   */
  website_url?: string
  /**
   * Type of authorization used by the connector
   * @type {string}
   * @memberof Connector
   */
  readonly auth_type?: ConnectorAuthType
  /**
   *
   * @type {boolean}
   * @memberof Connector
   */
  readonly auth_only?: boolean
  /**
   * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
   * @type {string}
   * @memberof Connector
   */
  readonly oauth_grant_type?: ConnectorOauthGrantType
  /**
   * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
   * @type {string}
   * @memberof Connector
   */
  readonly oauth_credentials_source?: ConnectorOauthCredentialsSource
  /**
   * Indicates whether Apideck Sandbox OAuth credentials are available.
   * @type {boolean}
   * @memberof Connector
   */
  has_sandbox_credentials?: boolean
  /**
   *
   * @type {Array<ConnectorSetting>}
   * @memberof Connector
   */
  settings?: Array<ConnectorSetting>
  /**
   * Service provider identifier
   * @type {string}
   * @memberof Connector
   */
  service_id?: string
  /**
   * List of Unified APIs that feature this connector.
   * @type {Array<ConnectorUnifiedApis>}
   * @memberof Connector
   */
  unified_apis?: Array<ConnectorUnifiedApis>
  /**
   * List of resources that are supported on the connector.
   * @type {Array<ConnectorSupportedResources>}
   * @memberof Connector
   */
  supported_resources?: Array<ConnectorSupportedResources>
  /**
   * List of resources that have settings that can be configured.
   * @type {Array<string>}
   * @memberof Connector
   */
  configurable_resources?: Array<string>
  /**
   * List of events that are supported on the connector. Events are delivered via Webhooks.
   * @type {Array<ConnectorSupportedEvents>}
   * @memberof Connector
   */
  supported_events?: Array<ConnectorSupportedEvents>
  /**
   *
   * @type {Array<ConnectorDoc>}
   * @memberof Connector
   */
  docs?: Array<ConnectorDoc>
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectorAuthType {
  oauth2 = 'oauth2',
  apiKey = 'apiKey',
  basic = 'basic',
  custom = 'custom',
  none = 'none'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectorOauthGrantType {
  authorization_code = 'authorization_code',
  client_credentials = 'client_credentials'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectorOauthCredentialsSource {
  integration = 'integration',
  connection = 'connection'
}

export function ConnectorFromJSON(json: any): Connector {
  return ConnectorFromJSONTyped(json, false)
}

export function ConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Connector {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: !exists(json, 'status') ? undefined : ConnectorStatusFromJSON(json['status']),
    description: !exists(json, 'description') ? undefined : json['description'],
    icon_url: !exists(json, 'icon_url') ? undefined : json['icon_url'],
    logo_url: !exists(json, 'logo_url') ? undefined : json['logo_url'],
    website_url: !exists(json, 'website_url') ? undefined : json['website_url'],
    auth_type: !exists(json, 'auth_type') ? undefined : json['auth_type'],
    auth_only: !exists(json, 'auth_only') ? undefined : json['auth_only'],
    oauth_grant_type: !exists(json, 'oauth_grant_type') ? undefined : json['oauth_grant_type'],
    oauth_credentials_source: !exists(json, 'oauth_credentials_source')
      ? undefined
      : json['oauth_credentials_source'],
    has_sandbox_credentials: !exists(json, 'has_sandbox_credentials')
      ? undefined
      : json['has_sandbox_credentials'],
    settings: !exists(json, 'settings')
      ? undefined
      : (json['settings'] as Array<any>).map(ConnectorSettingFromJSON),
    service_id: !exists(json, 'service_id') ? undefined : json['service_id'],
    unified_apis: !exists(json, 'unified_apis')
      ? undefined
      : (json['unified_apis'] as Array<any>).map(ConnectorUnifiedApisFromJSON),
    supported_resources: !exists(json, 'supported_resources')
      ? undefined
      : (json['supported_resources'] as Array<any>).map(ConnectorSupportedResourcesFromJSON),
    configurable_resources: !exists(json, 'configurable_resources')
      ? undefined
      : json['configurable_resources'],
    supported_events: !exists(json, 'supported_events')
      ? undefined
      : (json['supported_events'] as Array<any>).map(ConnectorSupportedEventsFromJSON),
    docs: !exists(json, 'docs') ? undefined : (json['docs'] as Array<any>).map(ConnectorDocFromJSON)
  }
}

export function ConnectorToJSON(value?: Connector | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    status: ConnectorStatusToJSON(value.status),
    description: value.description,
    icon_url: value.icon_url,
    logo_url: value.logo_url,
    website_url: value.website_url,
    has_sandbox_credentials: value.has_sandbox_credentials,
    settings:
      value.settings === undefined
        ? undefined
        : (value.settings as Array<any>).map(ConnectorSettingToJSON),
    service_id: value.service_id,
    unified_apis:
      value.unified_apis === undefined
        ? undefined
        : (value.unified_apis as Array<any>).map(ConnectorUnifiedApisToJSON),
    supported_resources:
      value.supported_resources === undefined
        ? undefined
        : (value.supported_resources as Array<any>).map(ConnectorSupportedResourcesToJSON),
    configurable_resources: value.configurable_resources,
    supported_events:
      value.supported_events === undefined
        ? undefined
        : (value.supported_events as Array<any>).map(ConnectorSupportedEventsToJSON),
    docs: value.docs === undefined ? undefined : (value.docs as Array<any>).map(ConnectorDocToJSON)
  }
}
