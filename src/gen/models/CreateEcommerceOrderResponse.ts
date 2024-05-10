/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.2
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
 * @interface CreateEcommerceOrderResponse
 */
export interface CreateEcommerceOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateEcommerceOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateEcommerceOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateEcommerceOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateEcommerceOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateEcommerceOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateEcommerceOrderResponse
   */
  data: UnifiedId
}

export function CreateEcommerceOrderResponseFromJSON(json: any): CreateEcommerceOrderResponse {
  return CreateEcommerceOrderResponseFromJSONTyped(json, false)
}

export function CreateEcommerceOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateEcommerceOrderResponse {
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

export function CreateEcommerceOrderResponseToJSON(
  value?: CreateEcommerceOrderResponse | null
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
