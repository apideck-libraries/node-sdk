/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
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
 * @interface CopyFolderRequest
 */
export interface CopyFolderRequest {
  /**
   * The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas.
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
  /**
   *
   * @type {PassThroughBody}
   * @memberof CopyFolderRequest
   */
  pass_through?: PassThroughBody
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
    name: !exists(json, 'name') ? undefined : json['name'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
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
    name: value.name,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
