/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
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
 * @interface CreateInvoiceItemResponse
 */
export interface CreateInvoiceItemResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateInvoiceItemResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateInvoiceItemResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateInvoiceItemResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateInvoiceItemResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateInvoiceItemResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateInvoiceItemResponse
   */
  data: UnifiedId
}

export function CreateInvoiceItemResponseFromJSON(json: any): CreateInvoiceItemResponse {
  return CreateInvoiceItemResponseFromJSONTyped(json, false)
}

export function CreateInvoiceItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateInvoiceItemResponse {
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

export function CreateInvoiceItemResponseToJSON(value?: CreateInvoiceItemResponse | null): any {
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
