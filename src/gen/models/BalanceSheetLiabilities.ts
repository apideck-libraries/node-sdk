/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.71.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BalanceSheetLiabilitiesAccounts,
  BalanceSheetLiabilitiesAccountsFromJSON,
  BalanceSheetLiabilitiesAccountsToJSON
} from './BalanceSheetLiabilitiesAccounts'

/**
 *
 * @export
 * @interface BalanceSheetLiabilities
 */
export interface BalanceSheetLiabilities {
  /**
   * Total liabilities
   * @type {number}
   * @memberof BalanceSheetLiabilities
   */
  total: number
  /**
   *
   * @type {Array<BalanceSheetLiabilitiesAccounts>}
   * @memberof BalanceSheetLiabilities
   */
  accounts: Array<BalanceSheetLiabilitiesAccounts>
}

export function BalanceSheetLiabilitiesFromJSON(json: any): BalanceSheetLiabilities {
  return BalanceSheetLiabilitiesFromJSONTyped(json, false)
}

export function BalanceSheetLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetLiabilities {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    accounts: (json['accounts'] as Array<any>).map(BalanceSheetLiabilitiesAccountsFromJSON)
  }
}

export function BalanceSheetLiabilitiesToJSON(value?: BalanceSheetLiabilities | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    accounts: (value.accounts as Array<any>).map(BalanceSheetLiabilitiesAccountsToJSON)
  }
}
