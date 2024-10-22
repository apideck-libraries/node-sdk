/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PurchaseOrder, PurchaseOrderFromJSON, PurchaseOrderToJSON } from './PurchaseOrder'

/**
 *
 * @export
 * @interface GetPurchaseOrderResponse
 */
export interface GetPurchaseOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPurchaseOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPurchaseOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPurchaseOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPurchaseOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPurchaseOrderResponse
   */
  operation: string
  /**
   *
   * @type {PurchaseOrder}
   * @memberof GetPurchaseOrderResponse
   */
  data: PurchaseOrder
}

export function GetPurchaseOrderResponseFromJSON(json: any): GetPurchaseOrderResponse {
  return GetPurchaseOrderResponseFromJSONTyped(json, false)
}

export function GetPurchaseOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPurchaseOrderResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: PurchaseOrderFromJSON(json['data'])
  }
}

export function GetPurchaseOrderResponseToJSON(value?: GetPurchaseOrderResponse | null): any {
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
    data: PurchaseOrderToJSON(value.data)
  }
}
