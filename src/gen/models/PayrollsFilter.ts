/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.47.0
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
 * @interface PayrollsFilter
 */
export interface PayrollsFilter {
  /**
   * Return payrolls whose pay period is after the start date
   * @type {string}
   * @memberof PayrollsFilter
   */
  start_date?: string
  /**
   * Return payrolls whose pay period is before the end date
   * @type {string}
   * @memberof PayrollsFilter
   */
  end_date?: string
}

export function PayrollsFilterFromJSON(json: any): PayrollsFilter {
  return PayrollsFilterFromJSONTyped(json, false)
}

export function PayrollsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PayrollsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date']
  }
}

export function PayrollsFilterToJSON(value?: PayrollsFilter | null): any {
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
