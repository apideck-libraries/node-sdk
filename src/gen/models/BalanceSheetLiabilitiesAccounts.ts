/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.38.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface BalanceSheetLiabilitiesAccounts
 */
export interface BalanceSheetLiabilitiesAccounts {
  /**
   *
   * @type {string}
   * @memberof BalanceSheetLiabilitiesAccounts
   */
  readonly id?: string
  /**
   * The name of the liability account
   * @type {string}
   * @memberof BalanceSheetLiabilitiesAccounts
   */
  name?: string
  /**
   * The value of the liability
   * @type {number}
   * @memberof BalanceSheetLiabilitiesAccounts
   */
  value?: number
}

export function BalanceSheetLiabilitiesAccountsFromJSON(
  json: any
): BalanceSheetLiabilitiesAccounts {
  return BalanceSheetLiabilitiesAccountsFromJSONTyped(json, false)
}

export function BalanceSheetLiabilitiesAccountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetLiabilitiesAccounts {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function BalanceSheetLiabilitiesAccountsToJSON(
  value?: BalanceSheetLiabilitiesAccounts | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    value: value.value
  }
}
