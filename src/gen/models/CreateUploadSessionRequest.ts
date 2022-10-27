/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.73.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface CreateUploadSessionRequest
 */
export interface CreateUploadSessionRequest {
  /**
   * The name of the file.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  name: string
  /**
   * The parent folder to create the new file within.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  parent_folder_id: string
  /**
   * The size of the file in bytes
   * @type {number}
   * @memberof CreateUploadSessionRequest
   */
  size: number
  /**
   * ID of the drive to upload to.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  drive_id?: string
}

export function CreateUploadSessionRequestFromJSON(json: any): CreateUploadSessionRequest {
  return CreateUploadSessionRequestFromJSONTyped(json, false)
}

export function CreateUploadSessionRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateUploadSessionRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    parent_folder_id: json['parent_folder_id'],
    size: json['size'],
    drive_id: !exists(json, 'drive_id') ? undefined : json['drive_id']
  }
}

export function CreateUploadSessionRequestToJSON(value?: CreateUploadSessionRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    parent_folder_id: value.parent_folder_id,
    size: value.size,
    drive_id: value.drive_id
  }
}
