/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.51.0
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
 * @interface CreateEmployeeResponse
 */
export interface CreateEmployeeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateEmployeeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateEmployeeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateEmployeeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateEmployeeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateEmployeeResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateEmployeeResponse
   */
  data: UnifiedId
}

export function CreateEmployeeResponseFromJSON(json: any): CreateEmployeeResponse {
  return CreateEmployeeResponseFromJSONTyped(json, false)
}

export function CreateEmployeeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateEmployeeResponse {
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

export function CreateEmployeeResponseToJSON(value?: CreateEmployeeResponse | null): any {
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
