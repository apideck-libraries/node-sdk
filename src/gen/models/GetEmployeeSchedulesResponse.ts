/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  EmployeeSchedules,
  EmployeeSchedulesFromJSON,
  EmployeeSchedulesToJSON
} from './EmployeeSchedules'

/**
 *
 * @export
 * @interface GetEmployeeSchedulesResponse
 */
export interface GetEmployeeSchedulesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEmployeeSchedulesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEmployeeSchedulesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEmployeeSchedulesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEmployeeSchedulesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEmployeeSchedulesResponse
   */
  operation: string
  /**
   *
   * @type {EmployeeSchedules}
   * @memberof GetEmployeeSchedulesResponse
   */
  data: EmployeeSchedules
}

export function GetEmployeeSchedulesResponseFromJSON(json: any): GetEmployeeSchedulesResponse {
  return GetEmployeeSchedulesResponseFromJSONTyped(json, false)
}

export function GetEmployeeSchedulesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEmployeeSchedulesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EmployeeSchedulesFromJSON(json['data'])
  }
}

export function GetEmployeeSchedulesResponseToJSON(
  value?: GetEmployeeSchedulesResponse | null
): any {
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
    data: EmployeeSchedulesToJSON(value.data)
  }
}
