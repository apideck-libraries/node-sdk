/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.76.0
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
 * @interface Item
 */
export interface Item {
  /**
   *
   * @type {string}
   * @memberof Item
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Item
   */
  id?: string
  /**
   * A value you specify that uniquely identifies this request among requests you have sent.
   * @type {string}
   * @memberof Item
   */
  idempotency_key?: string
  /**
   *
   * @type {string}
   * @memberof Item
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof Item
   */
  abbreviation?: string
  /**
   *
   * @type {string}
   * @memberof Item
   */
  product_type?: ItemProductType
  /**
   *
   * @type {number}
   * @memberof Item
   */
  price_amount?: number
  /**
   *
   * @type {string}
   * @memberof Item
   */
  pricing_type?: ItemPricingType
  /**
   *
   * @type {Currency}
   * @memberof Item
   */
  price_currency?: Currency | null
  /**
   *
   * @type {number}
   * @memberof Item
   */
  cost?: number
  /**
   * A list of Tax IDs for the product.
   * @type {Array<string>}
   * @memberof Item
   */
  tax_ids?: Array<string>
  /**
   * A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.
   * @type {Array<string>}
   * @memberof Item
   */
  absent_at_location_ids?: Array<string>
  /**
   *
   * @type {boolean}
   * @memberof Item
   */
  present_at_all_locations?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Item
   */
  available_for_pickup?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Item
   */
  available_online?: boolean
  /**
   * SKU of the item
   * @type {string}
   * @memberof Item
   */
  sku?: string
  /**
   * Product code, e.g. UPC or EAN
   * @type {string}
   * @memberof Item
   */
  code?: string
  /**
   *
   * @type {Array<object>}
   * @memberof Item
   */
  categories?: Array<object>
  /**
   * List of options pertaining to this item's attribute variation
   * @type {Array<object>}
   * @memberof Item
   */
  options?: Array<object>
  /**
   *
   * @type {Array<object>}
   * @memberof Item
   */
  variations?: Array<object>
  /**
   *
   * @type {Array<object>}
   * @memberof Item
   */
  modifier_groups?: Array<object>
  /**
   *
   * @type {boolean}
   * @memberof Item
   */
  available?: boolean | null
  /**
   *
   * @type {boolean}
   * @memberof Item
   */
  hidden?: boolean | null
  /**
   *
   * @type {string}
   * @memberof Item
   */
  readonly version?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Item
   */
  deleted?: boolean | null
  /**
   *
   * @type {string}
   * @memberof Item
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Item
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Item
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Item
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum ItemProductType {
  regular = 'regular',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum ItemPricingType {
  fixed = 'fixed',
  variable = 'variable',
  per_unit = 'per_unit',
  other = 'other'
}

export function ItemFromJSON(json: any): Item {
  return ItemFromJSONTyped(json, false)
}

export function ItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): Item {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    id: !exists(json, 'id') ? undefined : json['id'],
    idempotency_key: !exists(json, 'idempotency_key') ? undefined : json['idempotency_key'],
    description: !exists(json, 'description') ? undefined : json['description'],
    abbreviation: !exists(json, 'abbreviation') ? undefined : json['abbreviation'],
    product_type: !exists(json, 'product_type') ? undefined : json['product_type'],
    price_amount: !exists(json, 'price_amount') ? undefined : json['price_amount'],
    pricing_type: !exists(json, 'pricing_type') ? undefined : json['pricing_type'],
    price_currency: !exists(json, 'price_currency')
      ? undefined
      : CurrencyFromJSON(json['price_currency']),
    cost: !exists(json, 'cost') ? undefined : json['cost'],
    tax_ids: !exists(json, 'tax_ids') ? undefined : json['tax_ids'],
    absent_at_location_ids: !exists(json, 'absent_at_location_ids')
      ? undefined
      : json['absent_at_location_ids'],
    present_at_all_locations: !exists(json, 'present_at_all_locations')
      ? undefined
      : json['present_at_all_locations'],
    available_for_pickup: !exists(json, 'available_for_pickup')
      ? undefined
      : json['available_for_pickup'],
    available_online: !exists(json, 'available_online') ? undefined : json['available_online'],
    sku: !exists(json, 'sku') ? undefined : json['sku'],
    code: !exists(json, 'code') ? undefined : json['code'],
    categories: !exists(json, 'categories') ? undefined : json['categories'],
    options: !exists(json, 'options') ? undefined : json['options'],
    variations: !exists(json, 'variations') ? undefined : json['variations'],
    modifier_groups: !exists(json, 'modifier_groups') ? undefined : json['modifier_groups'],
    available: !exists(json, 'available') ? undefined : json['available'],
    hidden: !exists(json, 'hidden') ? undefined : json['hidden'],
    version: !exists(json, 'version') ? undefined : json['version'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ItemToJSON(value?: Item | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    id: value.id,
    idempotency_key: value.idempotency_key,
    description: value.description,
    abbreviation: value.abbreviation,
    product_type: value.product_type,
    price_amount: value.price_amount,
    pricing_type: value.pricing_type,
    price_currency: CurrencyToJSON(value.price_currency),
    cost: value.cost,
    tax_ids: value.tax_ids,
    absent_at_location_ids: value.absent_at_location_ids,
    present_at_all_locations: value.present_at_all_locations,
    available_for_pickup: value.available_for_pickup,
    available_online: value.available_online,
    sku: value.sku,
    code: value.code,
    categories: value.categories,
    options: value.options,
    variations: value.variations,
    modifier_groups: value.modifier_groups,
    available: value.available,
    hidden: value.hidden,
    deleted: value.deleted
  }
}
