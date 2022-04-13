/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.20.0
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
 * @interface DeleteFileResponse
 */
export interface DeleteFileResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteFileResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteFileResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteFileResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteFileResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteFileResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteFileResponse
   */
  data: UnifiedId
}

export function DeleteFileResponseFromJSON(json: any): DeleteFileResponse {
  return DeleteFileResponseFromJSONTyped(json, false)
}

export function DeleteFileResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteFileResponse {
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

export function DeleteFileResponseToJSON(value?: DeleteFileResponse | null): any {
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
