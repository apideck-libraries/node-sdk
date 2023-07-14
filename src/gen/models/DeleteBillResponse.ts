/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.6
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
 * @interface DeleteBillResponse
 */
export interface DeleteBillResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteBillResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteBillResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteBillResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteBillResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteBillResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteBillResponse
   */
  data: UnifiedId
}

export function DeleteBillResponseFromJSON(json: any): DeleteBillResponse {
  return DeleteBillResponseFromJSONTyped(json, false)
}

export function DeleteBillResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteBillResponse {
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

export function DeleteBillResponseToJSON(value?: DeleteBillResponse | null): any {
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
