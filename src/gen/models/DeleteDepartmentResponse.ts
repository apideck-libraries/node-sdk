/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.4.0
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
 * @interface DeleteDepartmentResponse
 */
export interface DeleteDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteDepartmentResponse
   */
  data: UnifiedId
}

export function DeleteDepartmentResponseFromJSON(json: any): DeleteDepartmentResponse {
  return DeleteDepartmentResponseFromJSONTyped(json, false)
}

export function DeleteDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteDepartmentResponse {
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

export function DeleteDepartmentResponseToJSON(value?: DeleteDepartmentResponse | null): any {
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
