/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.34.0
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
 * @interface CreateFolderRequest
 */
export interface CreateFolderRequest {
  /**
   * The name of the folder.
   * @type {string}
   * @memberof CreateFolderRequest
   */
  name: string
  /**
   * The parent folder to create the new file within.
   * @type {string}
   * @memberof CreateFolderRequest
   */
  parent_folder_id: string
  /**
   *
   * @type {string}
   * @memberof CreateFolderRequest
   */
  readonly id?: string
  /**
   * Optional description of the folder.
   * @type {string}
   * @memberof CreateFolderRequest
   */
  description?: string
}

export function CreateFolderRequestFromJSON(json: any): CreateFolderRequest {
  return CreateFolderRequestFromJSONTyped(json, false)
}

export function CreateFolderRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateFolderRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    parent_folder_id: json['parent_folder_id'],
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description']
  }
}

export function CreateFolderRequestToJSON(value?: CreateFolderRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    parent_folder_id: value.parent_folder_id,
    description: value.description
  }
}
