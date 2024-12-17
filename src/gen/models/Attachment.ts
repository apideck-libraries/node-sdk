/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  AttachmentReference,
  AttachmentReferenceFromJSON,
  AttachmentReferenceToJSON
} from './AttachmentReference'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface Attachment
 */
export interface Attachment {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Attachment
   */
  readonly id?: string
  /**
   * The display id of the file
   * @type {string}
   * @memberof Attachment
   */
  display_id?: string | null
  /**
   * The name of the file
   * @type {string}
   * @memberof Attachment
   */
  name?: string | null
  /**
   * The MIME type of the file.
   * @type {string}
   * @memberof Attachment
   */
  mime_type?: string | null
  /**
   * The size of the file in bytes
   * @type {number}
   * @memberof Attachment
   */
  size?: number | null
  /**
   *
   * @type {AttachmentReference}
   * @memberof Attachment
   */
  reference?: AttachmentReference
  /**
   * Optional description of the file
   * @type {string}
   * @memberof Attachment
   */
  description?: string | null
  /**
   * The folder id where this attachment belong to
   * @type {string}
   * @memberof Attachment
   */
  parent_folder_id?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Attachment
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Attachment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Attachment
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Attachment
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Attachment
   */
  pass_through?: PassThroughBody
}

export function AttachmentFromJSON(json: any): Attachment {
  return AttachmentFromJSONTyped(json, false)
}

export function AttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Attachment {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    mime_type: !exists(json, 'mime_type') ? undefined : json['mime_type'],
    size: !exists(json, 'size') ? undefined : json['size'],
    reference: !exists(json, 'reference')
      ? undefined
      : AttachmentReferenceFromJSON(json['reference']),
    description: !exists(json, 'description') ? undefined : json['description'],
    parent_folder_id: !exists(json, 'parent_folder_id') ? undefined : json['parent_folder_id'],
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
      : new Date(json['created_at']),
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function AttachmentToJSON(value?: Attachment | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    display_id: value.display_id,
    name: value.name,
    mime_type: value.mime_type,
    size: value.size,
    reference: AttachmentReferenceToJSON(value.reference),
    description: value.description,
    parent_folder_id: value.parent_folder_id,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
