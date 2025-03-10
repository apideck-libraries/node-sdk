/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { LinkedFolder, LinkedFolderFromJSON, LinkedFolderToJSON } from './LinkedFolder'
import { Owner, OwnerFromJSON, OwnerToJSON } from './Owner'

/**
 *
 * @export
 * @interface Folder
 */
export interface Folder {
  /**
   * The name of the folder
   * @type {string}
   * @memberof Folder
   */
  name: string
  /**
   * The parent folders of the file, starting from the root
   * @type {Array<LinkedFolder>}
   * @memberof Folder
   */
  parent_folders: Array<LinkedFolder>
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Folder
   */
  readonly id?: string
  /**
   * Optional description of the folder
   * @type {string}
   * @memberof Folder
   */
  description?: string | null
  /**
   * The full path of the folder (includes the folder name)
   * @type {string}
   * @memberof Folder
   */
  readonly path?: string | null
  /**
   * The size of the folder in bytes
   * @type {number}
   * @memberof Folder
   */
  readonly size?: number | null
  /**
   *
   * @type {Owner}
   * @memberof Folder
   */
  owner?: Owner
  /**
   * Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder
   * @type {boolean}
   * @memberof Folder
   */
  readonly parent_folders_complete?: boolean
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Folder
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Folder
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Folder
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Folder
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Folder
   */
  readonly created_at?: Date | null
}

export function FolderFromJSON(json: any): Folder {
  return FolderFromJSONTyped(json, false)
}

export function FolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Folder {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    parent_folders: (json['parent_folders'] as Array<any>).map(LinkedFolderFromJSON),
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    path: !exists(json, 'path') ? undefined : json['path'],
    size: !exists(json, 'size') ? undefined : json['size'],
    owner: !exists(json, 'owner') ? undefined : OwnerFromJSON(json['owner']),
    parent_folders_complete: !exists(json, 'parent_folders_complete')
      ? undefined
      : json['parent_folders_complete'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at'])
  }
}

export function FolderToJSON(value?: Folder | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    parent_folders: (value.parent_folders as Array<any>).map(LinkedFolderToJSON),
    description: value.description,
    owner: OwnerToJSON(value.owner)
  }
}
