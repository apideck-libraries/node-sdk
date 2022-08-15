/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.40.0
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
 * @interface CreateItemResponse
 */
export interface CreateItemResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateItemResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateItemResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateItemResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateItemResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateItemResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateItemResponse
   */
  data: UnifiedId
}

export function CreateItemResponseFromJSON(json: any): CreateItemResponse {
  return CreateItemResponseFromJSONTyped(json, false)
}

export function CreateItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateItemResponse {
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

export function CreateItemResponseToJSON(value?: CreateItemResponse | null): any {
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
