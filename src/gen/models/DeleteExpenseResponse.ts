/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.3
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
 * @interface DeleteExpenseResponse
 */
export interface DeleteExpenseResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteExpenseResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteExpenseResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteExpenseResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteExpenseResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteExpenseResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteExpenseResponse
   */
  data: UnifiedId
}

export function DeleteExpenseResponseFromJSON(json: any): DeleteExpenseResponse {
  return DeleteExpenseResponseFromJSONTyped(json, false)
}

export function DeleteExpenseResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteExpenseResponse {
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

export function DeleteExpenseResponseToJSON(value?: DeleteExpenseResponse | null): any {
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
