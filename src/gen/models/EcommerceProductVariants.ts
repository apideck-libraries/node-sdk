/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceProductImages1,
  EcommerceProductImages1FromJSON,
  EcommerceProductImages1ToJSON
} from './EcommerceProductImages1'
import {
  EcommerceProductOptions1,
  EcommerceProductOptions1FromJSON,
  EcommerceProductOptions1ToJSON
} from './EcommerceProductOptions1'

/**
 *
 * @export
 * @interface EcommerceProductVariants
 */
export interface EcommerceProductVariants {
  /**
   * A unique identifier for the variant of the product.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  id?: string | null
  /**
   * The name for the variant, used for displaying to customers.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  name?: string | null
  /**
   * The price of the variant.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  price?: string | null
  /**
   * The stock keeping unit of the variant.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  sku?: string | null
  /**
   * The quantity of the variant in stock.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  inventory_quantity?: string | null
  /**
   * The weight of the variant.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  weight?: string | null
  /**
   * The unit of measurement for the weight of the variant.
   * @type {string}
   * @memberof EcommerceProductVariants
   */
  weight_unit?: string | null
  /**
   *
   * @type {Array<EcommerceProductOptions1>}
   * @memberof EcommerceProductVariants
   */
  options?: Array<EcommerceProductOptions1>
  /**
   *
   * @type {Array<EcommerceProductImages1>}
   * @memberof EcommerceProductVariants
   */
  images?: Array<EcommerceProductImages1>
}

export function EcommerceProductVariantsFromJSON(json: any): EcommerceProductVariants {
  return EcommerceProductVariantsFromJSONTyped(json, false)
}

export function EcommerceProductVariantsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProductVariants {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    price: !exists(json, 'price') ? undefined : json['price'],
    sku: !exists(json, 'sku') ? undefined : json['sku'],
    inventory_quantity: !exists(json, 'inventory_quantity')
      ? undefined
      : json['inventory_quantity'],
    weight: !exists(json, 'weight') ? undefined : json['weight'],
    weight_unit: !exists(json, 'weight_unit') ? undefined : json['weight_unit'],
    options: !exists(json, 'options')
      ? undefined
      : (json['options'] as Array<any>).map(EcommerceProductOptions1FromJSON),
    images: !exists(json, 'images')
      ? undefined
      : (json['images'] as Array<any>).map(EcommerceProductImages1FromJSON)
  }
}

export function EcommerceProductVariantsToJSON(value?: EcommerceProductVariants | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    price: value.price,
    sku: value.sku,
    inventory_quantity: value.inventory_quantity,
    weight: value.weight,
    weight_unit: value.weight_unit,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(EcommerceProductOptions1ToJSON),
    images:
      value.images === undefined
        ? undefined
        : (value.images as Array<any>).map(EcommerceProductImages1ToJSON)
  }
}
