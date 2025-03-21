/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
 * The operating expenses accounts
 * @export
 * @interface Expenses
 */
export interface Expenses {
  /**
   * The aggregated total of all accounts within this category.
   * @type {number}
   * @memberof Expenses
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof Expenses
   */
  records: ProfitAndLossRecords | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Expenses
   */
  readonly id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof Expenses
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof Expenses
   */
  readonly title?: string
  /**
   *
   * @type {ProfitAndLossType}
   * @memberof Expenses
   */
  type?: ProfitAndLossType | null
}

export function ExpensesFromJSON(json: any): Expenses {
  return ExpensesFromJSONTyped(json, false)
}

export function ExpensesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Expenses {
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

export function ExpensesToJSON(value?: Expenses | null): any {
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
