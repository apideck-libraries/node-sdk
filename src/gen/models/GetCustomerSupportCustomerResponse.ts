/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.64.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CustomerSupportCustomer,
  CustomerSupportCustomerFromJSON,
  CustomerSupportCustomerToJSON
} from './CustomerSupportCustomer'

/**
 *
 * @export
 * @interface GetCustomerSupportCustomerResponse
 */
export interface GetCustomerSupportCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomerSupportCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomerSupportCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCustomerSupportCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCustomerSupportCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCustomerSupportCustomerResponse
   */
  operation: string
  /**
   *
   * @type {CustomerSupportCustomer}
   * @memberof GetCustomerSupportCustomerResponse
   */
  data: CustomerSupportCustomer
}

export function GetCustomerSupportCustomerResponseFromJSON(
  json: any
): GetCustomerSupportCustomerResponse {
  return GetCustomerSupportCustomerResponseFromJSONTyped(json, false)
}

export function GetCustomerSupportCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomerSupportCustomerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CustomerSupportCustomerFromJSON(json['data'])
  }
}

export function GetCustomerSupportCustomerResponseToJSON(
  value?: GetCustomerSupportCustomerResponse | null
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
    data: CustomerSupportCustomerToJSON(value.data)
  }
}
