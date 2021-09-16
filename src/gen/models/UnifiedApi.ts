/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.12.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Name of Apideck Unified Api
 * @export
 * @enum {string}
 */
export enum UnifiedApi {
  crm = 'crm',
  lead = 'lead',
  proxy = 'proxy',
  vault = 'vault',
  accounting = 'accounting'
}

export function UnifiedApiFromJSON(json: any): UnifiedApi {
  return UnifiedApiFromJSONTyped(json, false)
}

export function UnifiedApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedApi {
  return json as UnifiedApi
}

export function UnifiedApiToJSON(value?: UnifiedApi | null): any {
  return value as any
}
