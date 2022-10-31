/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.75.0
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
 * @interface CreateSupplierResponse
 */
export interface CreateSupplierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateSupplierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateSupplierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateSupplierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateSupplierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateSupplierResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateSupplierResponse
   */
  data: UnifiedId
}

export function CreateSupplierResponseFromJSON(json: any): CreateSupplierResponse {
  return CreateSupplierResponseFromJSONTyped(json, false)
}

export function CreateSupplierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateSupplierResponse {
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

export function CreateSupplierResponseToJSON(value?: CreateSupplierResponse | null): any {
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
