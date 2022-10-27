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
 * @interface FilesSearch
 */
export interface FilesSearch {
  /**
   * The query to search for. May match across multiple fields.
   * @type {string}
   * @memberof FilesSearch
   */
  query: string
  /**
   * ID of the drive to filter on
   * @type {string}
   * @memberof FilesSearch
   */
  drive_id?: string
}

export function FilesSearchFromJSON(json: any): FilesSearch {
  return FilesSearchFromJSONTyped(json, false)
}

export function FilesSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesSearch {
  if (json === undefined || json === null) {
    return json
  }
  return {
    query: json['query'],
    drive_id: !exists(json, 'drive_id') ? undefined : json['drive_id']
  }
}

export function FilesSearchToJSON(value?: FilesSearch | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    query: value.query,
    drive_id: value.drive_id
  }
}
