/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.2
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
 * @interface Note
 */
export interface Note {
  /**
   * The unique identifier of the note
   * @type {string}
   * @memberof Note
   */
  readonly id?: string
  /**
   * The title of the note
   * @type {string}
   * @memberof Note
   */
  title?: string | null
  /**
   * The content of the note.
   * @type {string}
   * @memberof Note
   */
  content?: string | null
  /**
   * The user that owns the note.
   * @type {string}
   * @memberof Note
   */
  owner_id?: string | null
  /**
   * The contact that is related to the note.
   * @type {string}
   * @memberof Note
   */
  contact_id?: string | null
  /**
   * The company that is related to the note.
   * @type {string}
   * @memberof Note
   */
  company_id?: string | null
  /**
   * The opportunity that is related to the note.
   * @type {string}
   * @memberof Note
   */
  opportunity_id?: string | null
  /**
   * The lead that is related to the note.
   * @type {string}
   * @memberof Note
   */
  lead_id?: string | null
  /**
   * Whether the Note is active or not.
   * @type {boolean}
   * @memberof Note
   */
  active?: boolean | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Note
   */
  readonly custom_mappings?: object | null
  /**
   * The user that last updated the note.
   * @type {string}
   * @memberof Note
   */
  readonly updated_by?: string | null
  /**
   * The user that created the note.
   * @type {string}
   * @memberof Note
   */
  readonly created_by?: string | null
  /**
   * The timestamp when the note was last updated
   * @type {string}
   * @memberof Note
   */
  readonly updated_at?: string | null
  /**
   * The timestamp when the note was created
   * @type {string}
   * @memberof Note
   */
  readonly created_at?: string | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Note
   */
  pass_through?: PassThroughBody
}

export function NoteFromJSON(json: any): Note {
  return NoteFromJSONTyped(json, false)
}

export function NoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Note {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    content: !exists(json, 'content') ? undefined : json['content'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    contact_id: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    opportunity_id: !exists(json, 'opportunity_id') ? undefined : json['opportunity_id'],
    lead_id: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    active: !exists(json, 'active') ? undefined : json['active'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function NoteToJSON(value?: Note | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    content: value.content,
    owner_id: value.owner_id,
    contact_id: value.contact_id,
    company_id: value.company_id,
    opportunity_id: value.opportunity_id,
    lead_id: value.lead_id,
    active: value.active,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
