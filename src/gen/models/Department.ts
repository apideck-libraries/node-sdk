/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.27.2
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
 * @interface Department
 */
export interface Department {
  /**
   *
   * @type {string}
   * @memberof Department
   */
  readonly id?: string
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
   *
   * @type {string}
   * @memberof Department
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Department
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Department
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Department
   */
  readonly created_at?: Date
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
    name: !exists(json, 'name') ? undefined : json['name'],
    code: !exists(json, 'code') ? undefined : json['code'],
    description: !exists(json, 'description') ? undefined : json['description'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
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
    description: value.description
  }
}
