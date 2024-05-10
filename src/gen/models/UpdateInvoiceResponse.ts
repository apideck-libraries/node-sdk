/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.2
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
 * @interface UpdateInvoiceResponse
 */
export interface UpdateInvoiceResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateInvoiceResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateInvoiceResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateInvoiceResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateInvoiceResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateInvoiceResponse
   */
  operation: string
  /**
   *
   * @type {InvoiceResponse}
   * @memberof UpdateInvoiceResponse
   */
  data: InvoiceResponse
}

export function UpdateInvoiceResponseFromJSON(json: any): UpdateInvoiceResponse {
  return UpdateInvoiceResponseFromJSONTyped(json, false)
}

export function UpdateInvoiceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateInvoiceResponse {
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

export function UpdateInvoiceResponseToJSON(value?: UpdateInvoiceResponse | null): any {
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
