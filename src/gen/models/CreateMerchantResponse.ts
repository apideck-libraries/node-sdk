/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.29.3
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
 * @interface CreateMerchantResponse
 */
export interface CreateMerchantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateMerchantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateMerchantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateMerchantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateMerchantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateMerchantResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateMerchantResponse
   */
  data: UnifiedId
}

export function CreateMerchantResponseFromJSON(json: any): CreateMerchantResponse {
  return CreateMerchantResponseFromJSONTyped(json, false)
}

export function CreateMerchantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateMerchantResponse {
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

export function CreateMerchantResponseToJSON(value?: CreateMerchantResponse | null): any {
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
