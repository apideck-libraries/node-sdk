/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  OutstandingBalanceByCurrency,
  OutstandingBalanceByCurrencyFromJSON,
  OutstandingBalanceByCurrencyToJSON
} from './OutstandingBalanceByCurrency'

/**
 *
 * @export
 * @interface OutstandingBalanceByCustomer
 */
export interface OutstandingBalanceByCustomer {
  /**
   * Unique identifier for the customer.
   * @type {string}
   * @memberof OutstandingBalanceByCustomer
   */
  customer_id?: string
  /**
   * Full name of the customer.
   * @type {string}
   * @memberof OutstandingBalanceByCustomer
   */
  customer_name?: string
  /**
   *
   * @type {Array<OutstandingBalanceByCurrency>}
   * @memberof OutstandingBalanceByCustomer
   */
  outstanding_balances_by_currency?: Array<OutstandingBalanceByCurrency>
}

export function OutstandingBalanceByCustomerFromJSON(json: any): OutstandingBalanceByCustomer {
  return OutstandingBalanceByCustomerFromJSONTyped(json, false)
}

export function OutstandingBalanceByCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OutstandingBalanceByCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    customer_name: !exists(json, 'customer_name') ? undefined : json['customer_name'],
    outstanding_balances_by_currency: !exists(json, 'outstanding_balances_by_currency')
      ? undefined
      : (json['outstanding_balances_by_currency'] as Array<any>).map(
          OutstandingBalanceByCurrencyFromJSON
        )
  }
}

export function OutstandingBalanceByCustomerToJSON(
  value?: OutstandingBalanceByCustomer | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    customer_id: value.customer_id,
    customer_name: value.customer_name,
    outstanding_balances_by_currency:
      value.outstanding_balances_by_currency === undefined
        ? undefined
        : (value.outstanding_balances_by_currency as Array<any>).map(
            OutstandingBalanceByCurrencyToJSON
          )
  }
}