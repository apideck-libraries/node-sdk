/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { BillPayment, BillPaymentFromJSON, BillPaymentToJSON } from './BillPayment'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetBillPaymentResponse
 */
export interface GetBillPaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetBillPaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetBillPaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetBillPaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetBillPaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetBillPaymentResponse
   */
  operation: string
  /**
   *
   * @type {BillPayment}
   * @memberof GetBillPaymentResponse
   */
  data: BillPayment
  /**
   *
   * @type {Raw}
   * @memberof GetBillPaymentResponse
   */
  _raw?: Raw | null
}

export function GetBillPaymentResponseFromJSON(json: any): GetBillPaymentResponse {
  return GetBillPaymentResponseFromJSONTyped(json, false)
}

export function GetBillPaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetBillPaymentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: BillPaymentFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetBillPaymentResponseToJSON(value?: GetBillPaymentResponse | null): any {
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
    data: BillPaymentToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
