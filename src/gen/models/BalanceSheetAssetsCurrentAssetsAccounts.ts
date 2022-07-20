/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.36.0
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
 * @interface BalanceSheetAssetsCurrentAssetsAccounts
 */
export interface BalanceSheetAssetsCurrentAssetsAccounts {
  /**
   *
   * @type {string}
   * @memberof BalanceSheetAssetsCurrentAssetsAccounts
   */
  readonly id?: string
  /**
   * The name of the current asset account
   * @type {string}
   * @memberof BalanceSheetAssetsCurrentAssetsAccounts
   */
  name?: string
  /**
   * The value of the current asset
   * @type {number}
   * @memberof BalanceSheetAssetsCurrentAssetsAccounts
   */
  value?: number
}

export function BalanceSheetAssetsCurrentAssetsAccountsFromJSON(
  json: any
): BalanceSheetAssetsCurrentAssetsAccounts {
  return BalanceSheetAssetsCurrentAssetsAccountsFromJSONTyped(json, false)
}

export function BalanceSheetAssetsCurrentAssetsAccountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAssetsCurrentAssetsAccounts {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function BalanceSheetAssetsCurrentAssetsAccountsToJSON(
  value?: BalanceSheetAssetsCurrentAssetsAccounts | null
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
