/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.2
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
 * @interface UpdateFolderRequest
 */
export interface UpdateFolderRequest {
  /**
   * A unique identifier for an object.
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
   * The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas.
   * @type {string}
   * @memberof UpdateFolderRequest
   */
  parent_folder_id?: string
  /**
   *
   * @type {PassThroughBody}
   * @memberof UpdateFolderRequest
   */
  pass_through?: PassThroughBody
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
    parent_folder_id: !exists(json, 'parent_folder_id') ? undefined : json['parent_folder_id'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
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
    parent_folder_id: value.parent_folder_id,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
