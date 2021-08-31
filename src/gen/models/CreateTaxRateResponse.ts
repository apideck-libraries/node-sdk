/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.5.1
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
 * @interface CreateTaxRateResponse
 */
export interface CreateTaxRateResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateTaxRateResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateTaxRateResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateTaxRateResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateTaxRateResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateTaxRateResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateTaxRateResponse
   */
  data: UnifiedId
}

export function CreateTaxRateResponseFromJSON(json: any): CreateTaxRateResponse {
  return CreateTaxRateResponseFromJSONTyped(json, false)
}

export function CreateTaxRateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTaxRateResponse {
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

export function CreateTaxRateResponseToJSON(value?: CreateTaxRateResponse | null): any {
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
