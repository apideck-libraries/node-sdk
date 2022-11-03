/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.77.0
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
 * @interface DeleteActivityResponse
 */
export interface DeleteActivityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteActivityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteActivityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteActivityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteActivityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteActivityResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteActivityResponse
   */
  data: UnifiedId
}

export function DeleteActivityResponseFromJSON(json: any): DeleteActivityResponse {
  return DeleteActivityResponseFromJSONTyped(json, false)
}

export function DeleteActivityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteActivityResponse {
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

export function DeleteActivityResponseToJSON(value?: DeleteActivityResponse | null): any {
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
