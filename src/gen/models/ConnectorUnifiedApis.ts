/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConnectorOauthScopes1,
  ConnectorOauthScopes1FromJSON,
  ConnectorOauthScopes1ToJSON
} from './ConnectorOauthScopes1'
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
   *
   * @type {Array<ConnectorOauthScopes1>}
   * @memberof ConnectorUnifiedApis
   */
  oauth_scopes?: Array<ConnectorOauthScopes1>
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
    oauth_scopes: !exists(json, 'oauth_scopes')
      ? undefined
      : (json['oauth_scopes'] as Array<any>).map(ConnectorOauthScopes1FromJSON)
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
    oauth_scopes:
      value.oauth_scopes === undefined
        ? undefined
        : (value.oauth_scopes as Array<any>).map(ConnectorOauthScopes1ToJSON)
  }
}
