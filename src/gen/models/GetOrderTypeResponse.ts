/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrderType, OrderTypeFromJSON, OrderTypeToJSON } from './OrderType'

/**
 *
 * @export
 * @interface GetOrderTypeResponse
 */
export interface GetOrderTypeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOrderTypeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOrderTypeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOrderTypeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOrderTypeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOrderTypeResponse
   */
  operation: string
  /**
   *
   * @type {OrderType}
   * @memberof GetOrderTypeResponse
   */
  data: OrderType
}

export function GetOrderTypeResponseFromJSON(json: any): GetOrderTypeResponse {
  return GetOrderTypeResponseFromJSONTyped(json, false)
}

export function GetOrderTypeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOrderTypeResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: OrderTypeFromJSON(json['data'])
  }
}

export function GetOrderTypeResponseToJSON(value?: GetOrderTypeResponse | null): any {
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
    data: OrderTypeToJSON(value.data)
  }
}
