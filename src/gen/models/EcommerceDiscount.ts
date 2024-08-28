/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * An object representing a discount applied to an ecommerce order or product.
 * @export
 * @interface EcommerceDiscount
 */
export interface EcommerceDiscount {
  /**
   * The code used to apply the discount.
   * @type {string}
   * @memberof EcommerceDiscount
   */
  code?: string | null
  /**
   * The fixed amount of the discount.
   * @type {string}
   * @memberof EcommerceDiscount
   */
  amount?: string | null
  /**
   * The percentage of the discount.
   * @type {string}
   * @memberof EcommerceDiscount
   */
  percentage?: string | null
}

export function EcommerceDiscountFromJSON(json: any): EcommerceDiscount {
  return EcommerceDiscountFromJSONTyped(json, false)
}

export function EcommerceDiscountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceDiscount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    code: !exists(json, 'code') ? undefined : json['code'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    percentage: !exists(json, 'percentage') ? undefined : json['percentage']
  }
}

export function EcommerceDiscountToJSON(value?: EcommerceDiscount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    code: value.code,
    amount: value.amount,
    percentage: value.percentage
  }
}
