/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.70.2
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
 * @interface UpdateOrderResponse
 */
export interface UpdateOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateOrderResponse
   */
  data: UnifiedId
}

export function UpdateOrderResponseFromJSON(json: any): UpdateOrderResponse {
  return UpdateOrderResponseFromJSONTyped(json, false)
}

export function UpdateOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateOrderResponse {
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

export function UpdateOrderResponseToJSON(value?: UpdateOrderResponse | null): any {
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
