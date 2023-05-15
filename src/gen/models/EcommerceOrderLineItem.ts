/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceDiscount,
  EcommerceDiscountFromJSON,
  EcommerceDiscountToJSON
} from './EcommerceDiscount'

/**
 * A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.
 * @export
 * @interface EcommerceOrderLineItem
 */
export interface EcommerceOrderLineItem {
  /**
   * The name of the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  name: string
  /**
   * The quantity of the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  quantity: string
  /**
   * The total amount for the product(s) or variant associated with the line item, including taxes and discounts.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  total_amount: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  readonly id?: string
  /**
   * A unique identifier for the product associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  product_id?: string
  /**
   * A unique identifier for the variant of the product associated with the line item, if applicable.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  variant_id?: string
  /**
   * The SKU of the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  sku?: string
  /**
   * The description of the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  description?: string
  /**
   *
   * @type {Array<object>}
   * @memberof EcommerceOrderLineItem
   */
  options?: Array<object>
  /**
   * The unit price of the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  unit_price?: string
  /**
   * The tax rate applied to the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  tax_rate?: string
  /**
   * The total tax amount applied to the product or variant associated with the line item.
   * @type {string}
   * @memberof EcommerceOrderLineItem
   */
  tax_amount?: string
  /**
   *
   * @type {Array<EcommerceDiscount>}
   * @memberof EcommerceOrderLineItem
   */
  discounts?: Array<EcommerceDiscount>
}

export function EcommerceOrderLineItemFromJSON(json: any): EcommerceOrderLineItem {
  return EcommerceOrderLineItemFromJSONTyped(json, false)
}

export function EcommerceOrderLineItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceOrderLineItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    quantity: json['quantity'],
    total_amount: json['total_amount'],
    id: !exists(json, 'id') ? undefined : json['id'],
    product_id: !exists(json, 'product_id') ? undefined : json['product_id'],
    variant_id: !exists(json, 'variant_id') ? undefined : json['variant_id'],
    sku: !exists(json, 'sku') ? undefined : json['sku'],
    description: !exists(json, 'description') ? undefined : json['description'],
    options: !exists(json, 'options') ? undefined : json['options'],
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
    tax_amount: !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
    discounts: !exists(json, 'discounts')
      ? undefined
      : (json['discounts'] as Array<any>).map(EcommerceDiscountFromJSON)
  }
}

export function EcommerceOrderLineItemToJSON(value?: EcommerceOrderLineItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    quantity: value.quantity,
    total_amount: value.total_amount,
    product_id: value.product_id,
    variant_id: value.variant_id,
    sku: value.sku,
    description: value.description,
    options: value.options,
    unit_price: value.unit_price,
    tax_rate: value.tax_rate,
    tax_amount: value.tax_amount,
    discounts:
      value.discounts === undefined
        ? undefined
        : (value.discounts as Array<any>).map(EcommerceDiscountToJSON)
  }
}
