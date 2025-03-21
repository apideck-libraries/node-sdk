/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateAccountingDepartmentResponse
 */
export interface CreateAccountingDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateAccountingDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateAccountingDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateAccountingDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateAccountingDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateAccountingDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateAccountingDepartmentResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof CreateAccountingDepartmentResponse
   */
  _raw?: Raw | null
}

export function CreateAccountingDepartmentResponseFromJSON(
  json: any
): CreateAccountingDepartmentResponse {
  return CreateAccountingDepartmentResponseFromJSONTyped(json, false)
}

export function CreateAccountingDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateAccountingDepartmentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function CreateAccountingDepartmentResponseToJSON(
  value?: CreateAccountingDepartmentResponse | null
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
    data: UnifiedIdToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
