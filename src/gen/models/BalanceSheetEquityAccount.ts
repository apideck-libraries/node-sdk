/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  BalanceSheetAccounts,
  BalanceSheetAccountsFromJSON,
  BalanceSheetAccountsToJSON
} from './BalanceSheetAccounts'

/**
 * A balance sheet equity account represents the financial position of a company at a specific point in time.
 * @export
 * @interface BalanceSheetEquityAccount
 */
export interface BalanceSheetEquityAccount {
  /**
   * The unique identifier for the account.
   * @type {string}
   * @memberof BalanceSheetEquityAccount
   */
  readonly account_id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof BalanceSheetEquityAccount
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof BalanceSheetEquityAccount
   */
  readonly name?: string
  /**
   * The amount or value of the item
   * @type {number}
   * @memberof BalanceSheetEquityAccount
   */
  readonly value?: number
  /**
   *
   * @type {BalanceSheetAccounts}
   * @memberof BalanceSheetEquityAccount
   */
  items?: BalanceSheetAccounts | null
}

export function BalanceSheetEquityAccountFromJSON(json: any): BalanceSheetEquityAccount {
  return BalanceSheetEquityAccountFromJSONTyped(json, false)
}

export function BalanceSheetEquityAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetEquityAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    account_id: !exists(json, 'account_id') ? undefined : json['account_id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value'],
    items: !exists(json, 'items') ? undefined : BalanceSheetAccountsFromJSON(json['items'])
  }
}

export function BalanceSheetEquityAccountToJSON(value?: BalanceSheetEquityAccount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    items: BalanceSheetAccountsToJSON(value.items)
  }
}
