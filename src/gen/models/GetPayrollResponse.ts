/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.59.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Payroll, PayrollFromJSON, PayrollToJSON } from './Payroll'

/**
 *
 * @export
 * @interface GetPayrollResponse
 */
export interface GetPayrollResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPayrollResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPayrollResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPayrollResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPayrollResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPayrollResponse
   */
  operation: string
  /**
   *
   * @type {Payroll}
   * @memberof GetPayrollResponse
   */
  data: Payroll
}

export function GetPayrollResponseFromJSON(json: any): GetPayrollResponse {
  return GetPayrollResponseFromJSONTyped(json, false)
}

export function GetPayrollResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPayrollResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: PayrollFromJSON(json['data'])
  }
}

export function GetPayrollResponseToJSON(value?: GetPayrollResponse | null): any {
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
    data: PayrollToJSON(value.data)
  }
}
