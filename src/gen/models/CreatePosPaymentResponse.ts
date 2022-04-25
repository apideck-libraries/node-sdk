/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.0
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
 * @interface CreatePosPaymentResponse
 */
export interface CreatePosPaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreatePosPaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreatePosPaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreatePosPaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreatePosPaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreatePosPaymentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreatePosPaymentResponse
   */
  data: UnifiedId
}

export function CreatePosPaymentResponseFromJSON(json: any): CreatePosPaymentResponse {
  return CreatePosPaymentResponseFromJSONTyped(json, false)
}

export function CreatePosPaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreatePosPaymentResponse {
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

export function CreatePosPaymentResponseToJSON(value?: CreatePosPaymentResponse | null): any {
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
