/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
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
   * A unique identifier for an object.
   * @type {string}
   * @memberof Modifier
   */
  readonly id?: string
  /**
   * A value you specify that uniquely identifies this request among requests you have sent.
   * @type {string}
   * @memberof Modifier
   */
  idempotency_key?: string
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
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Modifier
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Modifier
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Modifier
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Modifier
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Modifier
   */
  readonly created_at?: Date | null
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
    idempotency_key: !exists(json, 'idempotency_key') ? undefined : json['idempotency_key'],
    alternate_name: !exists(json, 'alternate_name') ? undefined : json['alternate_name'],
    price_amount: !exists(json, 'price_amount') ? undefined : json['price_amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    available: !exists(json, 'available') ? undefined : json['available'],
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
    idempotency_key: value.idempotency_key,
    alternate_name: value.alternate_name,
    price_amount: value.price_amount,
    currency: CurrencyToJSON(value.currency),
    available: value.available
  }
}
