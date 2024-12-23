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

import { Department, DepartmentFromJSON, DepartmentToJSON } from './Department'

/**
 *
 * @export
 * @interface GetDepartmentResponse
 */
export interface GetDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {Department}
   * @memberof GetDepartmentResponse
   */
  data: Department
}

export function GetDepartmentResponseFromJSON(json: any): GetDepartmentResponse {
  return GetDepartmentResponseFromJSONTyped(json, false)
}

export function GetDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetDepartmentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: DepartmentFromJSON(json['data'])
  }
}

export function GetDepartmentResponseToJSON(value?: GetDepartmentResponse | null): any {
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
    data: DepartmentToJSON(value.data)
  }
}
