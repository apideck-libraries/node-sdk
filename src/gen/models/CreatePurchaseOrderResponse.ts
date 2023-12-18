/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
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
 * @interface CreatePurchaseOrderResponse
 */
export interface CreatePurchaseOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreatePurchaseOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreatePurchaseOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreatePurchaseOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreatePurchaseOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreatePurchaseOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreatePurchaseOrderResponse
   */
  data: UnifiedId
}

export function CreatePurchaseOrderResponseFromJSON(json: any): CreatePurchaseOrderResponse {
  return CreatePurchaseOrderResponseFromJSONTyped(json, false)
}

export function CreatePurchaseOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreatePurchaseOrderResponse {
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

export function CreatePurchaseOrderResponseToJSON(value?: CreatePurchaseOrderResponse | null): any {
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
