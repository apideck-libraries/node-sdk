/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.2
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
 * @interface EcommerceProductImages
 */
export interface EcommerceProductImages {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceProductImages
   */
  readonly id?: string | null
  /**
   * The URL of an image of the product.
   * @type {string}
   * @memberof EcommerceProductImages
   */
  url?: string | null
}

export function EcommerceProductImagesFromJSON(json: any): EcommerceProductImages {
  return EcommerceProductImagesFromJSONTyped(json, false)
}

export function EcommerceProductImagesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProductImages {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    url: !exists(json, 'url') ? undefined : json['url']
  }
}

export function EcommerceProductImagesToJSON(value?: EcommerceProductImages | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    url: value.url
  }
}
