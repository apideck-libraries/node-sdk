/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PosPayment, PosPaymentFromJSON, PosPaymentToJSON } from './PosPayment'

/**
 *
 * @export
 * @interface GetPosPaymentResponse
 */
export interface GetPosPaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPosPaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPosPaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPosPaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPosPaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPosPaymentResponse
   */
  operation: string
  /**
   *
   * @type {PosPayment}
   * @memberof GetPosPaymentResponse
   */
  data: PosPayment
}

export function GetPosPaymentResponseFromJSON(json: any): GetPosPaymentResponse {
  return GetPosPaymentResponseFromJSONTyped(json, false)
}

export function GetPosPaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPosPaymentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: PosPaymentFromJSON(json['data'])
  }
}

export function GetPosPaymentResponseToJSON(value?: GetPosPaymentResponse | null): any {
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
    data: PosPaymentToJSON(value.data)
  }
}
