/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
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
    label: !exists(json, 'label') ? undefined : json['label']
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
    label: value.label
  }
}
