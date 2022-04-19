/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.23.0
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
 * @interface CreateFileResponse
 */
export interface CreateFileResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateFileResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateFileResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateFileResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateFileResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateFileResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateFileResponse
   */
  data: UnifiedId
}

export function CreateFileResponseFromJSON(json: any): CreateFileResponse {
  return CreateFileResponseFromJSONTyped(json, false)
}

export function CreateFileResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateFileResponse {
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

export function CreateFileResponseToJSON(value?: CreateFileResponse | null): any {
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
