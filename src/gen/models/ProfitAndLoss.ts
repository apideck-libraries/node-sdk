/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CostOfGoodsSold, CostOfGoodsSoldFromJSON, CostOfGoodsSoldToJSON } from './CostOfGoodsSold'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { Expenses, ExpensesFromJSON, ExpensesToJSON } from './Expenses'
import { Income, IncomeFromJSON, IncomeToJSON } from './Income'
import { OtherExpenses, OtherExpensesFromJSON, OtherExpensesToJSON } from './OtherExpenses'
import { OtherIncome, OtherIncomeFromJSON, OtherIncomeToJSON } from './OtherIncome'
import {
  ProfitAndLossIndicator,
  ProfitAndLossIndicatorFromJSON,
  ProfitAndLossIndicatorToJSON
} from './ProfitAndLossIndicator'
import {
  UncategorizedAccounts,
  UncategorizedAccountsFromJSON,
  UncategorizedAccountsToJSON
} from './UncategorizedAccounts'

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
   * @type {Currency}
   * @memberof ProfitAndLoss
   */
  currency: Currency | null
  /**
   *
   * @type {Income}
   * @memberof ProfitAndLoss
   */
  income: Income
  /**
   *
   * @type {Expenses}
   * @memberof ProfitAndLoss
   */
  expenses: Expenses
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
   * The end date of the report
   * @type {string}
   * @memberof ProfitAndLoss
   */
  end_date?: string
  /**
   *
   * @type {CostOfGoodsSold}
   * @memberof ProfitAndLoss
   */
  cost_of_goods_sold?: CostOfGoodsSold
  /**
   *
   * @type {OtherIncome}
   * @memberof ProfitAndLoss
   */
  other_income?: OtherIncome
  /**
   *
   * @type {OtherExpenses}
   * @memberof ProfitAndLoss
   */
  other_expenses?: OtherExpenses
  /**
   *
   * @type {UncategorizedAccounts}
   * @memberof ProfitAndLoss
   */
  uncategorized_accounts?: UncategorizedAccounts
  /**
   *
   * @type {ProfitAndLossIndicator}
   * @memberof ProfitAndLoss
   */
  gross_profit?: ProfitAndLossIndicator
  /**
   *
   * @type {ProfitAndLossIndicator}
   * @memberof ProfitAndLoss
   */
  net_operating_income?: ProfitAndLossIndicator
  /**
   *
   * @type {ProfitAndLossIndicator}
   * @memberof ProfitAndLoss
   */
  net_income?: ProfitAndLossIndicator
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof ProfitAndLoss
   */
  readonly custom_mappings?: object | null
  /**
   * The customer id
   * @type {string}
   * @memberof ProfitAndLoss
   */
  customer?: string
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
    currency: CurrencyFromJSON(json['currency']),
    income: IncomeFromJSON(json['income']),
    expenses: ExpensesFromJSON(json['expenses']),
    id: !exists(json, 'id') ? undefined : json['id'],
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    cost_of_goods_sold: !exists(json, 'cost_of_goods_sold')
      ? undefined
      : CostOfGoodsSoldFromJSON(json['cost_of_goods_sold']),
    other_income: !exists(json, 'other_income')
      ? undefined
      : OtherIncomeFromJSON(json['other_income']),
    other_expenses: !exists(json, 'other_expenses')
      ? undefined
      : OtherExpensesFromJSON(json['other_expenses']),
    uncategorized_accounts: !exists(json, 'uncategorized_accounts')
      ? undefined
      : UncategorizedAccountsFromJSON(json['uncategorized_accounts']),
    gross_profit: !exists(json, 'gross_profit')
      ? undefined
      : ProfitAndLossIndicatorFromJSON(json['gross_profit']),
    net_operating_income: !exists(json, 'net_operating_income')
      ? undefined
      : ProfitAndLossIndicatorFromJSON(json['net_operating_income']),
    net_income: !exists(json, 'net_income')
      ? undefined
      : ProfitAndLossIndicatorFromJSON(json['net_income']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    customer: !exists(json, 'customer') ? undefined : json['customer']
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
    currency: CurrencyToJSON(value.currency),
    income: IncomeToJSON(value.income),
    expenses: ExpensesToJSON(value.expenses),
    start_date: value.start_date,
    end_date: value.end_date,
    cost_of_goods_sold: CostOfGoodsSoldToJSON(value.cost_of_goods_sold),
    other_income: OtherIncomeToJSON(value.other_income),
    other_expenses: OtherExpensesToJSON(value.other_expenses),
    uncategorized_accounts: UncategorizedAccountsToJSON(value.uncategorized_accounts),
    gross_profit: ProfitAndLossIndicatorToJSON(value.gross_profit),
    net_operating_income: ProfitAndLossIndicatorToJSON(value.net_operating_income),
    net_income: ProfitAndLossIndicatorToJSON(value.net_income),
    customer: value.customer
  }
}
