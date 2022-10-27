/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.73.0
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
 * @interface DeleteItemResponse
 */
export interface DeleteItemResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteItemResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteItemResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteItemResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteItemResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteItemResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteItemResponse
   */
  data: UnifiedId
}

export function DeleteItemResponseFromJSON(json: any): DeleteItemResponse {
  return DeleteItemResponseFromJSONTyped(json, false)
}

export function DeleteItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteItemResponse {
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

export function DeleteItemResponseToJSON(value?: DeleteItemResponse | null): any {
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
