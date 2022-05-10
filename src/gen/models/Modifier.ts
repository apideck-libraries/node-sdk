/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.29.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface Modifier
 */
export interface Modifier {
  /**
   *
   * @type {string}
   * @memberof Modifier
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Modifier
   */
  modifier_group_id: string
  /**
   *
   * @type {string}
   * @memberof Modifier
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Modifier
   */
  alternate_name?: string
  /**
   *
   * @type {number}
   * @memberof Modifier
   */
  price_amount?: number
  /**
   *
   * @type {Currency}
   * @memberof Modifier
   */
  currency?: Currency | null
  /**
   *
   * @type {boolean}
   * @memberof Modifier
   */
  available?: boolean | null
  /**
   *
   * @type {string}
   * @memberof Modifier
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Modifier
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Modifier
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Modifier
   */
  readonly created_at?: Date
}

export function ModifierFromJSON(json: any): Modifier {
  return ModifierFromJSONTyped(json, false)
}

export function ModifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): Modifier {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    modifier_group_id: json['modifier_group_id'],
    id: !exists(json, 'id') ? undefined : json['id'],
    alternate_name: !exists(json, 'alternate_name') ? undefined : json['alternate_name'],
    price_amount: !exists(json, 'price_amount') ? undefined : json['price_amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    available: !exists(json, 'available') ? undefined : json['available'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ModifierToJSON(value?: Modifier | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    modifier_group_id: value.modifier_group_id,
    alternate_name: value.alternate_name,
    price_amount: value.price_amount,
    currency: CurrencyToJSON(value.currency),
    available: value.available
  }
}
