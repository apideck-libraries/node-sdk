/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.48.0
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
 * @interface UpdateFolderRequest
 */
export interface UpdateFolderRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateFolderRequest
   */
  readonly id?: string
  /**
   * The name of the folder.
   * @type {string}
   * @memberof UpdateFolderRequest
   */
  name?: string
  /**
   * Optional description of the folder.
   * @type {string}
   * @memberof UpdateFolderRequest
   */
  description?: string
  /**
   * The parent folder to create the new file within.
   * @type {string}
   * @memberof UpdateFolderRequest
   */
  parent_folder_id?: string
}

export function UpdateFolderRequestFromJSON(json: any): UpdateFolderRequest {
  return UpdateFolderRequestFromJSONTyped(json, false)
}

export function UpdateFolderRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateFolderRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    parent_folder_id: !exists(json, 'parent_folder_id') ? undefined : json['parent_folder_id']
  }
}

export function UpdateFolderRequestToJSON(value?: UpdateFolderRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    description: value.description,
    parent_folder_id: value.parent_folder_id
  }
}
