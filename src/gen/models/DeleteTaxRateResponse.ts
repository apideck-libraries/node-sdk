/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
 * @interface DeleteTaxRateResponse
 */
export interface DeleteTaxRateResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteTaxRateResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteTaxRateResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteTaxRateResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteTaxRateResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteTaxRateResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteTaxRateResponse
   */
  data: UnifiedId
}

export function DeleteTaxRateResponseFromJSON(json: any): DeleteTaxRateResponse {
  return DeleteTaxRateResponseFromJSONTyped(json, false)
}

export function DeleteTaxRateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteTaxRateResponse {
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

export function DeleteTaxRateResponseToJSON(value?: DeleteTaxRateResponse | null): any {
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
