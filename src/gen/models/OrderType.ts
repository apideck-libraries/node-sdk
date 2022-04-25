/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CreatedAt, CreatedAtFromJSON, CreatedAtToJSON } from './CreatedAt'
import { CreatedBy, CreatedByFromJSON, CreatedByToJSON } from './CreatedBy'
import { UpdatedAt, UpdatedAtFromJSON, UpdatedAtToJSON } from './UpdatedAt'
import { Version, VersionFromJSON, VersionToJSON } from './Version'

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
   * @type {Version}
   * @memberof OrderType
   */
  updated_by?: Version
  /**
   *
   * @type {CreatedBy}
   * @memberof OrderType
   */
  created_by?: CreatedBy
  /**
   *
   * @type {UpdatedAt}
   * @memberof OrderType
   */
  updated_at?: UpdatedAt
  /**
   *
   * @type {CreatedAt}
   * @memberof OrderType
   */
  created_at?: CreatedAt
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
    updated_by: !exists(json, 'updated_by') ? undefined : VersionFromJSON(json['updated_by']),
    created_by: !exists(json, 'created_by') ? undefined : CreatedByFromJSON(json['created_by']),
    updated_at: !exists(json, 'updated_at') ? undefined : UpdatedAtFromJSON(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : CreatedAtFromJSON(json['created_at'])
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
    default: value._default,
    updated_by: VersionToJSON(value.updated_by),
    created_by: CreatedByToJSON(value.created_by),
    updated_at: UpdatedAtToJSON(value.updated_at),
    created_at: CreatedAtToJSON(value.created_at)
  }
}
