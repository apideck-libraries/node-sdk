/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BalanceSheetAccount } from './BalanceSheetAccount'
import { BalanceSheetAccountRecord } from './BalanceSheetAccountRecord'

/**
 * A list of balance sheet accounts
 * @export
 * @interface BalanceSheetAccounts
 */
export interface BalanceSheetAccounts
  extends Array<BalanceSheetAccount | BalanceSheetAccountRecord> {}

export function BalanceSheetAccountsFromJSON(json: any): BalanceSheetAccounts {
  return BalanceSheetAccountsFromJSONTyped(json, false)
}

export function BalanceSheetAccountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAccounts {
  return json
}

export function BalanceSheetAccountsToJSON(value?: BalanceSheetAccounts | null): any {
  return value
}
