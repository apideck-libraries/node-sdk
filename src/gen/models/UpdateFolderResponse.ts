/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.0
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
 * @interface UpdateFolderResponse
 */
export interface UpdateFolderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateFolderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateFolderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateFolderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateFolderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateFolderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateFolderResponse
   */
  data: UnifiedId
}

export function UpdateFolderResponseFromJSON(json: any): UpdateFolderResponse {
  return UpdateFolderResponseFromJSONTyped(json, false)
}

export function UpdateFolderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateFolderResponse {
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

export function UpdateFolderResponseToJSON(value?: UpdateFolderResponse | null): any {
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
