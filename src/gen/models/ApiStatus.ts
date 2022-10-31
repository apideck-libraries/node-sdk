/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.75.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Status of the API. APIs with status live or beta are callable.
 * @export
 * @enum {string}
 */
export enum ApiStatus {
  live = 'live',
  beta = 'beta',
  development = 'development',
  considering = 'considering'
}

export function ApiStatusFromJSON(json: any): ApiStatus {
  return ApiStatusFromJSONTyped(json, false)
}

export function ApiStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiStatus {
  return json as ApiStatus
}

export function ApiStatusToJSON(value?: ApiStatus | null): any {
  return value as any
}
