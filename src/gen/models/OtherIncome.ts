/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ProfitAndLossRecords,
  ProfitAndLossRecordsFromJSON,
  ProfitAndLossRecordsToJSON
} from './ProfitAndLossRecords'
import {
  ProfitAndLossType,
  ProfitAndLossTypeFromJSON,
  ProfitAndLossTypeToJSON
} from './ProfitAndLossType'

/**
 * The other income accounts
 * @export
 * @interface OtherIncome
 */
export interface OtherIncome {
  /**
   * The aggregated total of all accounts within this category.
   * @type {number}
   * @memberof OtherIncome
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof OtherIncome
   */
  records: ProfitAndLossRecords | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OtherIncome
   */
  readonly id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof OtherIncome
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof OtherIncome
   */
  readonly title?: string
  /**
   *
   * @type {ProfitAndLossType}
   * @memberof OtherIncome
   */
  type?: ProfitAndLossType | null
}

export function OtherIncomeFromJSON(json: any): OtherIncome {
  return OtherIncomeFromJSONTyped(json, false)
}

export function OtherIncomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtherIncome {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records']),
    id: !exists(json, 'id') ? undefined : json['id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    title: !exists(json, 'title') ? undefined : json['title'],
    type: !exists(json, 'type') ? undefined : ProfitAndLossTypeFromJSON(json['type'])
  }
}

export function OtherIncomeToJSON(value?: OtherIncome | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    records: ProfitAndLossRecordsToJSON(value.records),
    type: ProfitAndLossTypeToJSON(value.type)
  }
}
