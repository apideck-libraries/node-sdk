/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.2
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
 * @interface CreateFileRequest
 */
export interface CreateFileRequest {
  /**
   * The name of the file.
   * @type {string}
   * @memberof CreateFileRequest
   */
  name: string
  /**
   * The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas.
   * @type {string}
   * @memberof CreateFileRequest
   */
  parent_folder_id: string
  /**
   * ID of the drive to upload to.
   * @type {string}
   * @memberof CreateFileRequest
   */
  drive_id?: string
  /**
   * Optional description of the file.
   * @type {string}
   * @memberof CreateFileRequest
   */
  description?: string
}

export function CreateFileRequestFromJSON(json: any): CreateFileRequest {
  return CreateFileRequestFromJSONTyped(json, false)
}

export function CreateFileRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateFileRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    parent_folder_id: json['parent_folder_id'],
    drive_id: !exists(json, 'drive_id') ? undefined : json['drive_id'],
    description: !exists(json, 'description') ? undefined : json['description']
  }
}

export function CreateFileRequestToJSON(value?: CreateFileRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    parent_folder_id: value.parent_folder_id,
    drive_id: value.drive_id,
    description: value.description
  }
}
