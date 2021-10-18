/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 6.0.0
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
 * @interface DeleteCustomerResponse
 */
export interface DeleteCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteCustomerResponse
   */
  data: UnifiedId
}

export function DeleteCustomerResponseFromJSON(json: any): DeleteCustomerResponse {
  return DeleteCustomerResponseFromJSONTyped(json, false)
}

export function DeleteCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteCustomerResponse {
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

export function DeleteCustomerResponseToJSON(value?: DeleteCustomerResponse | null): any {
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
