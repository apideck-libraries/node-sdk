/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Supplier, SupplierFromJSON, SupplierToJSON } from './Supplier'

/**
 *
 * @export
 * @interface GetSupplierResponse
 */
export interface GetSupplierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetSupplierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetSupplierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetSupplierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetSupplierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetSupplierResponse
   */
  operation: string
  /**
   *
   * @type {Supplier}
   * @memberof GetSupplierResponse
   */
  data: Supplier
}

export function GetSupplierResponseFromJSON(json: any): GetSupplierResponse {
  return GetSupplierResponseFromJSONTyped(json, false)
}

export function GetSupplierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetSupplierResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: SupplierFromJSON(json['data'])
  }
}

export function GetSupplierResponseToJSON(value?: GetSupplierResponse | null): any {
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
    data: SupplierToJSON(value.data)
  }
}
