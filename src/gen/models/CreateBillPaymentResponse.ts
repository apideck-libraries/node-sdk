/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateBillPaymentResponse
 */
export interface CreateBillPaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateBillPaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateBillPaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateBillPaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateBillPaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateBillPaymentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateBillPaymentResponse
   */
  data: UnifiedId
}

export function CreateBillPaymentResponseFromJSON(json: any): CreateBillPaymentResponse {
  return CreateBillPaymentResponseFromJSONTyped(json, false)
}

export function CreateBillPaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateBillPaymentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  }
}

export function CreateBillPaymentResponseToJSON(value?: CreateBillPaymentResponse | null): any {
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
    data: UnifiedIdToJSON(value.data)
  }
}
