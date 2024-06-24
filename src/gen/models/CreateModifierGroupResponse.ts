/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.1
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
 * @interface CreateModifierGroupResponse
 */
export interface CreateModifierGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateModifierGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateModifierGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateModifierGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateModifierGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateModifierGroupResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateModifierGroupResponse
   */
  data: UnifiedId
}

export function CreateModifierGroupResponseFromJSON(json: any): CreateModifierGroupResponse {
  return CreateModifierGroupResponseFromJSONTyped(json, false)
}

export function CreateModifierGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateModifierGroupResponse {
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

export function CreateModifierGroupResponseToJSON(value?: CreateModifierGroupResponse | null): any {
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
