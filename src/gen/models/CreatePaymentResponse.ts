/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.2
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
 * @interface CreatePaymentResponse
 */
export interface CreatePaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreatePaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreatePaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreatePaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreatePaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreatePaymentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreatePaymentResponse
   */
  data: UnifiedId
}

export function CreatePaymentResponseFromJSON(json: any): CreatePaymentResponse {
  return CreatePaymentResponseFromJSONTyped(json, false)
}

export function CreatePaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreatePaymentResponse {
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

export function CreatePaymentResponseToJSON(value?: CreatePaymentResponse | null): any {
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
