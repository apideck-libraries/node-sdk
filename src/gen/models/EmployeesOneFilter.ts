/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface EmployeesOneFilter
 */
export interface EmployeesOneFilter {
  /**
   * Company ID to filter on
   * @type {string}
   * @memberof EmployeesOneFilter
   */
  company_id?: string
}

export function EmployeesOneFilterFromJSON(json: any): EmployeesOneFilter {
  return EmployeesOneFilterFromJSONTyped(json, false)
}

export function EmployeesOneFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeesOneFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    company_id: !exists(json, 'company_id') ? undefined : json['company_id']
  }
}

export function EmployeesOneFilterToJSON(value?: EmployeesOneFilter | null): any {
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
