/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
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
 * @interface OrdersSort
 */
export interface OrdersSort {
  /**
   * The field on which to sort the Orders
   * @type {string}
   * @memberof OrdersSort
   */
  by?: OrdersSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof OrdersSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum OrdersSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at',
  name = 'name'
}

export function OrdersSortFromJSON(json: any): OrdersSort {
  return OrdersSortFromJSONTyped(json, false)
}

export function OrdersSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrdersSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function OrdersSortToJSON(value?: OrdersSort | null): any {
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
