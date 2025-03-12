/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.3
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
 * @interface CreditNotesSort
 */
export interface CreditNotesSort {
  /**
   * The field on which to sort the Customers
   * @type {string}
   * @memberof CreditNotesSort
   */
  by?: CreditNotesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof CreditNotesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum CreditNotesSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function CreditNotesSortFromJSON(json: any): CreditNotesSort {
  return CreditNotesSortFromJSONTyped(json, false)
}

export function CreditNotesSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreditNotesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function CreditNotesSortToJSON(value?: CreditNotesSort | null): any {
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
