/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.1
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
 * @interface UpdateEmployeeResponse
 */
export interface UpdateEmployeeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateEmployeeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateEmployeeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateEmployeeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateEmployeeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateEmployeeResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateEmployeeResponse
   */
  data: UnifiedId
}

export function UpdateEmployeeResponseFromJSON(json: any): UpdateEmployeeResponse {
  return UpdateEmployeeResponseFromJSONTyped(json, false)
}

export function UpdateEmployeeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateEmployeeResponse {
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

export function UpdateEmployeeResponseToJSON(value?: UpdateEmployeeResponse | null): any {
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
