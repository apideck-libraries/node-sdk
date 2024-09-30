/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
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
  Star = '*',
  vault_connection_created = 'vault.connection.created',
  vault_connection_updated = 'vault.connection.updated',
  vault_connection_disabled = 'vault.connection.disabled',
  vault_connection_deleted = 'vault.connection.deleted',
  vault_connection_callable = 'vault.connection.callable',
  vault_connection_revoked = 'vault.connection.revoked',
  vault_connection_token_refresh_failed = 'vault.connection.token_refresh.failed'
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
