/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
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
 * @interface OrderDiscounts
 */
export interface OrderDiscounts {
  /**
   *
   * @type {string}
   * @memberof OrderDiscounts
   */
  type: OrderDiscountsType
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderDiscounts
   */
  readonly id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderDiscounts
   */
  readonly product_id?: string
  /**
   *
   * @type {string}
   * @memberof OrderDiscounts
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof OrderDiscounts
   */
  amount?: number
  /**
   *
   * @type {Currency}
   * @memberof OrderDiscounts
   */
  currency?: Currency | null
  /**
   *
   * @type {string}
   * @memberof OrderDiscounts
   */
  scope?: OrderDiscountsScope
}

/**
 * @export
 * @enum {string}
 */
export enum OrderDiscountsType {
  percentage = 'percentage',
  flat_fee = 'flat_fee'
}
/**
 * @export
 * @enum {string}
 */
export enum OrderDiscountsScope {
  order = 'order',
  line_item = 'line_item'
}

export function OrderDiscountsFromJSON(json: any): OrderDiscounts {
  return OrderDiscountsFromJSONTyped(json, false)
}

export function OrderDiscountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderDiscounts {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: json['type'],
    id: !exists(json, 'id') ? undefined : json['id'],
    product_id: !exists(json, 'product_id') ? undefined : json['product_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    scope: !exists(json, 'scope') ? undefined : json['scope']
  }
}

export function OrderDiscountsToJSON(value?: OrderDiscounts | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    name: value.name,
    amount: value.amount,
    currency: CurrencyToJSON(value.currency),
    scope: value.scope
  }
}
