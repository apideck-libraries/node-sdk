/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.4.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @enum {string}
 */
export enum VaultEventType {
  created = 'vault.connection.created',
  updated = 'vault.connection.updated',
  deleted = 'vault.connection.deleted',
  callable = 'vault.connection.callable'
}

export function VaultEventTypeFromJSON(json: any): VaultEventType {
  return VaultEventTypeFromJSONTyped(json, false)
}

export function VaultEventTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): VaultEventType {
  return json as VaultEventType
}

export function VaultEventTypeToJSON(value?: VaultEventType | null): any {
  return value as any
}
