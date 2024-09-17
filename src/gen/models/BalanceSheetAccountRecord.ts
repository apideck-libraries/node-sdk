/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * A record of a balance sheet account.
 * @export
 * @interface BalanceSheetAccountRecord
 */
export interface BalanceSheetAccountRecord {
  /**
   * The unique identifier for the account.
   * @type {string}
   * @memberof BalanceSheetAccountRecord
   */
  readonly account_id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof BalanceSheetAccountRecord
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof BalanceSheetAccountRecord
   */
  readonly name?: string
  /**
   * The amount or value of the item
   * @type {number}
   * @memberof BalanceSheetAccountRecord
   */
  readonly value?: number
}

export function BalanceSheetAccountRecordFromJSON(json: any): BalanceSheetAccountRecord {
  return BalanceSheetAccountRecordFromJSONTyped(json, false)
}

export function BalanceSheetAccountRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAccountRecord {
  if (json === undefined || json === null) {
    return json
  }
  return {
    account_id: !exists(json, 'account_id') ? undefined : json['account_id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function BalanceSheetAccountRecordToJSON(value?: BalanceSheetAccountRecord | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
