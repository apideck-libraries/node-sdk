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

import { InvoiceResponse, InvoiceResponseFromJSON, InvoiceResponseToJSON } from './InvoiceResponse'

/**
 *
 * @export
 * @interface DeleteInvoiceResponse
 */
export interface DeleteInvoiceResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteInvoiceResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteInvoiceResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteInvoiceResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteInvoiceResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteInvoiceResponse
   */
  operation: string
  /**
   *
   * @type {InvoiceResponse}
   * @memberof DeleteInvoiceResponse
   */
  data: InvoiceResponse
}

export function DeleteInvoiceResponseFromJSON(json: any): DeleteInvoiceResponse {
  return DeleteInvoiceResponseFromJSONTyped(json, false)
}

export function DeleteInvoiceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteInvoiceResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: InvoiceResponseFromJSON(json['data'])
  }
}

export function DeleteInvoiceResponseToJSON(value?: DeleteInvoiceResponse | null): any {
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
    data: InvoiceResponseToJSON(value.data)
  }
}
