/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.1
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
 * @interface ProfitAndLossIncome
 */
export interface ProfitAndLossIncome {
  /**
   * Total income
   * @type {number}
   * @memberof ProfitAndLossIncome
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof ProfitAndLossIncome
   */
  records: ProfitAndLossRecords | null
}

export function ProfitAndLossIncomeFromJSON(json: any): ProfitAndLossIncome {
  return ProfitAndLossIncomeFromJSONTyped(json, false)
}

export function ProfitAndLossIncomeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossIncome {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records'])
  }
}

export function ProfitAndLossIncomeToJSON(value?: ProfitAndLossIncome | null): any {
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
