/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
 * @interface EmployeesSort
 */
export interface EmployeesSort {
  /**
   * The field on which to sort the Employees
   * @type {string}
   * @memberof EmployeesSort
   */
  by?: EmployeesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof EmployeesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeesSortBy {
  first_name = 'first_name',
  last_name = 'last_name',
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function EmployeesSortFromJSON(json: any): EmployeesSort {
  return EmployeesSortFromJSONTyped(json, false)
}

export function EmployeesSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function EmployeesSortToJSON(value?: EmployeesSort | null): any {
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
