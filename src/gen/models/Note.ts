/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
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
 * @interface Note
 */
export interface Note {
  /**
   *
   * @type {string}
   * @memberof Note
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Note
   */
  title?: string
  /**
   *
   * @type {string}
   * @memberof Note
   */
  content?: string
  /**
   *
   * @type {string}
   * @memberof Note
   */
  owner_id?: string
  /**
   *
   * @type {string}
   * @memberof Note
   */
  contact_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Note
   */
  company_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Note
   */
  opportunity_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Note
   */
  lead_id?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Note
   */
  active?: boolean | null
  /**
   *
   * @type {string}
   * @memberof Note
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Note
   */
  readonly created_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Note
   */
  readonly updated_at?: string
  /**
   *
   * @type {string}
   * @memberof Note
   */
  readonly created_at?: string
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
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at']
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
    active: value.active
  }
}
