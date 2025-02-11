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
/**
 *
 * @export
 * @interface EcommerceProductOptions
 */
export interface EcommerceProductOptions {
  /**
   * A unique identifier for the option of the product.
   * @type {string}
   * @memberof EcommerceProductOptions
   */
  id?: string | null
  /**
   * The name of the option for the product.
   * @type {string}
   * @memberof EcommerceProductOptions
   */
  name?: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof EcommerceProductOptions
   */
  values?: Array<string>
}

export function EcommerceProductOptionsFromJSON(json: any): EcommerceProductOptions {
  return EcommerceProductOptionsFromJSONTyped(json, false)
}

export function EcommerceProductOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProductOptions {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    values: !exists(json, 'values') ? undefined : json['values']
  }
}

export function EcommerceProductOptionsToJSON(value?: EcommerceProductOptions | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    values: value.values
  }
}
