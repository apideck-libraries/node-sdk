/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.1
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
 * @interface ConnectorOauthScopes
 */
export interface ConnectorOauthScopes {
  /**
   * ID of the OAuth scope.
   * @type {string}
   * @memberof ConnectorOauthScopes
   */
  id?: string
  /**
   * Label of the OAuth scope.
   * @type {string}
   * @memberof ConnectorOauthScopes
   */
  label?: string
  /**
   * List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes.
   * @type {Array<string>}
   * @memberof ConnectorOauthScopes
   */
  default_apis?: Array<string>
}

export function ConnectorOauthScopesFromJSON(json: any): ConnectorOauthScopes {
  return ConnectorOauthScopesFromJSONTyped(json, false)
}

export function ConnectorOauthScopesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorOauthScopes {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    label: !exists(json, 'label') ? undefined : json['label'],
    default_apis: !exists(json, 'default_apis') ? undefined : json['default_apis']
  }
}

export function ConnectorOauthScopesToJSON(value?: ConnectorOauthScopes | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    label: value.label,
    default_apis: value.default_apis
  }
}
