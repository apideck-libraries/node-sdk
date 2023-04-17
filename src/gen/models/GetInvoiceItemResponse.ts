/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InvoiceItem, InvoiceItemFromJSON, InvoiceItemToJSON } from './InvoiceItem'

/**
 *
 * @export
 * @interface GetInvoiceItemResponse
 */
export interface GetInvoiceItemResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetInvoiceItemResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetInvoiceItemResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetInvoiceItemResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetInvoiceItemResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetInvoiceItemResponse
   */
  operation: string
  /**
   *
   * @type {InvoiceItem}
   * @memberof GetInvoiceItemResponse
   */
  data: InvoiceItem
}

export function GetInvoiceItemResponseFromJSON(json: any): GetInvoiceItemResponse {
  return GetInvoiceItemResponseFromJSONTyped(json, false)
}

export function GetInvoiceItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetInvoiceItemResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: InvoiceItemFromJSON(json['data'])
  }
}

export function GetInvoiceItemResponseToJSON(value?: GetInvoiceItemResponse | null): any {
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
    data: InvoiceItemToJSON(value.data)
  }
}
