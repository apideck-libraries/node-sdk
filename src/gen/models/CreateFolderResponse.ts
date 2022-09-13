/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.56.0
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
 * @interface CreateFolderResponse
 */
export interface CreateFolderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateFolderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateFolderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateFolderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateFolderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateFolderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateFolderResponse
   */
  data: UnifiedId
}

export function CreateFolderResponseFromJSON(json: any): CreateFolderResponse {
  return CreateFolderResponseFromJSONTyped(json, false)
}

export function CreateFolderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateFolderResponse {
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

export function CreateFolderResponseToJSON(value?: CreateFolderResponse | null): any {
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
