/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.6.0
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
 * @interface EcommerceProductCategories
 */
export interface EcommerceProductCategories {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceProductCategories
   */
  readonly id?: string
  /**
   * The name of the category.
   * @type {string}
   * @memberof EcommerceProductCategories
   */
  name?: string
}

export function EcommerceProductCategoriesFromJSON(json: any): EcommerceProductCategories {
  return EcommerceProductCategoriesFromJSONTyped(json, false)
}

export function EcommerceProductCategoriesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProductCategories {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function EcommerceProductCategoriesToJSON(value?: EcommerceProductCategories | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name
  }
}
