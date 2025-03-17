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
 * @interface CreateDepartmentResponse
 */
export interface CreateDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateDepartmentResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof CreateDepartmentResponse
   */
  _raw?: Raw | null
}

export function CreateDepartmentResponseFromJSON(json: any): CreateDepartmentResponse {
  return CreateDepartmentResponseFromJSONTyped(json, false)
}

export function CreateDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateDepartmentResponse {
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

export function CreateDepartmentResponseToJSON(value?: CreateDepartmentResponse | null): any {
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
