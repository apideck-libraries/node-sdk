/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.7.0
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
 * @interface UpdateInvoiceItemsResponse
 */
export interface UpdateInvoiceItemsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateInvoiceItemsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateInvoiceItemsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateInvoiceItemsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateInvoiceItemsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateInvoiceItemsResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateInvoiceItemsResponse
   */
  data: UnifiedId
}

export function UpdateInvoiceItemsResponseFromJSON(json: any): UpdateInvoiceItemsResponse {
  return UpdateInvoiceItemsResponseFromJSONTyped(json, false)
}

export function UpdateInvoiceItemsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateInvoiceItemsResponse {
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

export function UpdateInvoiceItemsResponseToJSON(value?: UpdateInvoiceItemsResponse | null): any {
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
