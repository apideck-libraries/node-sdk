/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.1
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
 * @interface UpdateProductResponse
 */
export interface UpdateProductResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateProductResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateProductResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateProductResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateProductResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateProductResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateProductResponse
   */
  data: UnifiedId
}

export function UpdateProductResponseFromJSON(json: any): UpdateProductResponse {
  return UpdateProductResponseFromJSONTyped(json, false)
}

export function UpdateProductResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateProductResponse {
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

export function UpdateProductResponseToJSON(value?: UpdateProductResponse | null): any {
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
