/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.6
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
 * @interface UpdateCustomerSupportCustomerResponse
 */
export interface UpdateCustomerSupportCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCustomerSupportCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCustomerSupportCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateCustomerSupportCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateCustomerSupportCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateCustomerSupportCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateCustomerSupportCustomerResponse
   */
  data: UnifiedId
}

export function UpdateCustomerSupportCustomerResponseFromJSON(
  json: any
): UpdateCustomerSupportCustomerResponse {
  return UpdateCustomerSupportCustomerResponseFromJSONTyped(json, false)
}

export function UpdateCustomerSupportCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCustomerSupportCustomerResponse {
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

export function UpdateCustomerSupportCustomerResponseToJSON(
  value?: UpdateCustomerSupportCustomerResponse | null
): any {
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
