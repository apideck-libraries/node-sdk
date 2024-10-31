/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeletePurchaseOrderResponse
 */
export interface DeletePurchaseOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeletePurchaseOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeletePurchaseOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeletePurchaseOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeletePurchaseOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeletePurchaseOrderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeletePurchaseOrderResponse
   */
  data: UnifiedId
}

export function DeletePurchaseOrderResponseFromJSON(json: any): DeletePurchaseOrderResponse {
  return DeletePurchaseOrderResponseFromJSONTyped(json, false)
}

export function DeletePurchaseOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeletePurchaseOrderResponse {
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

export function DeletePurchaseOrderResponseToJSON(value?: DeletePurchaseOrderResponse | null): any {
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
