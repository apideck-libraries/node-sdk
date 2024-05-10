/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.2
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
 * @interface CreateEcommerceCustomerResponse
 */
export interface CreateEcommerceCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateEcommerceCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateEcommerceCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateEcommerceCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateEcommerceCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateEcommerceCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateEcommerceCustomerResponse
   */
  data: UnifiedId
}

export function CreateEcommerceCustomerResponseFromJSON(
  json: any
): CreateEcommerceCustomerResponse {
  return CreateEcommerceCustomerResponseFromJSONTyped(json, false)
}

export function CreateEcommerceCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateEcommerceCustomerResponse {
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

export function CreateEcommerceCustomerResponseToJSON(
  value?: CreateEcommerceCustomerResponse | null
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
