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

import { EcommerceOrder, EcommerceOrderFromJSON, EcommerceOrderToJSON } from './EcommerceOrder'

/**
 *
 * @export
 * @interface GetEcommerceOrderResponse
 */
export interface GetEcommerceOrderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEcommerceOrderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEcommerceOrderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEcommerceOrderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEcommerceOrderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEcommerceOrderResponse
   */
  operation: string
  /**
   *
   * @type {EcommerceOrder}
   * @memberof GetEcommerceOrderResponse
   */
  data: EcommerceOrder
}

export function GetEcommerceOrderResponseFromJSON(json: any): GetEcommerceOrderResponse {
  return GetEcommerceOrderResponseFromJSONTyped(json, false)
}

export function GetEcommerceOrderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEcommerceOrderResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EcommerceOrderFromJSON(json['data'])
  }
}

export function GetEcommerceOrderResponseToJSON(value?: GetEcommerceOrderResponse | null): any {
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
    data: EcommerceOrderToJSON(value.data)
  }
}
