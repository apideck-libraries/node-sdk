/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.52.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface EmployeesFilter
 */
export interface EmployeesFilter {
  /**
   * Company ID to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  company_id?: string
}

export function EmployeesFilterFromJSON(json: any): EmployeesFilter {
  return EmployeesFilterFromJSONTyped(json, false)
}

export function EmployeesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    company_id: !exists(json, 'company_id') ? undefined : json['company_id']
  }
}

export function EmployeesFilterToJSON(value?: EmployeesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_id: value.company_id
  }
}
