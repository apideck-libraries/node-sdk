/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
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
 * @interface DeleteMerchantResponse
 */
export interface DeleteMerchantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteMerchantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteMerchantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteMerchantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteMerchantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteMerchantResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteMerchantResponse
   */
  data: UnifiedId
}

export function DeleteMerchantResponseFromJSON(json: any): DeleteMerchantResponse {
  return DeleteMerchantResponseFromJSONTyped(json, false)
}

export function DeleteMerchantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteMerchantResponse {
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

export function DeleteMerchantResponseToJSON(value?: DeleteMerchantResponse | null): any {
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
