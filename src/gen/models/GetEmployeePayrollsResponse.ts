/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  EmployeePayrolls,
  EmployeePayrollsFromJSON,
  EmployeePayrollsToJSON
} from './EmployeePayrolls'

/**
 *
 * @export
 * @interface GetEmployeePayrollsResponse
 */
export interface GetEmployeePayrollsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEmployeePayrollsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEmployeePayrollsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEmployeePayrollsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEmployeePayrollsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEmployeePayrollsResponse
   */
  operation: string
  /**
   *
   * @type {EmployeePayrolls}
   * @memberof GetEmployeePayrollsResponse
   */
  data: EmployeePayrolls
}

export function GetEmployeePayrollsResponseFromJSON(json: any): GetEmployeePayrollsResponse {
  return GetEmployeePayrollsResponseFromJSONTyped(json, false)
}

export function GetEmployeePayrollsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEmployeePayrollsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EmployeePayrollsFromJSON(json['data'])
  }
}

export function GetEmployeePayrollsResponseToJSON(value?: GetEmployeePayrollsResponse | null): any {
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
    data: EmployeePayrollsToJSON(value.data)
  }
}
