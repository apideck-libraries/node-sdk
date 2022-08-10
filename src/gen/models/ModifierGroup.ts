/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.39.0
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
 * @interface ModifierGroup
 */
export interface ModifierGroup {
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  alternate_name?: string
  /**
   *
   * @type {number}
   * @memberof ModifierGroup
   */
  minimum_required?: number
  /**
   *
   * @type {number}
   * @memberof ModifierGroup
   */
  maximum_allowed?: number
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  selection_type?: ModifierGroupSelectionType
  /**
   *
   * @type {boolean}
   * @memberof ModifierGroup
   */
  present_at_all_locations?: boolean
  /**
   *
   * @type {Array<object>}
   * @memberof ModifierGroup
   */
  modifiers?: Array<object>
  /**
   *
   * @type {boolean}
   * @memberof ModifierGroup
   */
  deleted?: boolean | null
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  row_version?: string | null
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof ModifierGroup
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof ModifierGroup
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof ModifierGroup
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum ModifierGroupSelectionType {
  single = 'single',
  multiple = 'multiple'
}

export function ModifierGroupFromJSON(json: any): ModifierGroup {
  return ModifierGroupFromJSONTyped(json, false)
}

export function ModifierGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModifierGroup {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    alternate_name: !exists(json, 'alternate_name') ? undefined : json['alternate_name'],
    minimum_required: !exists(json, 'minimum_required') ? undefined : json['minimum_required'],
    maximum_allowed: !exists(json, 'maximum_allowed') ? undefined : json['maximum_allowed'],
    selection_type: !exists(json, 'selection_type') ? undefined : json['selection_type'],
    present_at_all_locations: !exists(json, 'present_at_all_locations')
      ? undefined
      : json['present_at_all_locations'],
    modifiers: !exists(json, 'modifiers') ? undefined : json['modifiers'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ModifierGroupToJSON(value?: ModifierGroup | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    alternate_name: value.alternate_name,
    minimum_required: value.minimum_required,
    maximum_allowed: value.maximum_allowed,
    selection_type: value.selection_type,
    present_at_all_locations: value.present_at_all_locations,
    modifiers: value.modifiers,
    deleted: value.deleted,
    row_version: value.row_version
  }
}
