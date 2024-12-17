/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  OutstandingBalance,
  OutstandingBalanceFromJSON,
  OutstandingBalanceToJSON
} from './OutstandingBalance'

/**
 *
 * @export
 * @interface AgedCreditors
 */
export interface AgedCreditors {
  /**
   * The exact date and time the report was generated.
   * @type {Date}
   * @memberof AgedCreditors
   */
  report_generated_at?: Date
  /**
   * The cutoff date for transactions included in the report.
   * @type {Date}
   * @memberof AgedCreditors
   */
  report_as_of_date?: Date
  /**
   * Number of aging periods shown in the report.
   * @type {number}
   * @memberof AgedCreditors
   */
  period_count?: number
  /**
   * Length of each aging period in days.
   * @type {number}
   * @memberof AgedCreditors
   */
  period_length?: number
  /**
   *
   * @type {Array<OutstandingBalance>}
   * @memberof AgedCreditors
   */
  outstanding_balances?: Array<OutstandingBalance>
}

export function AgedCreditorsFromJSON(json: any): AgedCreditors {
  return AgedCreditorsFromJSONTyped(json, false)
}

export function AgedCreditorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgedCreditors {
  if (json === undefined || json === null) {
    return json
  }
  return {
    report_generated_at: !exists(json, 'report_generated_at')
      ? undefined
      : new Date(json['report_generated_at']),
    report_as_of_date: !exists(json, 'report_as_of_date')
      ? undefined
      : new Date(json['report_as_of_date']),
    period_count: !exists(json, 'period_count') ? undefined : json['period_count'],
    period_length: !exists(json, 'period_length') ? undefined : json['period_length'],
    outstanding_balances: !exists(json, 'outstanding_balances')
      ? undefined
      : (json['outstanding_balances'] as Array<any>).map(OutstandingBalanceFromJSON)
  }
}

export function AgedCreditorsToJSON(value?: AgedCreditors | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    report_generated_at:
      value.report_generated_at === undefined
        ? undefined
        : new Date(value.report_generated_at).toISOString(),
    report_as_of_date:
      value.report_as_of_date === undefined
        ? undefined
        : new Date(value.report_as_of_date).toISOString().substr(0, 10),
    period_count: value.period_count,
    period_length: value.period_length,
    outstanding_balances:
      value.outstanding_balances === undefined
        ? undefined
        : (value.outstanding_balances as Array<any>).map(OutstandingBalanceToJSON)
  }
}
