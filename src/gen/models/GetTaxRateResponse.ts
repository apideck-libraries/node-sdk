/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TaxRate, TaxRateFromJSON, TaxRateToJSON } from './TaxRate'

/**
 *
 * @export
 * @interface GetTaxRateResponse
 */
export interface GetTaxRateResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTaxRateResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTaxRateResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTaxRateResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTaxRateResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTaxRateResponse
   */
  operation: string
  /**
   *
   * @type {TaxRate}
   * @memberof GetTaxRateResponse
   */
  data: TaxRate
}

export function GetTaxRateResponseFromJSON(json: any): GetTaxRateResponse {
  return GetTaxRateResponseFromJSONTyped(json, false)
}

export function GetTaxRateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTaxRateResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: TaxRateFromJSON(json['data'])
  }
}

export function GetTaxRateResponseToJSON(value?: GetTaxRateResponse | null): any {
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
    data: TaxRateToJSON(value.data)
  }
}
