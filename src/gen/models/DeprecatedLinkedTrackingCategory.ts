/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface DeprecatedLinkedTrackingCategory
 */
export interface DeprecatedLinkedTrackingCategory {
  /**
   * The unique identifier for the tracking category.
   * @type {string}
   * @memberof DeprecatedLinkedTrackingCategory
   */
  id?: string
  /**
   * The name of the tracking category.
   * @type {string}
   * @memberof DeprecatedLinkedTrackingCategory
   */
  name?: string | null
}

export function DeprecatedLinkedTrackingCategoryFromJSON(
  json: any
): DeprecatedLinkedTrackingCategory {
  return DeprecatedLinkedTrackingCategoryFromJSONTyped(json, false)
}

export function DeprecatedLinkedTrackingCategoryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeprecatedLinkedTrackingCategory {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function DeprecatedLinkedTrackingCategoryToJSON(
  value?: DeprecatedLinkedTrackingCategory | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name
  }
}
