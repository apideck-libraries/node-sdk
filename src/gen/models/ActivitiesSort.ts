/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
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
 * @interface ActivitiesSort
 */
export interface ActivitiesSort {
  /**
   * The field on which to sort the Activities
   * @type {string}
   * @memberof ActivitiesSort
   */
  by?: ActivitiesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof ActivitiesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum ActivitiesSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function ActivitiesSortFromJSON(json: any): ActivitiesSort {
  return ActivitiesSortFromJSONTyped(json, false)
}

export function ActivitiesSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ActivitiesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function ActivitiesSortToJSON(value?: ActivitiesSort | null): any {
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
