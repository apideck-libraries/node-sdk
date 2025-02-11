/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.3
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
 * @interface PurchaseOrdersSort
 */
export interface PurchaseOrdersSort {
  /**
   * The field on which to sort the Purchase Orders
   * @type {string}
   * @memberof PurchaseOrdersSort
   */
  by?: PurchaseOrdersSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof PurchaseOrdersSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum PurchaseOrdersSortBy {
  updated_at = 'updated_at',
  created_at = 'created_at'
}

export function PurchaseOrdersSortFromJSON(json: any): PurchaseOrdersSort {
  return PurchaseOrdersSortFromJSONTyped(json, false)
}

export function PurchaseOrdersSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PurchaseOrdersSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function PurchaseOrdersSortToJSON(value?: PurchaseOrdersSort | null): any {
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
