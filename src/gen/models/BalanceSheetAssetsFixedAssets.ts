/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.82.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BalanceSheetAssetsFixedAssetsAccounts,
  BalanceSheetAssetsFixedAssetsAccountsFromJSON,
  BalanceSheetAssetsFixedAssetsAccountsToJSON
} from './BalanceSheetAssetsFixedAssetsAccounts'

/**
 *
 * @export
 * @interface BalanceSheetAssetsFixedAssets
 */
export interface BalanceSheetAssetsFixedAssets {
  /**
   * Total fixed assets
   * @type {number}
   * @memberof BalanceSheetAssetsFixedAssets
   */
  total: number
  /**
   *
   * @type {Array<BalanceSheetAssetsFixedAssetsAccounts>}
   * @memberof BalanceSheetAssetsFixedAssets
   */
  accounts: Array<BalanceSheetAssetsFixedAssetsAccounts>
}

export function BalanceSheetAssetsFixedAssetsFromJSON(json: any): BalanceSheetAssetsFixedAssets {
  return BalanceSheetAssetsFixedAssetsFromJSONTyped(json, false)
}

export function BalanceSheetAssetsFixedAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAssetsFixedAssets {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    accounts: (json['accounts'] as Array<any>).map(BalanceSheetAssetsFixedAssetsAccountsFromJSON)
  }
}

export function BalanceSheetAssetsFixedAssetsToJSON(
  value?: BalanceSheetAssetsFixedAssets | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    accounts: (value.accounts as Array<any>).map(BalanceSheetAssetsFixedAssetsAccountsToJSON)
  }
}
