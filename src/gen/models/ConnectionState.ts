/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * [Connection state flow](#section/Connection-state)
 * @export
 * @enum {string}
 */
export enum ConnectionState {
  available = 'available',
  callable = 'callable',
  added = 'added',
  authorized = 'authorized'
}

export function ConnectionStateFromJSON(json: any): ConnectionState {
  return ConnectionStateFromJSONTyped(json, false)
}

export function ConnectionStateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionState {
  return json as ConnectionState
}

export function ConnectionStateToJSON(value?: ConnectionState | null): any {
  return value as any
}
