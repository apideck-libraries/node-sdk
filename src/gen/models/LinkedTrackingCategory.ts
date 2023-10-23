/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.3
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
 * @interface LinkedTrackingCategory
 */
export interface LinkedTrackingCategory {
  /**
   * The unique identifier for the tracking category.
   * @type {string}
   * @memberof LinkedTrackingCategory
   */
  id?: string
  /**
   * The name of the tracking category.
   * @type {string}
   * @memberof LinkedTrackingCategory
   */
  name?: string | null
}

export function LinkedTrackingCategoryFromJSON(json: any): LinkedTrackingCategory {
  return LinkedTrackingCategoryFromJSONTyped(json, false)
}

export function LinkedTrackingCategoryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedTrackingCategory {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function LinkedTrackingCategoryToJSON(value?: LinkedTrackingCategory | null): any {
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
