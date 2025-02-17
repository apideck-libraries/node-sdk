/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ProfitAndLossExpenses,
  ProfitAndLossExpensesFromJSON,
  ProfitAndLossExpensesToJSON
} from './ProfitAndLossExpenses'
import {
  ProfitAndLossGrossProfit,
  ProfitAndLossGrossProfitFromJSON,
  ProfitAndLossGrossProfitToJSON
} from './ProfitAndLossGrossProfit'
import {
  ProfitAndLossIncome,
  ProfitAndLossIncomeFromJSON,
  ProfitAndLossIncomeToJSON
} from './ProfitAndLossIncome'
import {
  ProfitAndLossNetIncome,
  ProfitAndLossNetIncomeFromJSON,
  ProfitAndLossNetIncomeToJSON
} from './ProfitAndLossNetIncome'
import {
  ProfitAndLossNetOperatingIncome,
  ProfitAndLossNetOperatingIncomeFromJSON,
  ProfitAndLossNetOperatingIncomeToJSON
} from './ProfitAndLossNetOperatingIncome'

/**
 *
 * @export
 * @interface ProfitAndLoss
 */
export interface ProfitAndLoss {
  /**
   * The name of the report
   * @type {string}
   * @memberof ProfitAndLoss
   */
  report_name: string
  /**
   *
   * @type {string}
   * @memberof ProfitAndLoss
   */
  currency: string
  /**
   *
   * @type {ProfitAndLossIncome}
   * @memberof ProfitAndLoss
   */
  income: ProfitAndLossIncome
  /**
   *
   * @type {ProfitAndLossExpenses}
   * @memberof ProfitAndLoss
   */
  expenses: ProfitAndLossExpenses
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof ProfitAndLoss
   */
  readonly id?: string
  /**
   * The start date of the report
   * @type {string}
   * @memberof ProfitAndLoss
   */
  start_date?: string
  /**
   * The start date of the report
   * @type {string}
   * @memberof ProfitAndLoss
   */
  end_date?: string
  /**
   * Customer id
   * @type {string}
   * @memberof ProfitAndLoss
   */
  customer_id?: string
  /**
   *
   * @type {ProfitAndLossNetIncome}
   * @memberof ProfitAndLoss
   */
  net_income?: ProfitAndLossNetIncome | null
  /**
   *
   * @type {ProfitAndLossNetOperatingIncome}
   * @memberof ProfitAndLoss
   */
  net_operating_income?: ProfitAndLossNetOperatingIncome | null
  /**
   *
   * @type {ProfitAndLossGrossProfit}
   * @memberof ProfitAndLoss
   */
  gross_profit?: ProfitAndLossGrossProfit | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof ProfitAndLoss
   */
  readonly custom_mappings?: object | null
}

export function ProfitAndLossFromJSON(json: any): ProfitAndLoss {
  return ProfitAndLossFromJSONTyped(json, false)
}

export function ProfitAndLossFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfitAndLoss {
  if (json === undefined || json === null) {
    return json
  }
  return {
    report_name: json['report_name'],
    currency: json['currency'],
    income: ProfitAndLossIncomeFromJSON(json['income']),
    expenses: ProfitAndLossExpensesFromJSON(json['expenses']),
    id: !exists(json, 'id') ? undefined : json['id'],
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    net_income: !exists(json, 'net_income')
      ? undefined
      : ProfitAndLossNetIncomeFromJSON(json['net_income']),
    net_operating_income: !exists(json, 'net_operating_income')
      ? undefined
      : ProfitAndLossNetOperatingIncomeFromJSON(json['net_operating_income']),
    gross_profit: !exists(json, 'gross_profit')
      ? undefined
      : ProfitAndLossGrossProfitFromJSON(json['gross_profit']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings']
  }
}

export function ProfitAndLossToJSON(value?: ProfitAndLoss | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    report_name: value.report_name,
    currency: value.currency,
    income: ProfitAndLossIncomeToJSON(value.income),
    expenses: ProfitAndLossExpensesToJSON(value.expenses),
    start_date: value.start_date,
    end_date: value.end_date,
    customer_id: value.customer_id,
    net_income: ProfitAndLossNetIncomeToJSON(value.net_income),
    net_operating_income: ProfitAndLossNetOperatingIncomeToJSON(value.net_operating_income),
    gross_profit: ProfitAndLossGrossProfitToJSON(value.gross_profit)
  }
}
