/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.64.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Employee, EmployeeFromJSON, EmployeeToJSON } from './Employee'
import { Payroll, PayrollFromJSON, PayrollToJSON } from './Payroll'

/**
 *
 * @export
 * @interface EmployeePayrolls
 */
export interface EmployeePayrolls {
  /**
   *
   * @type {Employee}
   * @memberof EmployeePayrolls
   */
  employee?: Employee
  /**
   *
   * @type {Array<Payroll>}
   * @memberof EmployeePayrolls
   */
  payrolls?: Array<Payroll>
}

export function EmployeePayrollsFromJSON(json: any): EmployeePayrolls {
  return EmployeePayrollsFromJSONTyped(json, false)
}

export function EmployeePayrollsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeePayrolls {
  if (json === undefined || json === null) {
    return json
  }
  return {
    employee: !exists(json, 'employee') ? undefined : EmployeeFromJSON(json['employee']),
    payrolls: !exists(json, 'payrolls')
      ? undefined
      : (json['payrolls'] as Array<any>).map(PayrollFromJSON)
  }
}

export function EmployeePayrollsToJSON(value?: EmployeePayrolls | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee: EmployeeToJSON(value.employee),
    payrolls:
      value.payrolls === undefined ? undefined : (value.payrolls as Array<any>).map(PayrollToJSON)
  }
}
