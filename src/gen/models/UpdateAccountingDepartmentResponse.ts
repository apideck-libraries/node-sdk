/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.0
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
 * @interface UpdateAccountingDepartmentResponse
 */
export interface UpdateAccountingDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateAccountingDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateAccountingDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateAccountingDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateAccountingDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateAccountingDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateAccountingDepartmentResponse
   */
  data: UnifiedId
}

export function UpdateAccountingDepartmentResponseFromJSON(
  json: any
): UpdateAccountingDepartmentResponse {
  return UpdateAccountingDepartmentResponseFromJSONTyped(json, false)
}

export function UpdateAccountingDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateAccountingDepartmentResponse {
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

export function UpdateAccountingDepartmentResponseToJSON(
  value?: UpdateAccountingDepartmentResponse | null
): any {
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
