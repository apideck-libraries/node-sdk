/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.1
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
 * @interface ProfitAndLossNetOperatingIncome
 */
export interface ProfitAndLossNetOperatingIncome {
  /**
   * Total net operating income
   * @type {number}
   * @memberof ProfitAndLossNetOperatingIncome
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof ProfitAndLossNetOperatingIncome
   */
  records: ProfitAndLossRecords | null
}

export function ProfitAndLossNetOperatingIncomeFromJSON(
  json: any
): ProfitAndLossNetOperatingIncome {
  return ProfitAndLossNetOperatingIncomeFromJSONTyped(json, false)
}

export function ProfitAndLossNetOperatingIncomeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossNetOperatingIncome {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records'])
  }
}

export function ProfitAndLossNetOperatingIncomeToJSON(
  value?: ProfitAndLossNetOperatingIncome | null
): any {
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
