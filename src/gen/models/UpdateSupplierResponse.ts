/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
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
 * @interface UpdateSupplierResponse
 */
export interface UpdateSupplierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateSupplierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateSupplierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateSupplierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateSupplierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateSupplierResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateSupplierResponse
   */
  data: UnifiedId
}

export function UpdateSupplierResponseFromJSON(json: any): UpdateSupplierResponse {
  return UpdateSupplierResponseFromJSONTyped(json, false)
}

export function UpdateSupplierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateSupplierResponse {
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

export function UpdateSupplierResponseToJSON(value?: UpdateSupplierResponse | null): any {
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
