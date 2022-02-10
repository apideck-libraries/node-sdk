/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The direction in which to sort the results
 * @export
 * @enum {string}
 */
export enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

export function SortDirectionFromJSON(json: any): SortDirection {
  return SortDirectionFromJSONTyped(json, false)
}

export function SortDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortDirection {
  return json as SortDirection
}

export function SortDirectionToJSON(value?: SortDirection | null): any {
  return value as any
}
