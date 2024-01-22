/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
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
 * @interface UpdateCustomerResponse
 */
export interface UpdateCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateCustomerResponse
   */
  data: UnifiedId
}

export function UpdateCustomerResponseFromJSON(json: any): UpdateCustomerResponse {
  return UpdateCustomerResponseFromJSONTyped(json, false)
}

export function UpdateCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCustomerResponse {
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

export function UpdateCustomerResponseToJSON(value?: UpdateCustomerResponse | null): any {
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
