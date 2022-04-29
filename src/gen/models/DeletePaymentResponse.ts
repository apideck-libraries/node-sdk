/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.27.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeletePaymentResponse
 */
export interface DeletePaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeletePaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeletePaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeletePaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeletePaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeletePaymentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeletePaymentResponse
   */
  data: UnifiedId
}

export function DeletePaymentResponseFromJSON(json: any): DeletePaymentResponse {
  return DeletePaymentResponseFromJSONTyped(json, false)
}

export function DeletePaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeletePaymentResponse {
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

export function DeletePaymentResponseToJSON(value?: DeletePaymentResponse | null): any {
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
