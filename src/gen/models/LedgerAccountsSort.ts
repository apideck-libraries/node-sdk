/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.4
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
 * @interface LedgerAccountsSort
 */
export interface LedgerAccountsSort {
  /**
   * The field on which to sort the Ledger Accounts
   * @type {string}
   * @memberof LedgerAccountsSort
   */
  by?: LedgerAccountsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof LedgerAccountsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum LedgerAccountsSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function LedgerAccountsSortFromJSON(json: any): LedgerAccountsSort {
  return LedgerAccountsSortFromJSONTyped(json, false)
}

export function LedgerAccountsSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LedgerAccountsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function LedgerAccountsSortToJSON(value?: LedgerAccountsSort | null): any {
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
