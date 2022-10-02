/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface UpdateDepartmentResponse
 */
export interface UpdateDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateDepartmentResponse
   */
  data: UnifiedId
}

export function UpdateDepartmentResponseFromJSON(json: any): UpdateDepartmentResponse {
  return UpdateDepartmentResponseFromJSONTyped(json, false)
}

export function UpdateDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateDepartmentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  }
}

export function UpdateDepartmentResponseToJSON(value?: UpdateDepartmentResponse | null): any {
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
    data: UnifiedIdToJSON(value.data)
  }
}
