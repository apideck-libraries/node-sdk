/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.47.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Folder, FolderFromJSON, FolderToJSON } from './Folder'

/**
 *
 * @export
 * @interface GetFolderResponse
 */
export interface GetFolderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetFolderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetFolderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetFolderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetFolderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetFolderResponse
   */
  operation: string
  /**
   *
   * @type {Folder}
   * @memberof GetFolderResponse
   */
  data: Folder
}

export function GetFolderResponseFromJSON(json: any): GetFolderResponse {
  return GetFolderResponseFromJSONTyped(json, false)
}

export function GetFolderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetFolderResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: FolderFromJSON(json['data'])
  }
}

export function GetFolderResponseToJSON(value?: GetFolderResponse | null): any {
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
    data: FolderToJSON(value.data)
  }
}
