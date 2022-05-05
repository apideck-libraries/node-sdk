/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.2
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
 * @interface UpdatePaymentResponse
 */
export interface UpdatePaymentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdatePaymentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdatePaymentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdatePaymentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdatePaymentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdatePaymentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdatePaymentResponse
   */
  data: UnifiedId
}

export function UpdatePaymentResponseFromJSON(json: any): UpdatePaymentResponse {
  return UpdatePaymentResponseFromJSONTyped(json, false)
}

export function UpdatePaymentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdatePaymentResponse {
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

export function UpdatePaymentResponseToJSON(value?: UpdatePaymentResponse | null): any {
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
