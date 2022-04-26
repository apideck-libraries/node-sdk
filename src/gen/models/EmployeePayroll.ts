/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.1
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
 * @interface EmployeePayroll
 */
export interface EmployeePayroll {
  /**
   *
   * @type {Employee}
   * @memberof EmployeePayroll
   */
  employee?: Employee
  /**
   *
   * @type {Payroll}
   * @memberof EmployeePayroll
   */
  payroll?: Payroll
}

export function EmployeePayrollFromJSON(json: any): EmployeePayroll {
  return EmployeePayrollFromJSONTyped(json, false)
}

export function EmployeePayrollFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeePayroll {
  if (json === undefined || json === null) {
    return json
  }
  return {
    employee: !exists(json, 'employee') ? undefined : EmployeeFromJSON(json['employee']),
    payroll: !exists(json, 'payroll') ? undefined : PayrollFromJSON(json['payroll'])
  }
}

export function EmployeePayrollToJSON(value?: EmployeePayroll | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee: EmployeeToJSON(value.employee),
    payroll: PayrollToJSON(value.payroll)
  }
}
