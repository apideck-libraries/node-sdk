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
/**
 *
 * @export
 * @interface BalanceSheetFilter
 */
export interface BalanceSheetFilter {
  /**
   * The start date of the period to include in the resource.
   * @type {string}
   * @memberof BalanceSheetFilter
   */
  start_date?: string
  /**
   * The end date of the period to include in the resource.
   * @type {string}
   * @memberof BalanceSheetFilter
   */
  end_date?: string
  /**
   * The number of periods to include in the resource.
   * @type {number}
   * @memberof BalanceSheetFilter
   */
  period_count?: number
  /**
   * The type of period to include in the resource: month, quarter, year.
   * @type {string}
   * @memberof BalanceSheetFilter
   */
  period_type?: BalanceSheetFilterPeriodType
}

/**
 * @export
 * @enum {string}
 */
export enum BalanceSheetFilterPeriodType {
  month = 'month',
  quarter = 'quarter',
  year = 'year'
}

export function BalanceSheetFilterFromJSON(json: any): BalanceSheetFilter {
  return BalanceSheetFilterFromJSONTyped(json, false)
}

export function BalanceSheetFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    period_count: !exists(json, 'period_count') ? undefined : json['period_count'],
    period_type: !exists(json, 'period_type') ? undefined : json['period_type']
  }
}

export function BalanceSheetFilterToJSON(value?: BalanceSheetFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    start_date: value.start_date,
    end_date: value.end_date,
    period_count: value.period_count,
    period_type: value.period_type
  }
}
