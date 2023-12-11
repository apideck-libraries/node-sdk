/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Payment, PaymentFromJSON, PaymentToJSON } from './Payment'

/**
 *
 * @export
 * @interface GetPaymentResponse
 */
export interface GetPaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPaymentResponse
   */
  operation: string
  /**
   *
   * @type {Payment}
   * @memberof GetPaymentResponse
   */
  data: Payment
}

export function GetPaymentResponseFromJSON(json: any): GetPaymentResponse {
  return GetPaymentResponseFromJSONTyped(json, false)
}

export function GetPaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPaymentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: PaymentFromJSON(json['data'])
  }
}

export function GetPaymentResponseToJSON(value?: GetPaymentResponse | null): any {
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
    data: PaymentToJSON(value.data)
  }
}
