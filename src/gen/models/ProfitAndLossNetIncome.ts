/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
 *
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
 * @interface ProfitAndLossNetIncome
 */
export interface ProfitAndLossNetIncome {
  /**
   * Total net income
   * @type {number}
   * @memberof ProfitAndLossNetIncome
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof ProfitAndLossNetIncome
   */
  records: ProfitAndLossRecords | null
}

export function ProfitAndLossNetIncomeFromJSON(json: any): ProfitAndLossNetIncome {
  return ProfitAndLossNetIncomeFromJSONTyped(json, false)
}

export function ProfitAndLossNetIncomeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossNetIncome {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records'])
  }
}

export function ProfitAndLossNetIncomeToJSON(value?: ProfitAndLossNetIncome | null): any {
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
