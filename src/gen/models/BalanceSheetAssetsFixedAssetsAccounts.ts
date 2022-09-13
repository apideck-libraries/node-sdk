/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.55.0
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
 * @interface BalanceSheetAssetsFixedAssetsAccounts
 */
export interface BalanceSheetAssetsFixedAssetsAccounts {
  /**
   *
   * @type {string}
   * @memberof BalanceSheetAssetsFixedAssetsAccounts
   */
  readonly id?: string
  /**
   * The name of the fixed asset account
   * @type {string}
   * @memberof BalanceSheetAssetsFixedAssetsAccounts
   */
  name?: string
  /**
   * The value of the fixed asset
   * @type {number}
   * @memberof BalanceSheetAssetsFixedAssetsAccounts
   */
  value?: number
}

export function BalanceSheetAssetsFixedAssetsAccountsFromJSON(
  json: any
): BalanceSheetAssetsFixedAssetsAccounts {
  return BalanceSheetAssetsFixedAssetsAccountsFromJSONTyped(json, false)
}

export function BalanceSheetAssetsFixedAssetsAccountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAssetsFixedAssetsAccounts {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function BalanceSheetAssetsFixedAssetsAccountsToJSON(
  value?: BalanceSheetAssetsFixedAssetsAccounts | null
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
