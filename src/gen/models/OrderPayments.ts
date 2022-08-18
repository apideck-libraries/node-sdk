/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
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
 * @interface OrderPayments
 */
export interface OrderPayments {
  /**
   *
   * @type {string}
   * @memberof OrderPayments
   */
  readonly id?: string
  /**
   *
   * @type {number}
   * @memberof OrderPayments
   */
  amount?: number
  /**
   *
   * @type {Currency}
   * @memberof OrderPayments
   */
  currency?: Currency | null
}

export function OrderPaymentsFromJSON(json: any): OrderPayments {
  return OrderPaymentsFromJSONTyped(json, false)
}

export function OrderPaymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderPayments {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency'])
  }
}

export function OrderPaymentsToJSON(value?: OrderPayments | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    amount: value.amount,
    currency: CurrencyToJSON(value.currency)
  }
}
