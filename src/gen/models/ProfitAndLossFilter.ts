/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.57.0
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
 * @interface ProfitAndLossFilter
 */
export interface ProfitAndLossFilter {
  /**
   * Filter by customer id
   * @type {string}
   * @memberof ProfitAndLossFilter
   */
  customer_id?: string
  /**
   * Filter by start date. If start date is given, end date is required.
   * @type {string}
   * @memberof ProfitAndLossFilter
   */
  start_date?: string
  /**
   * Filter by end date. If end date is given, start date is required.
   * @type {string}
   * @memberof ProfitAndLossFilter
   */
  end_date?: string
}

export function ProfitAndLossFilterFromJSON(json: any): ProfitAndLossFilter {
  return ProfitAndLossFilterFromJSONTyped(json, false)
}

export function ProfitAndLossFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date']
  }
}

export function ProfitAndLossFilterToJSON(value?: ProfitAndLossFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    customer_id: value.customer_id,
    start_date: value.start_date,
    end_date: value.end_date
  }
}
