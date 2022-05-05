/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.29.0
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
 * @interface DeleteModifierGroupResponse
 */
export interface DeleteModifierGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteModifierGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteModifierGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteModifierGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteModifierGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteModifierGroupResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteModifierGroupResponse
   */
  data: UnifiedId
}

export function DeleteModifierGroupResponseFromJSON(json: any): DeleteModifierGroupResponse {
  return DeleteModifierGroupResponseFromJSONTyped(json, false)
}

export function DeleteModifierGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteModifierGroupResponse {
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

export function DeleteModifierGroupResponseToJSON(value?: DeleteModifierGroupResponse | null): any {
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
