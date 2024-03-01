/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.5
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
 * @interface UpdateMerchantResponse
 */
export interface UpdateMerchantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateMerchantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateMerchantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateMerchantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateMerchantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateMerchantResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateMerchantResponse
   */
  data: UnifiedId
}

export function UpdateMerchantResponseFromJSON(json: any): UpdateMerchantResponse {
  return UpdateMerchantResponseFromJSONTyped(json, false)
}

export function UpdateMerchantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateMerchantResponse {
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

export function UpdateMerchantResponseToJSON(value?: UpdateMerchantResponse | null): any {
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
