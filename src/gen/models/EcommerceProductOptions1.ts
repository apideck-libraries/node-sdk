/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
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
 * @interface EcommerceProductOptions1
 */
export interface EcommerceProductOptions1 {
  /**
   * A unique identifier for the option of the variant.
   * @type {string}
   * @memberof EcommerceProductOptions1
   */
  id?: string | null
  /**
   * The name of the option for the variant.
   * @type {string}
   * @memberof EcommerceProductOptions1
   */
  name?: string | null
  /**
   * The value of the option for the variant.
   * @type {string}
   * @memberof EcommerceProductOptions1
   */
  value?: string | null
}

export function EcommerceProductOptions1FromJSON(json: any): EcommerceProductOptions1 {
  return EcommerceProductOptions1FromJSONTyped(json, false)
}

export function EcommerceProductOptions1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceProductOptions1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function EcommerceProductOptions1ToJSON(value?: EcommerceProductOptions1 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    value: value.value
  }
}
