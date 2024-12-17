/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeleteSupplierResponse
 */
export interface DeleteSupplierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteSupplierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteSupplierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteSupplierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteSupplierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteSupplierResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteSupplierResponse
   */
  data: UnifiedId
}

export function DeleteSupplierResponseFromJSON(json: any): DeleteSupplierResponse {
  return DeleteSupplierResponseFromJSONTyped(json, false)
}

export function DeleteSupplierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteSupplierResponse {
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

export function DeleteSupplierResponseToJSON(value?: DeleteSupplierResponse | null): any {
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
