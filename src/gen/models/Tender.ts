/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
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
 * @interface Tender
 */
export interface Tender {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Tender
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Tender
   */
  key?: string | null
  /**
   *
   * @type {string}
   * @memberof Tender
   */
  label?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Tender
   */
  active?: boolean | null
  /**
   *
   * @type {boolean}
   * @memberof Tender
   */
  hidden?: boolean | null
  /**
   *
   * @type {boolean}
   * @memberof Tender
   */
  editable?: boolean | null
  /**
   * If this tender opens the cash drawer
   * @type {boolean}
   * @memberof Tender
   */
  opens_cash_drawer?: boolean
  /**
   * Allow tipping on payment from tender
   * @type {boolean}
   * @memberof Tender
   */
  allows_tipping?: boolean
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Tender
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Tender
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Tender
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Tender
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Tender
   */
  readonly created_at?: Date | null
}

export function TenderFromJSON(json: any): Tender {
  return TenderFromJSONTyped(json, false)
}

export function TenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tender {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    key: !exists(json, 'key') ? undefined : json['key'],
    label: !exists(json, 'label') ? undefined : json['label'],
    active: !exists(json, 'active') ? undefined : json['active'],
    hidden: !exists(json, 'hidden') ? undefined : json['hidden'],
    editable: !exists(json, 'editable') ? undefined : json['editable'],
    opens_cash_drawer: !exists(json, 'opens_cash_drawer') ? undefined : json['opens_cash_drawer'],
    allows_tipping: !exists(json, 'allows_tipping') ? undefined : json['allows_tipping'],
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

export function TenderToJSON(value?: Tender | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    key: value.key,
    label: value.label,
    active: value.active,
    hidden: value.hidden,
    editable: value.editable,
    opens_cash_drawer: value.opens_cash_drawer,
    allows_tipping: value.allows_tipping
  }
}
