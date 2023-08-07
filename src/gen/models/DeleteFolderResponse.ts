/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.8.1
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
 * @interface DeleteFolderResponse
 */
export interface DeleteFolderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteFolderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteFolderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteFolderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteFolderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteFolderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteFolderResponse
   */
  data: UnifiedId
}

export function DeleteFolderResponseFromJSON(json: any): DeleteFolderResponse {
  return DeleteFolderResponseFromJSONTyped(json, false)
}

export function DeleteFolderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteFolderResponse {
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

export function DeleteFolderResponseToJSON(value?: DeleteFolderResponse | null): any {
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
