/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
 * A balance sheet uncategorized items account represents the financial position of a company at a specific point in time.
 * @export
 * @interface BalanceSheetUncategorizedItemsAccount
 */
export interface BalanceSheetUncategorizedItemsAccount {
  /**
   * The unique identifier for the account.
   * @type {string}
   * @memberof BalanceSheetUncategorizedItemsAccount
   */
  readonly account_id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof BalanceSheetUncategorizedItemsAccount
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof BalanceSheetUncategorizedItemsAccount
   */
  readonly name?: string
  /**
   * The amount or value of the item
   * @type {number}
   * @memberof BalanceSheetUncategorizedItemsAccount
   */
  readonly value?: number
  /**
   *
   * @type {BalanceSheetAccounts}
   * @memberof BalanceSheetUncategorizedItemsAccount
   */
  items?: BalanceSheetAccounts | null
}

export function BalanceSheetUncategorizedItemsAccountFromJSON(
  json: any
): BalanceSheetUncategorizedItemsAccount {
  return BalanceSheetUncategorizedItemsAccountFromJSONTyped(json, false)
}

export function BalanceSheetUncategorizedItemsAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetUncategorizedItemsAccount {
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

export function BalanceSheetUncategorizedItemsAccountToJSON(
  value?: BalanceSheetUncategorizedItemsAccount | null
): any {
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
