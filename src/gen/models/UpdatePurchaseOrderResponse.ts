/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.2
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
 * @interface UpdatePurchaseOrderResponse
 */
export interface UpdatePurchaseOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdatePurchaseOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdatePurchaseOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdatePurchaseOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdatePurchaseOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdatePurchaseOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdatePurchaseOrderResponse
   */
  data: UnifiedId
}

export function UpdatePurchaseOrderResponseFromJSON(json: any): UpdatePurchaseOrderResponse {
  return UpdatePurchaseOrderResponseFromJSONTyped(json, false)
}

export function UpdatePurchaseOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdatePurchaseOrderResponse {
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

export function UpdatePurchaseOrderResponseToJSON(value?: UpdatePurchaseOrderResponse | null): any {
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
