/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.83.0
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
 * @interface DriveGroup
 */
export interface DriveGroup {
  /**
   *
   * @type {string}
   * @memberof DriveGroup
   */
  readonly id: string
  /**
   * The name of the drive group
   * @type {string}
   * @memberof DriveGroup
   */
  name: string
  /**
   * The display name of the drive group
   * @type {string}
   * @memberof DriveGroup
   */
  display_name?: string
  /**
   *
   * @type {string}
   * @memberof DriveGroup
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof DriveGroup
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof DriveGroup
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof DriveGroup
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof DriveGroup
   */
  readonly created_at?: Date
}

export function DriveGroupFromJSON(json: any): DriveGroup {
  return DriveGroupFromJSONTyped(json, false)
}

export function DriveGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): DriveGroup {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function DriveGroupToJSON(value?: DriveGroup | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    display_name: value.display_name,
    description: value.description
  }
}
