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
import { SortDirection, SortDirectionFromJSON, SortDirectionToJSON } from './SortDirection'

/**
 *
 * @export
 * @interface InvoicesSort
 */
export interface InvoicesSort {
  /**
   * The field on which to sort the Invoices
   * @type {string}
   * @memberof InvoicesSort
   */
  by?: InvoicesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof InvoicesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum InvoicesSortBy {
  updated_at = 'updated_at'
}

export function InvoicesSortFromJSON(json: any): InvoicesSort {
  return InvoicesSortFromJSONTyped(json, false)
}

export function InvoicesSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function InvoicesSortToJSON(value?: InvoicesSort | null): any {
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
