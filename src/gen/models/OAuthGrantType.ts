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

/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 * @export
 * @enum {string}
 */
export enum OAuthGrantType {
  authorization_code = 'authorization_code',
  client_credentials = 'client_credentials',
  password = 'password'
}

export function OAuthGrantTypeFromJSON(json: any): OAuthGrantType {
  return OAuthGrantTypeFromJSONTyped(json, false)
}

export function OAuthGrantTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OAuthGrantType {
  return json as OAuthGrantType
}

export function OAuthGrantTypeToJSON(value?: OAuthGrantType | null): any {
  return value as any
}
