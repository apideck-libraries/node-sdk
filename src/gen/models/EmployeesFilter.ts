/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.0
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
  /**
   * Email to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  email?: string
  /**
   * First Name to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  first_name?: string
  /**
   * Job title to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  title?: string
  /**
   * Last Name to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  last_name?: string
  /**
   * Manager id to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  manager_id?: string
  /**
   * Employment status to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  employment_status?: EmployeesFilterEmploymentStatus
  /**
   * Employee number to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  employee_number?: string
  /**
   * ID of the department to filter on
   * @type {string}
   * @memberof EmployeesFilter
   */
  department_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeesFilterEmploymentStatus {
  active = 'active',
  inactive = 'inactive',
  terminated = 'terminated',
  other = 'other'
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
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    email: !exists(json, 'email') ? undefined : json['email'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    title: !exists(json, 'title') ? undefined : json['title'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    manager_id: !exists(json, 'manager_id') ? undefined : json['manager_id'],
    employment_status: !exists(json, 'employment_status') ? undefined : json['employment_status'],
    employee_number: !exists(json, 'employee_number') ? undefined : json['employee_number'],
    department_id: !exists(json, 'department_id') ? undefined : json['department_id']
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
    company_id: value.company_id,
    email: value.email,
    first_name: value.first_name,
    title: value.title,
    last_name: value.last_name,
    manager_id: value.manager_id,
    employment_status: value.employment_status,
    employee_number: value.employee_number,
    department_id: value.department_id
  }
}
