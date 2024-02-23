/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BalanceSheetAssetsCurrentAssetsAccounts,
  BalanceSheetAssetsCurrentAssetsAccountsFromJSON,
  BalanceSheetAssetsCurrentAssetsAccountsToJSON
} from './BalanceSheetAssetsCurrentAssetsAccounts'

/**
 *
 * @export
 * @interface BalanceSheetAssetsCurrentAssets
 */
export interface BalanceSheetAssetsCurrentAssets {
  /**
   * Total current assets
   * @type {number}
   * @memberof BalanceSheetAssetsCurrentAssets
   */
  total: number
  /**
   *
   * @type {Array<BalanceSheetAssetsCurrentAssetsAccounts>}
   * @memberof BalanceSheetAssetsCurrentAssets
   */
  accounts: Array<BalanceSheetAssetsCurrentAssetsAccounts>
}

export function BalanceSheetAssetsCurrentAssetsFromJSON(
  json: any
): BalanceSheetAssetsCurrentAssets {
  return BalanceSheetAssetsCurrentAssetsFromJSONTyped(json, false)
}

export function BalanceSheetAssetsCurrentAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAssetsCurrentAssets {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    accounts: (json['accounts'] as Array<any>).map(BalanceSheetAssetsCurrentAssetsAccountsFromJSON)
  }
}

export function BalanceSheetAssetsCurrentAssetsToJSON(
  value?: BalanceSheetAssetsCurrentAssets | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    accounts: (value.accounts as Array<any>).map(BalanceSheetAssetsCurrentAssetsAccountsToJSON)
  }
}
