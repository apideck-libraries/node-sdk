/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.3
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
 * @interface ConnectorOauthScopes1
 */
export interface ConnectorOauthScopes1 {
  /**
   * ID of the OAuth scope.
   * @type {string}
   * @memberof ConnectorOauthScopes1
   */
  id?: string
  /**
   * Label of the OAuth scope.
   * @type {string}
   * @memberof ConnectorOauthScopes1
   */
  label?: string
}

export function ConnectorOauthScopes1FromJSON(json: any): ConnectorOauthScopes1 {
  return ConnectorOauthScopes1FromJSONTyped(json, false)
}

export function ConnectorOauthScopes1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorOauthScopes1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    label: !exists(json, 'label') ? undefined : json['label']
  }
}

export function ConnectorOauthScopes1ToJSON(value?: ConnectorOauthScopes1 | null): any {
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
