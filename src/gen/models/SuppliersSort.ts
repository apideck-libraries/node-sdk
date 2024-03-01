/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { SortDirection, SortDirectionFromJSON, SortDirectionToJSON } from './SortDirection'

/**
 *
 * @export
 * @interface SuppliersSort
 */
export interface SuppliersSort {
  /**
   * The field on which to sort the Suppliers
   * @type {string}
   * @memberof SuppliersSort
   */
  by?: SuppliersSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof SuppliersSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum SuppliersSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function SuppliersSortFromJSON(json: any): SuppliersSort {
  return SuppliersSortFromJSONTyped(json, false)
}

export function SuppliersSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuppliersSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function SuppliersSortToJSON(value?: SuppliersSort | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    by: value.by,
    direction: SortDirectionToJSON(value.direction)
  }
}
