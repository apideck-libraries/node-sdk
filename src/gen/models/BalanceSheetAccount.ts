/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'

/**
 * A balance sheet account represents the financial position of a company at a specific point in time.
 * @export
 * @interface BalanceSheetAccount
 */
export interface BalanceSheetAccount {
  /**
   * The unique identifier for the account.
   * @type {string}
   * @memberof BalanceSheetAccount
   */
  readonly account_id?: string
  /**
   * The code of the account.
   * @type {string}
   * @memberof BalanceSheetAccount
   */
  code?: string
  /**
   * Name of the report item
   * @type {string}
   * @memberof BalanceSheetAccount
   */
  name?: string
  /**
   * The value of the account.
   * @type {number}
   * @memberof BalanceSheetAccount
   */
  value?: number
  /**
   *
   * @type {Array<BalanceSheetAccount | BalanceSheetAccountRecord>}
   * @memberof BalanceSheetAccount
   */
  items?: Array<BalanceSheetAccount | BalanceSheetAccountRecord> | null
}

export function BalanceSheetAccountFromJSON(json: any): BalanceSheetAccount {
  return BalanceSheetAccountFromJSONTyped(json, false)
}

export function BalanceSheetAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    account_id: !exists(json, 'account_id') ? undefined : json['account_id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value'],
    items: !exists(json, 'items')
      ? undefined
      : json['items'] === null
      ? null
      : (json['items'] as Array<any>).map(BalanceSheetAccount | BalanceSheetAccountRecordFromJSON)
  }
}

export function BalanceSheetAccountToJSON(value?: BalanceSheetAccount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    code: value.code,
    name: value.name,
    value: value.value,
    items:
      value.items === undefined
        ? undefined
        : value.items === null
        ? null
        : (value.items as Array<any>).map(BalanceSheetAccount | BalanceSheetAccountRecordToJSON)
  }
}
