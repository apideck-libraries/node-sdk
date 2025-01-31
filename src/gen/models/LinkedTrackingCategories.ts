/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LinkedTrackingCategory } from './LinkedTrackingCategory'

/**
 * A list of linked tracking categories.
 * @export
 * @interface LinkedTrackingCategories
 */
export interface LinkedTrackingCategories extends Array<LinkedTrackingCategory> {}

export function LinkedTrackingCategoriesFromJSON(json: any): LinkedTrackingCategories {
  return LinkedTrackingCategoriesFromJSONTyped(json, false)
}

export function LinkedTrackingCategoriesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedTrackingCategories {
  return json
}

export function LinkedTrackingCategoriesToJSON(value?: LinkedTrackingCategories | null): any {
  return value
}
