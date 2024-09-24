/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

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
   * The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  parent_folder_id: string
  /**
   * The size of the file in bytes
   * @type {number}
   * @memberof CreateUploadSessionRequest
   */
  size: number | null
  /**
   * ID of the drive to upload to.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  drive_id?: string
  /**
   *
   * @type {PassThroughBody}
   * @memberof CreateUploadSessionRequest
   */
  pass_through?: PassThroughBody
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
    drive_id: !exists(json, 'drive_id') ? undefined : json['drive_id'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
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
    drive_id: value.drive_id,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
