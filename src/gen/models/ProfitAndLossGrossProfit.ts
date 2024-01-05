/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.0
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
 * @interface ProfitAndLossGrossProfit
 */
export interface ProfitAndLossGrossProfit {
  /**
   * Total gross profit
   * @type {number}
   * @memberof ProfitAndLossGrossProfit
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof ProfitAndLossGrossProfit
   */
  records: ProfitAndLossRecords | null
}

export function ProfitAndLossGrossProfitFromJSON(json: any): ProfitAndLossGrossProfit {
  return ProfitAndLossGrossProfitFromJSONTyped(json, false)
}

export function ProfitAndLossGrossProfitFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossGrossProfit {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records'])
  }
}

export function ProfitAndLossGrossProfitToJSON(value?: ProfitAndLossGrossProfit | null): any {
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
