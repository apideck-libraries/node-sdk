/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.62.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { LedgerAccountCategories, LedgerAccountCategoriesFromJSON } from './LedgerAccountCategories'
import {
  LedgerAccountParentAccount,
  LedgerAccountParentAccountFromJSON,
  LedgerAccountParentAccountToJSON
} from './LedgerAccountParentAccount'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'

/**
 *
 * @export
 * @interface LedgerAccount
 */
export interface LedgerAccount {
  [key: string]: unknown | any
  /**
   *
   * @type {string}
   * @memberof LedgerAccount
   */
  readonly id?: string
  /**
   * The human readable display ID used when displaying the account
   * @type {string}
   * @memberof LedgerAccount
   */
  display_id?: string
  /**
   * The nominal code of the ledger account.
   * @type {string}
   * @memberof LedgerAccount
   */
  nominal_code?: string | null
  /**
   * The code assigned to the account.
   * @type {string}
   * @memberof LedgerAccount
   */
  code?: string | null
  /**
   * The classification of account.
   * @type {string}
   * @memberof LedgerAccount
   */
  classification?: LedgerAccountClassification
  /**
   * The type of account.
   * @type {string}
   * @memberof LedgerAccount
   */
  type?: LedgerAccountType
  /**
   * The sub type of account.
   * @type {string}
   * @memberof LedgerAccount
   */
  sub_type?: string | null
  /**
   * The name of the account.
   * @type {string}
   * @memberof LedgerAccount
   */
  name?: string | null
  /**
   * The fully qualified name of the account.
   * @type {string}
   * @memberof LedgerAccount
   */
  fully_qualified_name?: string | null
  /**
   * The description of the account.
   * @type {string}
   * @memberof LedgerAccount
   */
  description?: string | null
  /**
   * The opening balance of the account.
   * @type {number}
   * @memberof LedgerAccount
   */
  opening_balance?: number | null
  /**
   * The current balance of the account.
   * @type {number}
   * @memberof LedgerAccount
   */
  current_balance?: number | null
  /**
   *
   * @type {Currency}
   * @memberof LedgerAccount
   */
  currency?: Currency | null
  /**
   * The tax type of the account.
   * @type {string}
   * @memberof LedgerAccount
   */
  tax_type?: string | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof LedgerAccount
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {number}
   * @memberof LedgerAccount
   */
  level?: number | null
  /**
   * Whether the account is active or not.
   * @type {boolean}
   * @memberof LedgerAccount
   */
  active?: boolean | null
  /**
   * The status of the account.
   * @type {string}
   * @memberof LedgerAccount
   */
  status?: LedgerAccountStatus
  /**
   * Whether the account is a header or not.
   * @type {boolean}
   * @memberof LedgerAccount
   */
  header?: boolean | null
  /**
   *
   * @type {BankAccount}
   * @memberof LedgerAccount
   */
  bank_account?: BankAccount
  /**
   * The categories of the account.
   * @type {Array<LedgerAccountCategories>}
   * @memberof LedgerAccount
   */
  readonly categories?: Array<LedgerAccountCategories>
  /**
   *
   * @type {LedgerAccountParentAccount}
   * @memberof LedgerAccount
   */
  parent_account?: LedgerAccountParentAccount
  /**
   * Whether the account is a sub account or not.
   * @type {boolean}
   * @memberof LedgerAccount
   */
  sub_account?: boolean | null
  /**
   * The sub accounts of the account.
   * @type {Array<object>}
   * @memberof LedgerAccount
   */
  readonly sub_accounts?: Array<object>
  /**
   * Reconciliation Date means the last calendar day of each Reconciliation Period.
   * @type {Date}
   * @memberof LedgerAccount
   */
  last_reconciliation_date?: Date | null
  /**
   *
   * @type {string}
   * @memberof LedgerAccount
   */
  row_version?: string | null
  /**
   *
   * @type {string}
   * @memberof LedgerAccount
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof LedgerAccount
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof LedgerAccount
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof LedgerAccount
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum LedgerAccountClassification {
  asset = 'asset',
  equity = 'equity',
  expense = 'expense',
  liability = 'liability',
  revenue = 'revenue',
  income = 'income',
  other_income = 'other_income',
  other_expense = 'other_expense',
  costs_of_sales = 'costs_of_sales'
}
/**
 * @export
 * @enum {string}
 */
export enum LedgerAccountType {
  accounts_receivable = 'accounts_receivable',
  revenue = 'revenue',
  sales = 'sales',
  other_income = 'other_income',
  bank = 'bank',
  current_asset = 'current_asset',
  fixed_asset = 'fixed_asset',
  non_current_asset = 'non_current_asset',
  other_asset = 'other_asset',
  balancesheet = 'balancesheet',
  equity = 'equity',
  expense = 'expense',
  other_expense = 'other_expense',
  costs_of_sales = 'costs_of_sales',
  accounts_payable = 'accounts_payable',
  credit_card = 'credit_card',
  current_liability = 'current_liability',
  non_current_liability = 'non_current_liability',
  other_liability = 'other_liability'
}
/**
 * @export
 * @enum {string}
 */
export enum LedgerAccountStatus {
  active = 'active',
  inactive = 'inactive',
  archived = 'archived'
}

export function LedgerAccountFromJSON(json: any): LedgerAccount {
  return LedgerAccountFromJSONTyped(json, false)
}

export function LedgerAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    ...json,
    id: !exists(json, 'id') ? undefined : json['id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    nominal_code: !exists(json, 'nominal_code') ? undefined : json['nominal_code'],
    code: !exists(json, 'code') ? undefined : json['code'],
    classification: !exists(json, 'classification') ? undefined : json['classification'],
    type: !exists(json, 'type') ? undefined : json['type'],
    sub_type: !exists(json, 'sub_type') ? undefined : json['sub_type'],
    name: !exists(json, 'name') ? undefined : json['name'],
    fully_qualified_name: !exists(json, 'fully_qualified_name')
      ? undefined
      : json['fully_qualified_name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    opening_balance: !exists(json, 'opening_balance') ? undefined : json['opening_balance'],
    current_balance: !exists(json, 'current_balance') ? undefined : json['current_balance'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    tax_type: !exists(json, 'tax_type') ? undefined : json['tax_type'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    level: !exists(json, 'level') ? undefined : json['level'],
    active: !exists(json, 'active') ? undefined : json['active'],
    status: !exists(json, 'status') ? undefined : json['status'],
    header: !exists(json, 'header') ? undefined : json['header'],
    bank_account: !exists(json, 'bank_account')
      ? undefined
      : BankAccountFromJSON(json['bank_account']),
    categories: !exists(json, 'categories')
      ? undefined
      : (json['categories'] as Array<any>).map(LedgerAccountCategoriesFromJSON),
    parent_account: !exists(json, 'parent_account')
      ? undefined
      : LedgerAccountParentAccountFromJSON(json['parent_account']),
    sub_account: !exists(json, 'sub_account') ? undefined : json['sub_account'],
    sub_accounts: !exists(json, 'sub_accounts') ? undefined : json['sub_accounts'],
    last_reconciliation_date: !exists(json, 'last_reconciliation_date')
      ? undefined
      : json['last_reconciliation_date'] === null
      ? null
      : new Date(json['last_reconciliation_date']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function LedgerAccountToJSON(value?: LedgerAccount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    ...value,
    display_id: value.display_id,
    nominal_code: value.nominal_code,
    code: value.code,
    classification: value.classification,
    type: value.type,
    sub_type: value.sub_type,
    name: value.name,
    fully_qualified_name: value.fully_qualified_name,
    description: value.description,
    opening_balance: value.opening_balance,
    current_balance: value.current_balance,
    currency: CurrencyToJSON(value.currency),
    tax_type: value.tax_type,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    level: value.level,
    active: value.active,
    status: value.status,
    header: value.header,
    bank_account: BankAccountToJSON(value.bank_account),
    parent_account: LedgerAccountParentAccountToJSON(value.parent_account),
    sub_account: value.sub_account,
    last_reconciliation_date:
      value.last_reconciliation_date === undefined
        ? undefined
        : value.last_reconciliation_date === null
        ? null
        : new Date(value.last_reconciliation_date).toISOString().substr(0, 10),
    row_version: value.row_version
  }
}
