/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.10.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { FileType, FileTypeFromJSON, FileTypeToJSON } from './FileType'
import { LinkedFolder, LinkedFolderFromJSON, LinkedFolderToJSON } from './LinkedFolder'
import { Owner, OwnerFromJSON, OwnerToJSON } from './Owner'

/**
 *
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  readonly id: string
  /**
   * The name of the file
   * @type {string}
   * @memberof ModelFile
   */
  name: string
  /**
   *
   * @type {FileType}
   * @memberof ModelFile
   */
  type: FileType
  /**
   * Optional description of the file
   * @type {string}
   * @memberof ModelFile
   */
  description?: string
  /**
   * The full path of the file or folder (includes the file name)
   * @type {string}
   * @memberof ModelFile
   */
  path?: string
  /**
   * The MIME type of the file.
   * @type {string}
   * @memberof ModelFile
   */
  mime_type?: string
  /**
   * Whether the current user can download this file
   * @type {boolean}
   * @memberof ModelFile
   */
  downloadable?: boolean
  /**
   * The size of the file in bytes
   * @type {number}
   * @memberof ModelFile
   */
  size?: number
  /**
   *
   * @type {Owner}
   * @memberof ModelFile
   */
  owner?: Owner
  /**
   * The parent folders of the file, starting from the root
   * @type {Array<LinkedFolder>}
   * @memberof ModelFile
   */
  parent_folders?: Array<LinkedFolder>
  /**
   * Whether the list of parent folder is complete. Some connectors only return the direct parent of a file
   * @type {boolean}
   * @memberof ModelFile
   */
  parent_folders_complete?: boolean
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof ModelFile
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof ModelFile
   */
  readonly created_at?: Date
}

export function ModelFileFromJSON(json: any): ModelFile {
  return ModelFileFromJSONTyped(json, false)
}

export function ModelFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelFile {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    type: FileTypeFromJSON(json['type']),
    description: !exists(json, 'description') ? undefined : json['description'],
    path: !exists(json, 'path') ? undefined : json['path'],
    mime_type: !exists(json, 'mime_type') ? undefined : json['mime_type'],
    downloadable: !exists(json, 'downloadable') ? undefined : json['downloadable'],
    size: !exists(json, 'size') ? undefined : json['size'],
    owner: !exists(json, 'owner') ? undefined : OwnerFromJSON(json['owner']),
    parent_folders: !exists(json, 'parent_folders')
      ? undefined
      : (json['parent_folders'] as Array<any>).map(LinkedFolderFromJSON),
    parent_folders_complete: !exists(json, 'parent_folders_complete')
      ? undefined
      : json['parent_folders_complete'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ModelFileToJSON(value?: ModelFile | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    type: FileTypeToJSON(value.type),
    description: value.description,
    path: value.path,
    mime_type: value.mime_type,
    downloadable: value.downloadable,
    size: value.size,
    owner: OwnerToJSON(value.owner),
    parent_folders:
      value.parent_folders === undefined
        ? undefined
        : (value.parent_folders as Array<any>).map(LinkedFolderToJSON),
    parent_folders_complete: value.parent_folders_complete
  }
}
