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
import { Merchant, MerchantFromJSON, MerchantToJSON } from './Merchant'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetMerchantResponse
 */
export interface GetMerchantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetMerchantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetMerchantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetMerchantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetMerchantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetMerchantResponse
   */
  operation: string
  /**
   *
   * @type {Merchant}
   * @memberof GetMerchantResponse
   */
  data: Merchant
  /**
   *
   * @type {Raw}
   * @memberof GetMerchantResponse
   */
  _raw?: Raw | null
}

export function GetMerchantResponseFromJSON(json: any): GetMerchantResponse {
  return GetMerchantResponseFromJSONTyped(json, false)
}

export function GetMerchantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetMerchantResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: MerchantFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetMerchantResponseToJSON(value?: GetMerchantResponse | null): any {
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
    data: MerchantToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
