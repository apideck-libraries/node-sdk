/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
 * A balance sheet assets account represents the financial position of a company at a specific point in time.
 * @export
 * @interface BalanceSheetAssetsAccount
 */
export interface BalanceSheetAssetsAccount {
  /**
   * The unique identifier for the account.
   * @type {string}
   * @memberof BalanceSheetAssetsAccount
   */
  readonly account_id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof BalanceSheetAssetsAccount
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof BalanceSheetAssetsAccount
   */
  readonly name?: string
  /**
   * The amount or value of the item
   * @type {number}
   * @memberof BalanceSheetAssetsAccount
   */
  readonly value?: number
  /**
   *
   * @type {BalanceSheetAccounts}
   * @memberof BalanceSheetAssetsAccount
   */
  items?: BalanceSheetAccounts | null
}

export function BalanceSheetAssetsAccountFromJSON(json: any): BalanceSheetAssetsAccount {
  return BalanceSheetAssetsAccountFromJSONTyped(json, false)
}

export function BalanceSheetAssetsAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAssetsAccount {
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

export function BalanceSheetAssetsAccountToJSON(value?: BalanceSheetAssetsAccount | null): any {
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
