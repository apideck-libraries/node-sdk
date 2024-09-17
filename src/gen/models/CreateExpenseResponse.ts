/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
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
 * @interface CreateExpenseResponse
 */
export interface CreateExpenseResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateExpenseResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateExpenseResponse
   */
  data: UnifiedId
}

export function CreateExpenseResponseFromJSON(json: any): CreateExpenseResponse {
  return CreateExpenseResponseFromJSONTyped(json, false)
}

export function CreateExpenseResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateExpenseResponse {
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

export function CreateExpenseResponseToJSON(value?: CreateExpenseResponse | null): any {
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