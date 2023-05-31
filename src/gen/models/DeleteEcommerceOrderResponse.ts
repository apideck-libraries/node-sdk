/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.0
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
 * @interface DeleteEcommerceOrderResponse
 */
export interface DeleteEcommerceOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteEcommerceOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteEcommerceOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteEcommerceOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteEcommerceOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteEcommerceOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteEcommerceOrderResponse
   */
  data: UnifiedId
}

export function DeleteEcommerceOrderResponseFromJSON(json: any): DeleteEcommerceOrderResponse {
  return DeleteEcommerceOrderResponseFromJSONTyped(json, false)
}

export function DeleteEcommerceOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteEcommerceOrderResponse {
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

export function DeleteEcommerceOrderResponseToJSON(
  value?: DeleteEcommerceOrderResponse | null
): any {
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
