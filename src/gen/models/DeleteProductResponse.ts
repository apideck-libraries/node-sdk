/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.0
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
 * @interface DeleteProductResponse
 */
export interface DeleteProductResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteProductResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteProductResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteProductResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteProductResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteProductResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteProductResponse
   */
  data: UnifiedId
}

export function DeleteProductResponseFromJSON(json: any): DeleteProductResponse {
  return DeleteProductResponseFromJSONTyped(json, false)
}

export function DeleteProductResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteProductResponse {
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

export function DeleteProductResponseToJSON(value?: DeleteProductResponse | null): any {
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
