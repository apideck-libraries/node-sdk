/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.1
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
 * @interface OrderMerchant
 */
export interface OrderMerchant {
  /**
   *
   * @type {string}
   * @memberof OrderMerchant
   */
  id?: string
}

export function OrderMerchantFromJSON(json: any): OrderMerchant {
  return OrderMerchantFromJSONTyped(json, false)
}

export function OrderMerchantFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderMerchant {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id']
  }
}

export function OrderMerchantToJSON(value?: OrderMerchant | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id
  }
}
