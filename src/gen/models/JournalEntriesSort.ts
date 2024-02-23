/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.3
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
 * @interface JournalEntriesSort
 */
export interface JournalEntriesSort {
  /**
   * The field on which to sort the Journal Entries.
   * @type {string}
   * @memberof JournalEntriesSort
   */
  by?: JournalEntriesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof JournalEntriesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum JournalEntriesSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function JournalEntriesSortFromJSON(json: any): JournalEntriesSort {
  return JournalEntriesSortFromJSONTyped(json, false)
}

export function JournalEntriesSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): JournalEntriesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function JournalEntriesSortToJSON(value?: JournalEntriesSort | null): any {
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
