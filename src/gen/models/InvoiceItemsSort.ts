/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
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
 * @interface InvoiceItemsSort
 */
export interface InvoiceItemsSort {
  /**
   * The field on which to sort the Invoice Items
   * @type {string}
   * @memberof InvoiceItemsSort
   */
  by?: InvoiceItemsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof InvoiceItemsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceItemsSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function InvoiceItemsSortFromJSON(json: any): InvoiceItemsSort {
  return InvoiceItemsSortFromJSONTyped(json, false)
}

export function InvoiceItemsSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceItemsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function InvoiceItemsSortToJSON(value?: InvoiceItemsSort | null): any {
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
