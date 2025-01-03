/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
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
 * @interface UpdateUserResponse
 */
export interface UpdateUserResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateUserResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateUserResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateUserResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateUserResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateUserResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateUserResponse
   */
  data: UnifiedId
}

export function UpdateUserResponseFromJSON(json: any): UpdateUserResponse {
  return UpdateUserResponseFromJSONTyped(json, false)
}

export function UpdateUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateUserResponse {
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

export function UpdateUserResponseToJSON(value?: UpdateUserResponse | null): any {
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
