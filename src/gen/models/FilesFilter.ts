/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.0
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
 * @interface FilesFilter
 */
export interface FilesFilter {
  /**
   * ID of the drive to filter on
   * @type {string}
   * @memberof FilesFilter
   */
  drive_id?: string
  /**
   * ID of the folder to filter on. The root folder has an alias "root"
   * @type {string}
   * @memberof FilesFilter
   */
  folder_id?: string
  /**
   * Only return files and folders that are shared
   * @type {boolean}
   * @memberof FilesFilter
   */
  shared?: boolean
}

export function FilesFilterFromJSON(json: any): FilesFilter {
  return FilesFilterFromJSONTyped(json, false)
}

export function FilesFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    drive_id: !exists(json, 'drive_id') ? undefined : json['drive_id'],
    folder_id: !exists(json, 'folder_id') ? undefined : json['folder_id'],
    shared: !exists(json, 'shared') ? undefined : json['shared']
  }
}

export function FilesFilterToJSON(value?: FilesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    drive_id: value.drive_id,
    folder_id: value.folder_id,
    shared: value.shared
  }
}
