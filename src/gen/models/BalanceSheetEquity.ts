/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BalanceSheetEquityItems,
  BalanceSheetEquityItemsFromJSON,
  BalanceSheetEquityItemsToJSON
} from './BalanceSheetEquityItems'

/**
 *
 * @export
 * @interface BalanceSheetEquity
 */
export interface BalanceSheetEquity {
  /**
   * Total equity
   * @type {number}
   * @memberof BalanceSheetEquity
   */
  total: number
  /**
   *
   * @type {Array<BalanceSheetEquityItems>}
   * @memberof BalanceSheetEquity
   */
  items: Array<BalanceSheetEquityItems>
}

export function BalanceSheetEquityFromJSON(json: any): BalanceSheetEquity {
  return BalanceSheetEquityFromJSONTyped(json, false)
}

export function BalanceSheetEquityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetEquity {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    items: (json['items'] as Array<any>).map(BalanceSheetEquityItemsFromJSON)
  }
}

export function BalanceSheetEquityToJSON(value?: BalanceSheetEquity | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    items: (value.items as Array<any>).map(BalanceSheetEquityItemsToJSON)
  }
}
