/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.59.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LedgerAccount } from './LedgerAccount'

/**
 *
 * @export
 * @interface LedgerAccounts
 */
export interface LedgerAccounts extends Array<LedgerAccount> {}

export function LedgerAccountsFromJSON(json: any): LedgerAccounts {
  return LedgerAccountsFromJSONTyped(json, false)
}

export function LedgerAccountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LedgerAccounts {
  return json
}

export function LedgerAccountsToJSON(value?: LedgerAccounts | null): any {
  return value
}
