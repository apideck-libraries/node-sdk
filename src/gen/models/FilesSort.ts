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
import { SortDirection, SortDirectionFromJSON, SortDirectionToJSON } from './SortDirection'

/**
 *
 * @export
 * @interface FilesSort
 */
export interface FilesSort {
  /**
   * The field on which to sort the Files
   * @type {string}
   * @memberof FilesSort
   */
  by?: FilesSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof FilesSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum FilesSortBy {
  updated_at = 'updated_at',
  name = 'name'
}

export function FilesSortFromJSON(json: any): FilesSort {
  return FilesSortFromJSONTyped(json, false)
}

export function FilesSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function FilesSortToJSON(value?: FilesSort | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    by: value.by,
    direction: SortDirectionToJSON(value.direction)
  }
}
