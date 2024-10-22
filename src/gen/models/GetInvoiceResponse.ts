/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Invoice, InvoiceFromJSON, InvoiceToJSON } from './Invoice'

/**
 *
 * @export
 * @interface GetInvoiceResponse
 */
export interface GetInvoiceResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetInvoiceResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetInvoiceResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetInvoiceResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetInvoiceResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetInvoiceResponse
   */
  operation: string
  /**
   *
   * @type {Invoice}
   * @memberof GetInvoiceResponse
   */
  data: Invoice
}

export function GetInvoiceResponseFromJSON(json: any): GetInvoiceResponse {
  return GetInvoiceResponseFromJSONTyped(json, false)
}

export function GetInvoiceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetInvoiceResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: InvoiceFromJSON(json['data'])
  }
}

export function GetInvoiceResponseToJSON(value?: GetInvoiceResponse | null): any {
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
    data: InvoiceToJSON(value.data)
  }
}
