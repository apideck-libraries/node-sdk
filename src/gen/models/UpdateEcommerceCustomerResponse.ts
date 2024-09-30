/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
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
 * @interface UpdateEcommerceCustomerResponse
 */
export interface UpdateEcommerceCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateEcommerceCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateEcommerceCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateEcommerceCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateEcommerceCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateEcommerceCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateEcommerceCustomerResponse
   */
  data: UnifiedId
}

export function UpdateEcommerceCustomerResponseFromJSON(
  json: any
): UpdateEcommerceCustomerResponse {
  return UpdateEcommerceCustomerResponseFromJSONTyped(json, false)
}

export function UpdateEcommerceCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateEcommerceCustomerResponse {
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

export function UpdateEcommerceCustomerResponseToJSON(
  value?: UpdateEcommerceCustomerResponse | null
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
