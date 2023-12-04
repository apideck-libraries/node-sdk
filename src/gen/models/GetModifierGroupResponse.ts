/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ModifierGroup, ModifierGroupFromJSON, ModifierGroupToJSON } from './ModifierGroup'

/**
 *
 * @export
 * @interface GetModifierGroupResponse
 */
export interface GetModifierGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetModifierGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetModifierGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetModifierGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetModifierGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetModifierGroupResponse
   */
  operation: string
  /**
   *
   * @type {ModifierGroup}
   * @memberof GetModifierGroupResponse
   */
  data: ModifierGroup
}

export function GetModifierGroupResponseFromJSON(json: any): GetModifierGroupResponse {
  return GetModifierGroupResponseFromJSONTyped(json, false)
}

export function GetModifierGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetModifierGroupResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ModifierGroupFromJSON(json['data'])
  }
}

export function GetModifierGroupResponseToJSON(value?: GetModifierGroupResponse | null): any {
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
    data: ModifierGroupToJSON(value.data)
  }
}
