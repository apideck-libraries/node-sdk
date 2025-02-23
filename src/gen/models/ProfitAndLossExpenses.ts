/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  ProfitAndLossRecords,
  ProfitAndLossRecordsFromJSON,
  ProfitAndLossRecordsToJSON
} from './ProfitAndLossRecords'

/**
 *
 * @export
 * @interface ProfitAndLossExpenses
 */
export interface ProfitAndLossExpenses {
  /**
   * Total expense
   * @type {number}
   * @memberof ProfitAndLossExpenses
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof ProfitAndLossExpenses
   */
  records: ProfitAndLossRecords | null
}

export function ProfitAndLossExpensesFromJSON(json: any): ProfitAndLossExpenses {
  return ProfitAndLossExpensesFromJSONTyped(json, false)
}

export function ProfitAndLossExpensesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossExpenses {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records'])
  }
}

export function ProfitAndLossExpensesToJSON(value?: ProfitAndLossExpenses | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    records: ProfitAndLossRecordsToJSON(value.records)
  }
}
