/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.8.0
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
 * @interface LedgerAccountCategories
 */
export interface LedgerAccountCategories {
  /**
   *
   * @type {string}
   * @memberof LedgerAccountCategories
   */
  readonly id?: string
  /**
   * The name of the category.
   * @type {string}
   * @memberof LedgerAccountCategories
   */
  readonly name?: string
}

export function LedgerAccountCategoriesFromJSON(json: any): LedgerAccountCategories {
  return LedgerAccountCategoriesFromJSONTyped(json, false)
}

export function LedgerAccountCategoriesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LedgerAccountCategories {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function LedgerAccountCategoriesToJSON(value?: LedgerAccountCategories | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
