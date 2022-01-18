/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Order, OrderFromJSON, OrderToJSON } from './Order'

/**
 *
 * @export
 * @interface GetOrderResponse
 */
export interface GetOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOrderResponse
   */
  operation: string
  /**
   *
   * @type {Order}
   * @memberof GetOrderResponse
   */
  data: Order
}

export function GetOrderResponseFromJSON(json: any): GetOrderResponse {
  return GetOrderResponseFromJSONTyped(json, false)
}

export function GetOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOrderResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: OrderFromJSON(json['data'])
  }
}

export function GetOrderResponseToJSON(value?: GetOrderResponse | null): any {
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
    data: OrderToJSON(value.data)
  }
}
