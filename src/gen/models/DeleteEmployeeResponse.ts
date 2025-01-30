/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeleteEmployeeResponse
 */
export interface DeleteEmployeeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteEmployeeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteEmployeeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteEmployeeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteEmployeeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteEmployeeResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteEmployeeResponse
   */
  data: UnifiedId
}

export function DeleteEmployeeResponseFromJSON(json: any): DeleteEmployeeResponse {
  return DeleteEmployeeResponseFromJSONTyped(json, false)
}

export function DeleteEmployeeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteEmployeeResponse {
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

export function DeleteEmployeeResponseToJSON(value?: DeleteEmployeeResponse | null): any {
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
