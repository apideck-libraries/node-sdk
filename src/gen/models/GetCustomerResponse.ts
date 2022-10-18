/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.71.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  AccountingCustomer,
  AccountingCustomerFromJSON,
  AccountingCustomerToJSON
} from './AccountingCustomer'

/**
 *
 * @export
 * @interface GetCustomerResponse
 */
export interface GetCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCustomerResponse
   */
  operation: string
  /**
   *
   * @type {AccountingCustomer}
   * @memberof GetCustomerResponse
   */
  data: AccountingCustomer
}

export function GetCustomerResponseFromJSON(json: any): GetCustomerResponse {
  return GetCustomerResponseFromJSONTyped(json, false)
}

export function GetCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AccountingCustomerFromJSON(json['data'])
  }
}

export function GetCustomerResponseToJSON(value?: GetCustomerResponse | null): any {
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
    data: AccountingCustomerToJSON(value.data)
  }
}
