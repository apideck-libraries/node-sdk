/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.39.0
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
 * @interface GetPayrollsResponse
 */
export interface GetPayrollsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPayrollsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPayrollsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPayrollsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPayrollsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPayrollsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Payroll>}
   * @memberof GetPayrollsResponse
   */
  data: Array<Payroll>
}

export function GetPayrollsResponseFromJSON(json: any): GetPayrollsResponse {
  return GetPayrollsResponseFromJSONTyped(json, false)
}

export function GetPayrollsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPayrollsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(PayrollFromJSON)
  }
}

export function GetPayrollsResponseToJSON(value?: GetPayrollsResponse | null): any {
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
    data: (value.data as Array<any>).map(PayrollToJSON)
  }
}
