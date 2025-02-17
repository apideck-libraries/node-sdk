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
 * @interface DeletePosPaymentResponse
 */
export interface DeletePosPaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeletePosPaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeletePosPaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeletePosPaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeletePosPaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeletePosPaymentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeletePosPaymentResponse
   */
  data: UnifiedId
}

export function DeletePosPaymentResponseFromJSON(json: any): DeletePosPaymentResponse {
  return DeletePosPaymentResponseFromJSONTyped(json, false)
}

export function DeletePosPaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeletePosPaymentResponse {
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

export function DeletePosPaymentResponseToJSON(value?: DeletePosPaymentResponse | null): any {
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
