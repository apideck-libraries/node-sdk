/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

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
  by: CompaniesSortBy
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
  createdAt = 'created_at',
  updatedAt = 'updated_at',
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
    by: json['by'],
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
