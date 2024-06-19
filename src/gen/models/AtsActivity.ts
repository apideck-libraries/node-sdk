/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.5.0
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
 * @interface AtsActivity
 */
export interface AtsActivity {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof AtsActivity
   */
  readonly id?: string
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof AtsActivity
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof AtsActivity
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof AtsActivity
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof AtsActivity
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof AtsActivity
   */
  readonly created_at?: Date | null
}

export function AtsActivityFromJSON(json: any): AtsActivity {
  return AtsActivityFromJSONTyped(json, false)
}

export function AtsActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AtsActivity {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
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
      : new Date(json['created_at'])
  }
}

export function AtsActivityToJSON(value?: AtsActivity | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
