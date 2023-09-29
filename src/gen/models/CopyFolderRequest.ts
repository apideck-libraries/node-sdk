/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.2
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
 * @interface CopyFolderRequest
 */
export interface CopyFolderRequest {
  /**
   * The parent folder to create the new file within.
   * @type {string}
   * @memberof CopyFolderRequest
   */
  parent_folder_id: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof CopyFolderRequest
   */
  readonly id?: string
  /**
   * The name of the folder.
   * @type {string}
   * @memberof CopyFolderRequest
   */
  name?: string
}

export function CopyFolderRequestFromJSON(json: any): CopyFolderRequest {
  return CopyFolderRequestFromJSONTyped(json, false)
}

export function CopyFolderRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CopyFolderRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    parent_folder_id: json['parent_folder_id'],
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function CopyFolderRequestToJSON(value?: CopyFolderRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    parent_folder_id: value.parent_folder_id,
    name: value.name
  }
}
