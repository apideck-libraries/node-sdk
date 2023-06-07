/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.4
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
 * @interface UpdateModifierResponse
 */
export interface UpdateModifierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateModifierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateModifierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateModifierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateModifierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateModifierResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateModifierResponse
   */
  data: UnifiedId
}

export function UpdateModifierResponseFromJSON(json: any): UpdateModifierResponse {
  return UpdateModifierResponseFromJSONTyped(json, false)
}

export function UpdateModifierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateModifierResponse {
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

export function UpdateModifierResponseToJSON(value?: UpdateModifierResponse | null): any {
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
