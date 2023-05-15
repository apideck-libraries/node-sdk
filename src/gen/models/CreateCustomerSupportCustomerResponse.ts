/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
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
 * @interface CreateCustomerSupportCustomerResponse
 */
export interface CreateCustomerSupportCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCustomerSupportCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCustomerSupportCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateCustomerSupportCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateCustomerSupportCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateCustomerSupportCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateCustomerSupportCustomerResponse
   */
  data: UnifiedId
}

export function CreateCustomerSupportCustomerResponseFromJSON(
  json: any
): CreateCustomerSupportCustomerResponse {
  return CreateCustomerSupportCustomerResponseFromJSONTyped(json, false)
}

export function CreateCustomerSupportCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCustomerSupportCustomerResponse {
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

export function CreateCustomerSupportCustomerResponseToJSON(
  value?: CreateCustomerSupportCustomerResponse | null
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
