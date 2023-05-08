/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceProductCategories,
  EcommerceProductCategoriesFromJSON,
  EcommerceProductCategoriesToJSON
} from './EcommerceProductCategories'
import {
  EcommerceProductImages,
  EcommerceProductImagesFromJSON,
  EcommerceProductImagesToJSON
} from './EcommerceProductImages'
import {
  EcommerceProductOptions,
  EcommerceProductOptionsFromJSON,
  EcommerceProductOptionsToJSON
} from './EcommerceProductOptions'
import {
  EcommerceProductVariants,
  EcommerceProductVariantsFromJSON,
  EcommerceProductVariantsToJSON
} from './EcommerceProductVariants'

/**
 *
 * @export
 * @interface EcommerceProduct
 */
export interface EcommerceProduct {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceProduct
   */
  readonly id: string
  /**
   * The name of the product as it should be displayed to customers.
   * @type {string}
   * @memberof EcommerceProduct
   */
  name?: string
  /**
   * A detailed description of the product.
   * @type {string}
   * @memberof EcommerceProduct
   */
  description?: string
  /**
   * The current status of the product (active or archived).
   * @type {string}
   * @memberof EcommerceProduct
   */
  status?: EcommerceProductStatus
  /**
   * The price of the product.
   * @type {string}
   * @memberof EcommerceProduct
   */
  price?: string
  /**
   * The stock keeping unit of the product.
   * @type {string}
   * @memberof EcommerceProduct
   */
  sku?: string
  /**
   * The quantity of the product in stock.
   * @type {string}
   * @memberof EcommerceProduct
   */
  inventory_quantity?: string
  /**
   * An array of image URLs for the product.
   * @type {Array<EcommerceProductImages>}
   * @memberof EcommerceProduct
   */
  images?: Array<EcommerceProductImages>
  /**
   * The weight of the product.
   * @type {string}
   * @memberof EcommerceProduct
   */
  weight?: string
  /**
   * The unit of measurement for the weight of the product.
   * @type {string}
   * @memberof EcommerceProduct
   */
  weight_unit?: string
  /**
   * An array of options for the product.
   * @type {Array<EcommerceProductOptions>}
   * @memberof EcommerceProduct
   */
  options?: Array<EcommerceProductOptions>
  /**
   *
   * @type {Array<EcommerceProductVariants>}
   * @memberof EcommerceProduct
   */
  variants?: Array<EcommerceProductVariants>
  /**
   * An array of tags for the product, used for organization and searching.
   * @type {Array<string>}
   * @memberof EcommerceProduct
   */
  tags?: Array<string>
  /**
   * An array of categories for the product, used for organization and searching.
   * @type {Array<EcommerceProductCategories>}
   * @memberof EcommerceProduct
   */
  categories?: Array<EcommerceProductCategories>
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof EcommerceProduct
   */
  readonly created_at?: Date
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof EcommerceProduct
   */
  readonly updated_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum EcommerceProductStatus {
  active = 'active',
  archived = 'archived'
}

export function EcommerceProductFromJSON(json: any): EcommerceProduct {
  return EcommerceProductFromJSONTyped(json, false)
}

export function EcommerceProductFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProduct {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : json['status'],
    price: !exists(json, 'price') ? undefined : json['price'],
    sku: !exists(json, 'sku') ? undefined : json['sku'],
    inventory_quantity: !exists(json, 'inventory_quantity')
      ? undefined
      : json['inventory_quantity'],
    images: !exists(json, 'images')
      ? undefined
      : (json['images'] as Array<any>).map(EcommerceProductImagesFromJSON),
    weight: !exists(json, 'weight') ? undefined : json['weight'],
    weight_unit: !exists(json, 'weight_unit') ? undefined : json['weight_unit'],
    options: !exists(json, 'options')
      ? undefined
      : (json['options'] as Array<any>).map(EcommerceProductOptionsFromJSON),
    variants: !exists(json, 'variants')
      ? undefined
      : (json['variants'] as Array<any>).map(EcommerceProductVariantsFromJSON),
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    categories: !exists(json, 'categories')
      ? undefined
      : (json['categories'] as Array<any>).map(EcommerceProductCategoriesFromJSON),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function EcommerceProductToJSON(value?: EcommerceProduct | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    description: value.description,
    status: value.status,
    price: value.price,
    sku: value.sku,
    inventory_quantity: value.inventory_quantity,
    images:
      value.images === undefined
        ? undefined
        : (value.images as Array<any>).map(EcommerceProductImagesToJSON),
    weight: value.weight,
    weight_unit: value.weight_unit,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(EcommerceProductOptionsToJSON),
    variants:
      value.variants === undefined
        ? undefined
        : (value.variants as Array<any>).map(EcommerceProductVariantsToJSON),
    tags: value.tags,
    categories:
      value.categories === undefined
        ? undefined
        : (value.categories as Array<any>).map(EcommerceProductCategoriesToJSON)
  }
}
