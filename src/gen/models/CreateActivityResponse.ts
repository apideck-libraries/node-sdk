/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.5.1
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
 * @interface CreateActivityResponse
 */
export interface CreateActivityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateActivityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateActivityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateActivityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateActivityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateActivityResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateActivityResponse
   */
  data: UnifiedId
}

export function CreateActivityResponseFromJSON(json: any): CreateActivityResponse {
  return CreateActivityResponseFromJSONTyped(json, false)
}

export function CreateActivityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateActivityResponse {
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

export function CreateActivityResponseToJSON(value?: CreateActivityResponse | null): any {
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
