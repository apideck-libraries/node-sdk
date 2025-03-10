/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceCustomer,
  EcommerceCustomerFromJSON,
  EcommerceCustomerToJSON
} from './EcommerceCustomer'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetEcommerceCustomerResponse
 */
export interface GetEcommerceCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEcommerceCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEcommerceCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEcommerceCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEcommerceCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEcommerceCustomerResponse
   */
  operation: string
  /**
   *
   * @type {EcommerceCustomer}
   * @memberof GetEcommerceCustomerResponse
   */
  data: EcommerceCustomer
  /**
   *
   * @type {Raw}
   * @memberof GetEcommerceCustomerResponse
   */
  _raw?: Raw | null
}

export function GetEcommerceCustomerResponseFromJSON(json: any): GetEcommerceCustomerResponse {
  return GetEcommerceCustomerResponseFromJSONTyped(json, false)
}

export function GetEcommerceCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEcommerceCustomerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EcommerceCustomerFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetEcommerceCustomerResponseToJSON(
  value?: GetEcommerceCustomerResponse | null
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
    data: EcommerceCustomerToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
