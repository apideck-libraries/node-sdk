/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { ExpenseLineItem, ExpenseLineItemFromJSON, ExpenseLineItemToJSON } from './ExpenseLineItem'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface Expense
 */
export interface Expense {
  /**
   * The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD
   * @type {Date}
   * @memberof Expense
   */
  transaction_date: Date | null
  /**
   * The unique identifier for the ledger account that this expense should be credited to.
   * @type {string}
   * @memberof Expense
   */
  account_id: string
  /**
   * Expense line items linked to this expense.
   * @type {Array<ExpenseLineItem>}
   * @memberof Expense
   */
  line_items: Array<ExpenseLineItem>
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Expense
   */
  readonly id?: string
  /**
   * Number.
   * @type {string}
   * @memberof Expense
   */
  number?: string | null
  /**
   * The ID of the customer this entity is linked to. Used for expenses that should be marked as billable to customers.
   * @type {string}
   * @memberof Expense
   */
  customer_id?: string
  /**
   * The ID of the supplier this entity is linked to.
   * @type {string}
   * @memberof Expense
   */
  supplier_id?: string
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof Expense
   */
  company_id?: string | null
  /**
   * The ID of the department this expense is linked to.
   * @type {string}
   * @memberof Expense
   */
  department_id?: string
  /**
   * The type of payment for the expense.
   * @type {string}
   * @memberof Expense
   */
  payment_type?: ExpensePaymentType
  /**
   *
   * @type {Currency}
   * @memberof Expense
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof Expense
   */
  currency_rate?: number | null
  /**
   * The type of expense.
   * @type {string}
   * @memberof Expense
   */
  type?: ExpenseType
  /**
   * The memo of the expense.
   * @type {string}
   * @memberof Expense
   */
  memo?: string | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof Expense
   */
  tax_rate?: LinkedTaxRate
  /**
   * The total amount of the expense line item.
   * @type {number}
   * @memberof Expense
   */
  total_amount?: number | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Expense
   */
  custom_fields?: Array<CustomField>
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Expense
   */
  readonly custom_mappings?: object | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Expense
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Expense
   */
  readonly created_at?: Date | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Expense
   */
  row_version?: string | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Expense
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum ExpensePaymentType {
  cash = 'cash',
  check = 'check',
  credit_card = 'credit_card'
}
/**
 * @export
 * @enum {string}
 */
export enum ExpenseType {
  expense = 'expense',
  refund = 'refund'
}

export function ExpenseFromJSON(json: any): Expense {
  return ExpenseFromJSONTyped(json, false)
}

export function ExpenseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Expense {
  if (json === undefined || json === null) {
    return json
  }
  return {
    transaction_date: json['transaction_date'] === null ? null : new Date(json['transaction_date']),
    account_id: json['account_id'],
    line_items: (json['line_items'] as Array<any>).map(ExpenseLineItemFromJSON),
    id: !exists(json, 'id') ? undefined : json['id'],
    number: !exists(json, 'number') ? undefined : json['number'],
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    supplier_id: !exists(json, 'supplier_id') ? undefined : json['supplier_id'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    department_id: !exists(json, 'department_id') ? undefined : json['department_id'],
    payment_type: !exists(json, 'payment_type') ? undefined : json['payment_type'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    type: !exists(json, 'type') ? undefined : json['type'],
    memo: !exists(json, 'memo') ? undefined : json['memo'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function ExpenseToJSON(value?: Expense | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    transaction_date:
      value.transaction_date === null ? null : new Date(value.transaction_date).toISOString(),
    account_id: value.account_id,
    line_items: (value.line_items as Array<any>).map(ExpenseLineItemToJSON),
    number: value.number,
    customer_id: value.customer_id,
    supplier_id: value.supplier_id,
    company_id: value.company_id,
    department_id: value.department_id,
    payment_type: value.payment_type,
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    type: value.type,
    memo: value.memo,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    total_amount: value.total_amount,
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
