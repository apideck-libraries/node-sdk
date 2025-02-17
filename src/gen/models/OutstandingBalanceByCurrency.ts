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
import { BalanceByPeriod, BalanceByPeriodFromJSON, BalanceByPeriodToJSON } from './BalanceByPeriod'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface OutstandingBalanceByCurrency
 */
export interface OutstandingBalanceByCurrency {
  /**
   *
   * @type {Currency}
   * @memberof OutstandingBalanceByCurrency
   */
  currency?: Currency | null
  /**
   * Total amount of the outstanding balance.
   * @type {number}
   * @memberof OutstandingBalanceByCurrency
   */
  total_amount?: number
  /**
   *
   * @type {Array<BalanceByPeriod>}
   * @memberof OutstandingBalanceByCurrency
   */
  balances_by_period?: Array<BalanceByPeriod>
}

export function OutstandingBalanceByCurrencyFromJSON(json: any): OutstandingBalanceByCurrency {
  return OutstandingBalanceByCurrencyFromJSONTyped(json, false)
}

export function OutstandingBalanceByCurrencyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OutstandingBalanceByCurrency {
  if (json === undefined || json === null) {
    return json
  }
  return {
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    balances_by_period: !exists(json, 'balances_by_period')
      ? undefined
      : (json['balances_by_period'] as Array<any>).map(BalanceByPeriodFromJSON)
  }
}

export function OutstandingBalanceByCurrencyToJSON(
  value?: OutstandingBalanceByCurrency | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    currency: CurrencyToJSON(value.currency),
    total_amount: value.total_amount,
    balances_by_period:
      value.balances_by_period === undefined
        ? undefined
        : (value.balances_by_period as Array<any>).map(BalanceByPeriodToJSON)
  }
}
