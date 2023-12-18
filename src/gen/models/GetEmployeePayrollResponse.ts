/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmployeePayroll, EmployeePayrollFromJSON, EmployeePayrollToJSON } from './EmployeePayroll'

/**
 *
 * @export
 * @interface GetEmployeePayrollResponse
 */
export interface GetEmployeePayrollResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEmployeePayrollResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEmployeePayrollResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEmployeePayrollResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEmployeePayrollResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEmployeePayrollResponse
   */
  operation: string
  /**
   *
   * @type {EmployeePayroll}
   * @memberof GetEmployeePayrollResponse
   */
  data: EmployeePayroll
}

export function GetEmployeePayrollResponseFromJSON(json: any): GetEmployeePayrollResponse {
  return GetEmployeePayrollResponseFromJSONTyped(json, false)
}

export function GetEmployeePayrollResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEmployeePayrollResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EmployeePayrollFromJSON(json['data'])
  }
}

export function GetEmployeePayrollResponseToJSON(value?: GetEmployeePayrollResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: EmployeePayrollToJSON(value.data)
  }
}
