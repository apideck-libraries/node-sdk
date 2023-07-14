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
 * @interface UpdateModifierGroupResponse
 */
export interface UpdateModifierGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateModifierGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateModifierGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateModifierGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateModifierGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateModifierGroupResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateModifierGroupResponse
   */
  data: UnifiedId
}

export function UpdateModifierGroupResponseFromJSON(json: any): UpdateModifierGroupResponse {
  return UpdateModifierGroupResponseFromJSONTyped(json, false)
}

export function UpdateModifierGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateModifierGroupResponse {
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

export function UpdateModifierGroupResponseToJSON(value?: UpdateModifierGroupResponse | null): any {
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
