/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  BalanceByTransaction,
  BalanceByTransactionFromJSON,
  BalanceByTransactionToJSON
} from './BalanceByTransaction'

/**
 *
 * @export
 * @interface BalanceByPeriod
 */
export interface BalanceByPeriod {
  /**
   * The starting date of the period. If not provided, it represents the oldest period, where all transactions due before the specified `end_date` are included.
   * @type {Date}
   * @memberof BalanceByPeriod
   */
  start_date?: Date | null
  /**
   * The ending date of the period. If not provided, it represents an open-ended period starting from the `start_date`, typically capturing future-dated transactions that are not yet aged.
   * @type {Date}
   * @memberof BalanceByPeriod
   */
  end_date?: Date | null
  /**
   * Total amount of the period.
   * @type {number}
   * @memberof BalanceByPeriod
   */
  total_amount?: number
  /**
   *
   * @type {Array<BalanceByTransaction>}
   * @memberof BalanceByPeriod
   */
  balances_by_transaction?: Array<BalanceByTransaction>
}

export function BalanceByPeriodFromJSON(json: any): BalanceByPeriod {
  return BalanceByPeriodFromJSONTyped(json, false)
}

export function BalanceByPeriodFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceByPeriod {
  if (json === undefined || json === null) {
    return json
  }
  return {
    start_date: !exists(json, 'start_date')
      ? undefined
      : json['start_date'] === null
      ? null
      : new Date(json['start_date']),
    end_date: !exists(json, 'end_date')
      ? undefined
      : json['end_date'] === null
      ? null
      : new Date(json['end_date']),
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    balances_by_transaction: !exists(json, 'balances_by_transaction')
      ? undefined
      : (json['balances_by_transaction'] as Array<any>).map(BalanceByTransactionFromJSON)
  }
}

export function BalanceByPeriodToJSON(value?: BalanceByPeriod | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    start_date:
      value.start_date === undefined
        ? undefined
        : value.start_date === null
        ? null
        : new Date(value.start_date).toISOString().substr(0, 10),
    end_date:
      value.end_date === undefined
        ? undefined
        : value.end_date === null
        ? null
        : new Date(value.end_date).toISOString().substr(0, 10),
    total_amount: value.total_amount,
    balances_by_transaction:
      value.balances_by_transaction === undefined
        ? undefined
        : (value.balances_by_transaction as Array<any>).map(BalanceByTransactionToJSON)
  }
}
