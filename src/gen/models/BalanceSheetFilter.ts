/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
 *
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
   * Filter by start date. If start date is given, end date is required.
   * @type {string}
   * @memberof BalanceSheetFilter
   */
  start_date?: string
  /**
   * Filter by end date. If end date is given, start date is required.
   * @type {string}
   * @memberof BalanceSheetFilter
   */
  end_date?: string
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
    end_date: !exists(json, 'end_date') ? undefined : json['end_date']
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
    end_date: value.end_date
  }
}
