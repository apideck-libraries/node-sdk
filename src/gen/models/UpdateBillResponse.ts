/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.34.0
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
 * @interface UpdateBillResponse
 */
export interface UpdateBillResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateBillResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateBillResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateBillResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateBillResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateBillResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateBillResponse
   */
  data: UnifiedId
}

export function UpdateBillResponseFromJSON(json: any): UpdateBillResponse {
  return UpdateBillResponseFromJSONTyped(json, false)
}

export function UpdateBillResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateBillResponse {
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

export function UpdateBillResponseToJSON(value?: UpdateBillResponse | null): any {
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
