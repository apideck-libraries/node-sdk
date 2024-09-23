/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ConnectorEvent, ConnectorEventFromJSON, ConnectorEventToJSON } from './ConnectorEvent'
import {
  ConnectorOauthScopes1,
  ConnectorOauthScopes1FromJSON,
  ConnectorOauthScopes1ToJSON
} from './ConnectorOauthScopes1'
import {
  LinkedConnectorResource,
  LinkedConnectorResourceFromJSON,
  LinkedConnectorResourceToJSON
} from './LinkedConnectorResource'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'

/**
 *
 * @export
 * @interface ConnectorUnifiedApis
 */
export interface ConnectorUnifiedApis {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof ConnectorUnifiedApis
   */
  id?: UnifiedApiId
  /**
   * Name of the API.
   * @type {string}
   * @memberof ConnectorUnifiedApis
   */
  name?: string
  /**
   * Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API
   * @type {boolean}
   * @memberof ConnectorUnifiedApis
   */
  readonly auth_only?: boolean
  /**
   *
   * @type {Array<ConnectorOauthScopes1>}
   * @memberof ConnectorUnifiedApis
   */
  oauth_scopes?: Array<ConnectorOauthScopes1>
  /**
   * List of resources that are supported on the connector.
   * @type {Array<LinkedConnectorResource>}
   * @memberof ConnectorUnifiedApis
   */
  supported_resources?: Array<LinkedConnectorResource>
  /**
   * List of resources that are not supported on the downstream.
   * @type {Array<string>}
   * @memberof ConnectorUnifiedApis
   */
  downstream_unsupported_resources?: Array<string>
  /**
   * List of events that are supported on the connector for this Unified API.
   * @type {Array<ConnectorEvent>}
   * @memberof ConnectorUnifiedApis
   */
  supported_events?: Array<ConnectorEvent>
}

export function ConnectorUnifiedApisFromJSON(json: any): ConnectorUnifiedApis {
  return ConnectorUnifiedApisFromJSONTyped(json, false)
}

export function ConnectorUnifiedApisFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorUnifiedApis {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : UnifiedApiIdFromJSON(json['id']),
    name: !exists(json, 'name') ? undefined : json['name'],
    auth_only: !exists(json, 'auth_only') ? undefined : json['auth_only'],
    oauth_scopes: !exists(json, 'oauth_scopes')
      ? undefined
      : (json['oauth_scopes'] as Array<any>).map(ConnectorOauthScopes1FromJSON),
    supported_resources: !exists(json, 'supported_resources')
      ? undefined
      : (json['supported_resources'] as Array<any>).map(LinkedConnectorResourceFromJSON),
    downstream_unsupported_resources: !exists(json, 'downstream_unsupported_resources')
      ? undefined
      : json['downstream_unsupported_resources'],
    supported_events: !exists(json, 'supported_events')
      ? undefined
      : (json['supported_events'] as Array<any>).map(ConnectorEventFromJSON)
  }
}

export function ConnectorUnifiedApisToJSON(value?: ConnectorUnifiedApis | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: UnifiedApiIdToJSON(value.id),
    name: value.name,
    oauth_scopes:
      value.oauth_scopes === undefined
        ? undefined
        : (value.oauth_scopes as Array<any>).map(ConnectorOauthScopes1ToJSON),
    supported_resources:
      value.supported_resources === undefined
        ? undefined
        : (value.supported_resources as Array<any>).map(LinkedConnectorResourceToJSON),
    downstream_unsupported_resources: value.downstream_unsupported_resources,
    supported_events:
      value.supported_events === undefined
        ? undefined
        : (value.supported_events as Array<any>).map(ConnectorEventToJSON)
  }
}
