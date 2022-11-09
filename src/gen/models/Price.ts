/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.81.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 * Price of the message.
 * @export
 * @interface Price
 */
export interface Price {
  /**
   *
   * @type {string}
   * @memberof Price
   */
  readonly per_unit?: string
  /**
   *
   * @type {string}
   * @memberof Price
   */
  readonly total_amount?: string
  /**
   *
   * @type {Currency}
   * @memberof Price
   */
  currency?: Currency | null
}

export function PriceFromJSON(json: any): Price {
  return PriceFromJSONTyped(json, false)
}

export function PriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Price {
  if (json === undefined || json === null) {
    return json
  }
  return {
    per_unit: !exists(json, 'per_unit') ? undefined : json['per_unit'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency'])
  }
}

export function PriceToJSON(value?: Price | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    currency: CurrencyToJSON(value.currency)
  }
}
