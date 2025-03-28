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
 * The overview of the payroll totals.
 * @export
 * @interface PayrollTotals
 */
export interface PayrollTotals {
  /**
   * The total company debit for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  company_debit?: number | null
  /**
   * The total tax debit for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  tax_debit?: number | null
  /**
   * The total check amount for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  check_amount?: number | null
  /**
   * The net pay amount for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  net_pay?: number | null
  /**
   * The gross pay amount for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  gross_pay?: number | null
  /**
   * The total amount of employer paid taxes for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  employer_taxes?: number | null
  /**
   * The total amount of employee paid taxes for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  employee_taxes?: number | null
  /**
   * The total amount of company contributed benefits for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  employer_benefit_contributions?: number | null
  /**
   * The total amount of employee deducted benefits for the payroll.
   * @type {number}
   * @memberof PayrollTotals
   */
  employee_benefit_deductions?: number | null
}

export function PayrollTotalsFromJSON(json: any): PayrollTotals {
  return PayrollTotalsFromJSONTyped(json, false)
}

export function PayrollTotalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollTotals {
  if (json === undefined || json === null) {
    return json
  }
  return {
    company_debit: !exists(json, 'company_debit') ? undefined : json['company_debit'],
    tax_debit: !exists(json, 'tax_debit') ? undefined : json['tax_debit'],
    check_amount: !exists(json, 'check_amount') ? undefined : json['check_amount'],
    net_pay: !exists(json, 'net_pay') ? undefined : json['net_pay'],
    gross_pay: !exists(json, 'gross_pay') ? undefined : json['gross_pay'],
    employer_taxes: !exists(json, 'employer_taxes') ? undefined : json['employer_taxes'],
    employee_taxes: !exists(json, 'employee_taxes') ? undefined : json['employee_taxes'],
    employer_benefit_contributions: !exists(json, 'employer_benefit_contributions')
      ? undefined
      : json['employer_benefit_contributions'],
    employee_benefit_deductions: !exists(json, 'employee_benefit_deductions')
      ? undefined
      : json['employee_benefit_deductions']
  }
}

export function PayrollTotalsToJSON(value?: PayrollTotals | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_debit: value.company_debit,
    tax_debit: value.tax_debit,
    check_amount: value.check_amount,
    net_pay: value.net_pay,
    gross_pay: value.gross_pay,
    employer_taxes: value.employer_taxes,
    employee_taxes: value.employee_taxes,
    employer_benefit_contributions: value.employer_benefit_contributions,
    employee_benefit_deductions: value.employee_benefit_deductions
  }
}
