/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.49.0
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
 * @interface OrderType
 */
export interface OrderType {
  /**
   *
   * @type {string}
   * @memberof OrderType
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof OrderType
   */
  name?: string
  /**
   *
   * @type {boolean}
   * @memberof OrderType
   */
  _default?: boolean
  /**
   *
   * @type {string}
   * @memberof OrderType
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof OrderType
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof OrderType
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof OrderType
   */
  readonly created_at?: Date
}

export function OrderTypeFromJSON(json: any): OrderType {
  return OrderTypeFromJSONTyped(json, false)
}

export function OrderTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderType {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    _default: !exists(json, 'default') ? undefined : json['default'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function OrderTypeToJSON(value?: OrderType | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    default: value._default
  }
}
