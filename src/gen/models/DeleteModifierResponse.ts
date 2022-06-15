/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.2
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
 * @interface DeleteModifierResponse
 */
export interface DeleteModifierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteModifierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteModifierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteModifierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteModifierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteModifierResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteModifierResponse
   */
  data: UnifiedId
}

export function DeleteModifierResponseFromJSON(json: any): DeleteModifierResponse {
  return DeleteModifierResponseFromJSONTyped(json, false)
}

export function DeleteModifierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteModifierResponse {
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

export function DeleteModifierResponseToJSON(value?: DeleteModifierResponse | null): any {
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
