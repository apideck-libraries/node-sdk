/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
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
 * @interface BillsSort
 */
export interface BillsSort {
  /**
   * The field on which to sort the Bills
   * @type {string}
   * @memberof BillsSort
   */
  by?: BillsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof BillsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum BillsSortBy {
  updated_at = 'updated_at',
  created_at = 'created_at'
}

export function BillsSortFromJSON(json: any): BillsSort {
  return BillsSortFromJSONTyped(json, false)
}

export function BillsSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function BillsSortToJSON(value?: BillsSort | null): any {
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
