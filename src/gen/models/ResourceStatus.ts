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
 * Status of the resource. Resources with status live or beta are callable.
 * @export
 * @enum {string}
 */
export enum ResourceStatus {
  live = 'live',
  beta = 'beta',
  development = 'development',
  upcoming = 'upcoming',
  considering = 'considering'
}

export function ResourceStatusFromJSON(json: any): ResourceStatus {
  return ResourceStatusFromJSONTyped(json, false)
}

export function ResourceStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ResourceStatus {
  return json as ResourceStatus
}

export function ResourceStatusToJSON(value?: ResourceStatus | null): any {
  return value as any
}
