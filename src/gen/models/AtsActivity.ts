/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.50.0
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
   *
   * @type {string}
   * @memberof AtsActivity
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof AtsActivity
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof AtsActivity
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof AtsActivity
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof AtsActivity
   */
  readonly created_at?: Date
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
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
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
