/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Customer, CustomerFromJSON, CustomerToJSON } from './Customer'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

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
   * @type {Customer}
   * @memberof GetCustomerResponse
   */
  data: Customer
  /**
   *
   * @type {Raw}
   * @memberof GetCustomerResponse
   */
  _raw?: Raw | null
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
    data: CustomerFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
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
    data: CustomerToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
