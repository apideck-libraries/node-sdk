/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.4
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
 * @interface EcommerceProductImages1
 */
export interface EcommerceProductImages1 {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceProductImages1
   */
  readonly id?: string | null
  /**
   * The URL of an image of the variant.
   * @type {string}
   * @memberof EcommerceProductImages1
   */
  url?: string | null
}

export function EcommerceProductImages1FromJSON(json: any): EcommerceProductImages1 {
  return EcommerceProductImages1FromJSONTyped(json, false)
}

export function EcommerceProductImages1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProductImages1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    url: !exists(json, 'url') ? undefined : json['url']
  }
}

export function EcommerceProductImages1ToJSON(value?: EcommerceProductImages1 | null): any {
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
