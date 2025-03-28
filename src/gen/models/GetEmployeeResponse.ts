/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Employee, EmployeeFromJSON, EmployeeToJSON } from './Employee'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetEmployeeResponse
 */
export interface GetEmployeeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEmployeeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEmployeeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEmployeeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEmployeeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEmployeeResponse
   */
  operation: string
  /**
   *
   * @type {Employee}
   * @memberof GetEmployeeResponse
   */
  data: Employee
  /**
   *
   * @type {Raw}
   * @memberof GetEmployeeResponse
   */
  _raw?: Raw | null
}

export function GetEmployeeResponseFromJSON(json: any): GetEmployeeResponse {
  return GetEmployeeResponseFromJSONTyped(json, false)
}

export function GetEmployeeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEmployeeResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EmployeeFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetEmployeeResponseToJSON(value?: GetEmployeeResponse | null): any {
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
    data: EmployeeToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
