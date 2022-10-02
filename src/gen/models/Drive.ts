/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.1
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
 * @interface Drive
 */
export interface Drive {
  /**
   *
   * @type {string}
   * @memberof Drive
   */
  readonly id: string
  /**
   * The name of the drive
   * @type {string}
   * @memberof Drive
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Drive
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof Drive
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Drive
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Drive
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Drive
   */
  readonly created_at?: Date
}

export function DriveFromJSON(json: any): Drive {
  return DriveFromJSONTyped(json, false)
}

export function DriveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Drive {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function DriveToJSON(value?: Drive | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    description: value.description
  }
}
