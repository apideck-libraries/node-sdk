/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
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
 * @interface Department
 */
export interface Department {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Department
   */
  readonly id?: string
  /**
   * Parent ID
   * @type {string}
   * @memberof Department
   */
  readonly parent_id?: string | null
  /**
   * Department name
   * @type {string}
   * @memberof Department
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof Department
   */
  code?: string | null
  /**
   *
   * @type {string}
   * @memberof Department
   */
  description?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Department
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Department
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Department
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Department
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Department
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Department
   */
  pass_through?: PassThroughBody
}

export function DepartmentFromJSON(json: any): Department {
  return DepartmentFromJSONTyped(json, false)
}

export function DepartmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Department {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    code: !exists(json, 'code') ? undefined : json['code'],
    description: !exists(json, 'description') ? undefined : json['description'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
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

export function DepartmentToJSON(value?: Department | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    code: value.code,
    description: value.description,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
