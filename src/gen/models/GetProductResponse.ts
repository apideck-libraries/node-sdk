/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  EcommerceProduct,
  EcommerceProductFromJSON,
  EcommerceProductToJSON
} from './EcommerceProduct'

/**
 *
 * @export
 * @interface GetProductResponse
 */
export interface GetProductResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetProductResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetProductResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetProductResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetProductResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetProductResponse
   */
  operation: string
  /**
   *
   * @type {EcommerceProduct}
   * @memberof GetProductResponse
   */
  data: EcommerceProduct
}

export function GetProductResponseFromJSON(json: any): GetProductResponse {
  return GetProductResponseFromJSONTyped(json, false)
}

export function GetProductResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetProductResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EcommerceProductFromJSON(json['data'])
  }
}

export function GetProductResponseToJSON(value?: GetProductResponse | null): any {
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
    data: EcommerceProductToJSON(value.data)
  }
}
