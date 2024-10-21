/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
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
 * @interface DeleteAccountingDepartmentResponse
 */
export interface DeleteAccountingDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteAccountingDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteAccountingDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteAccountingDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteAccountingDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteAccountingDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteAccountingDepartmentResponse
   */
  data: UnifiedId
}

export function DeleteAccountingDepartmentResponseFromJSON(
  json: any
): DeleteAccountingDepartmentResponse {
  return DeleteAccountingDepartmentResponseFromJSONTyped(json, false)
}

export function DeleteAccountingDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteAccountingDepartmentResponse {
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

export function DeleteAccountingDepartmentResponseToJSON(
  value?: DeleteAccountingDepartmentResponse | null
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
