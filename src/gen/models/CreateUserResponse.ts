/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.4.0
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
 * @interface CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateUserResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateUserResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateUserResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateUserResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateUserResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateUserResponse
   */
  data: UnifiedId
}

export function CreateUserResponseFromJSON(json: any): CreateUserResponse {
  return CreateUserResponseFromJSONTyped(json, false)
}

export function CreateUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateUserResponse {
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

export function CreateUserResponseToJSON(value?: CreateUserResponse | null): any {
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
