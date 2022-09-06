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
 * @interface OrderLineItems
 */
export interface OrderLineItems {
  /**
   *
   * @type {string}
   * @memberof OrderLineItems
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof OrderLineItems
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof OrderLineItems
   */
  item?: object | null
  /**
   *
   * @type {number}
   * @memberof OrderLineItems
   */
  total_tax?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderLineItems
   */
  total_discount?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderLineItems
   */
  total_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderLineItems
   */
  quantity?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderLineItems
   */
  unit_price?: number | null
  /**
   *
   * @type {Array<object>}
   * @memberof OrderLineItems
   */
  applied_taxes?: Array<object>
  /**
   *
   * @type {Array<object>}
   * @memberof OrderLineItems
   */
  applied_discounts?: Array<object>
  /**
   * Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts
   * @type {Array<object>}
   * @memberof OrderLineItems
   */
  modifiers?: Array<object>
}

export function OrderLineItemsFromJSON(json: any): OrderLineItems {
  return OrderLineItemsFromJSONTyped(json, false)
}

export function OrderLineItemsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderLineItems {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    item: !exists(json, 'item') ? undefined : json['item'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total_discount: !exists(json, 'total_discount') ? undefined : json['total_discount'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    applied_taxes: !exists(json, 'applied_taxes') ? undefined : json['applied_taxes'],
    applied_discounts: !exists(json, 'applied_discounts') ? undefined : json['applied_discounts'],
    modifiers: !exists(json, 'modifiers') ? undefined : json['modifiers']
  }
}

export function OrderLineItemsToJSON(value?: OrderLineItems | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    item: value.item,
    total_tax: value.total_tax,
    total_discount: value.total_discount,
    total_amount: value.total_amount,
    quantity: value.quantity,
    unit_price: value.unit_price,
    applied_taxes: value.applied_taxes,
    applied_discounts: value.applied_discounts,
    modifiers: value.modifiers
  }
}
