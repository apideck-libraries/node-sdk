/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
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
  /**
   *
   * @type {PassThroughBody}
   * @memberof FilesSearch
   */
  pass_through?: PassThroughBody
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
    drive_id: !exists(json, 'drive_id') ? undefined : json['drive_id'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
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
    drive_id: value.drive_id,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
