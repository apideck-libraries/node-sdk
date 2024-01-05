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

import { exists } from '../runtime'
import { Compensation, CompensationFromJSON, CompensationToJSON } from './Compensation'
import { PayrollTotals } from './PayrollTotals'

/**
 *
 * @export
 * @interface Payroll
 */
export interface Payroll {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Payroll
   */
  readonly id: string | null
  /**
   * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
   * @type {boolean}
   * @memberof Payroll
   */
  processed: boolean | null
  /**
   * The date on which employees will be paid for the payroll.
   * @type {string}
   * @memberof Payroll
   */
  check_date: string | null
  /**
   * The start date, inclusive, of the pay period.
   * @type {string}
   * @memberof Payroll
   */
  start_date: string | null
  /**
   * The end date, inclusive, of the pay period.
   * @type {string}
   * @memberof Payroll
   */
  end_date: string | null
  /**
   * The unique identifier of the company.
   * @type {string}
   * @memberof Payroll
   */
  company_id?: string | null
  /**
   * The date the payroll was processed.
   * @type {string}
   * @memberof Payroll
   */
  processed_date?: string | null
  /**
   *
   * @type {PayrollTotals}
   * @memberof Payroll
   */
  totals?: PayrollTotals
  /**
   * An array of compensations for the payroll.
   * @type {Array<Compensation>}
   * @memberof Payroll
   */
  compensations?: Array<Compensation>
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Payroll
   */
  readonly custom_mappings?: object | null
}

export function PayrollFromJSON(json: any): Payroll {
  return PayrollFromJSONTyped(json, false)
}

export function PayrollFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payroll {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    processed: json['processed'],
    check_date: json['check_date'],
    start_date: json['start_date'],
    end_date: json['end_date'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    processed_date: !exists(json, 'processed_date') ? undefined : json['processed_date'],
    totals: !exists(json, 'totals') ? undefined : json['totals'],
    compensations: !exists(json, 'compensations')
      ? undefined
      : (json['compensations'] as Array<any>).map(CompensationFromJSON),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings']
  }
}

export function PayrollToJSON(value?: Payroll | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    processed: value.processed,
    check_date: value.check_date,
    start_date: value.start_date,
    end_date: value.end_date,
    company_id: value.company_id,
    processed_date: value.processed_date,
    totals: value.totals,
    compensations:
      value.compensations === undefined
        ? undefined
        : (value.compensations as Array<any>).map(CompensationToJSON)
  }
}
