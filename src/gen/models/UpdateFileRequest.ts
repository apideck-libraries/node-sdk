/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.0
 *
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
 * @interface UpdateFileRequest
 */
export interface UpdateFileRequest {
  /**
   * The name of the file.
   * @type {string}
   * @memberof UpdateFileRequest
   */
  name?: string
  /**
   * Optional description of the file.
   * @type {string}
   * @memberof UpdateFileRequest
   */
  description?: string
  /**
   * The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas.
   * @type {string}
   * @memberof UpdateFileRequest
   */
  parent_folder_id?: string
  /**
   *
   * @type {PassThroughBody}
   * @memberof UpdateFileRequest
   */
  pass_through?: PassThroughBody
}

export function UpdateFileRequestFromJSON(json: any): UpdateFileRequest {
  return UpdateFileRequestFromJSONTyped(json, false)
}

export function UpdateFileRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateFileRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    parent_folder_id: !exists(json, 'parent_folder_id') ? undefined : json['parent_folder_id'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function UpdateFileRequestToJSON(value?: UpdateFileRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    description: value.description,
    parent_folder_id: value.parent_folder_id,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
