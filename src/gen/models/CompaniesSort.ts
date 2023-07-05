/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.5
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
 * @interface CompaniesSort
 */
export interface CompaniesSort {
  /**
   * The field on which to sort the Companies
   * @type {string}
   * @memberof CompaniesSort
   */
  by?: CompaniesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof CompaniesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum CompaniesSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at',
  name = 'name'
}

export function CompaniesSortFromJSON(json: any): CompaniesSort {
  return CompaniesSortFromJSONTyped(json, false)
}

export function CompaniesSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompaniesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function CompaniesSortToJSON(value?: CompaniesSort | null): any {
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
