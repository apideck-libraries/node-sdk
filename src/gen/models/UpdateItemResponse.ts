/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.2
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
 * @interface UpdateItemResponse
 */
export interface UpdateItemResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateItemResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateItemResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateItemResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateItemResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateItemResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateItemResponse
   */
  data: UnifiedId
}

export function UpdateItemResponseFromJSON(json: any): UpdateItemResponse {
  return UpdateItemResponseFromJSONTyped(json, false)
}

export function UpdateItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateItemResponse {
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

export function UpdateItemResponseToJSON(value?: UpdateItemResponse | null): any {
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
