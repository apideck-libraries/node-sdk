/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.2
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
 * @interface OpportunitiesSort
 */
export interface OpportunitiesSort {
  /**
   * The field on which to sort the Opportunities
   * @type {string}
   * @memberof OpportunitiesSort
   */
  by?: OpportunitiesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof OpportunitiesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum OpportunitiesSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at',
  title = 'title',
  win_probability = 'win_probability',
  monetary_amount = 'monetary_amount',
  status = 'status'
}

export function OpportunitiesSortFromJSON(json: any): OpportunitiesSort {
  return OpportunitiesSortFromJSONTyped(json, false)
}

export function OpportunitiesSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OpportunitiesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function OpportunitiesSortToJSON(value?: OpportunitiesSort | null): any {
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
