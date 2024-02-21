/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
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
 * @interface CreateCustomerResponse
 */
export interface CreateCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateCustomerResponse
   */
  data: UnifiedId
}

export function CreateCustomerResponseFromJSON(json: any): CreateCustomerResponse {
  return CreateCustomerResponseFromJSONTyped(json, false)
}

export function CreateCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCustomerResponse {
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

export function CreateCustomerResponseToJSON(value?: CreateCustomerResponse | null): any {
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
