/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
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
 * @interface UpdateEcommerceOrderResponse
 */
export interface UpdateEcommerceOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateEcommerceOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateEcommerceOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateEcommerceOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateEcommerceOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateEcommerceOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateEcommerceOrderResponse
   */
  data: UnifiedId
}

export function UpdateEcommerceOrderResponseFromJSON(json: any): UpdateEcommerceOrderResponse {
  return UpdateEcommerceOrderResponseFromJSONTyped(json, false)
}

export function UpdateEcommerceOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateEcommerceOrderResponse {
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

export function UpdateEcommerceOrderResponseToJSON(
  value?: UpdateEcommerceOrderResponse | null
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
