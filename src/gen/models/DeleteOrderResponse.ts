/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
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
 * @interface DeleteOrderResponse
 */
export interface DeleteOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteOrderResponse
   */
  data: UnifiedId
}

export function DeleteOrderResponseFromJSON(json: any): DeleteOrderResponse {
  return DeleteOrderResponseFromJSONTyped(json, false)
}

export function DeleteOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteOrderResponse {
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

export function DeleteOrderResponseToJSON(value?: DeleteOrderResponse | null): any {
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
