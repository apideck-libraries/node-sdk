/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.13.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Type of authorization used by the connector
 * @export
 * @enum {string}
 */
export enum AuthType {
  oauth2 = 'oauth2',
  apiKey = 'apiKey',
  basic = 'basic',
  none = 'none'
}

export function AuthTypeFromJSON(json: any): AuthType {
  return AuthTypeFromJSONTyped(json, false)
}

export function AuthTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthType {
  return json as AuthType
}

export function AuthTypeToJSON(value?: AuthType | null): any {
  return value as any
}
