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
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { BillLineItem, BillLineItemFromJSON, BillLineItemToJSON } from './BillLineItem'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedSupplier, LinkedSupplierFromJSON, LinkedSupplierToJSON } from './LinkedSupplier'
import {
  LinkedTrackingCategories,
  LinkedTrackingCategoriesFromJSON,
  LinkedTrackingCategoriesToJSON
} from './LinkedTrackingCategories'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface Bill
 */
export interface Bill {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Bill
   */
  readonly id?: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Bill
   */
  readonly downstream_id?: string | null
  /**
   * Reference to supplier bill number
   * @type {string}
   * @memberof Bill
   */
  bill_number?: string | null
  /**
   *
   * @type {LinkedSupplier}
   * @memberof Bill
   */
  supplier?: LinkedSupplier | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof Bill
   */
  company_id?: string | null
  /**
   *
   * @type {Currency}
   * @memberof Bill
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof Bill
   */
  currency_rate?: number | null
  /**
   * Amounts are including tax
   * @type {boolean}
   * @memberof Bill
   */
  tax_inclusive?: boolean | null
  /**
   * Date bill was issued - YYYY-MM-DD.
   * @type {Date}
   * @memberof Bill
   */
  bill_date?: Date | null
  /**
   * The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.
   * @type {Date}
   * @memberof Bill
   */
  due_date?: Date | null
  /**
   * The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.
   * @type {Date}
   * @memberof Bill
   */
  paid_date?: Date | null
  /**
   * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
   * @type {string}
   * @memberof Bill
   */
  po_number?: string | null
  /**
   * Optional bill reference.
   * @type {string}
   * @memberof Bill
   */
  reference?: string | null
  /**
   *
   * @type {Array<BillLineItem>}
   * @memberof Bill
   */
  line_items?: Array<BillLineItem>
  /**
   * Terms of payment.
   * @type {string}
   * @memberof Bill
   */
  terms?: string | null
  /**
   * Balance of bill due.
   * @type {number}
   * @memberof Bill
   */
  balance?: number | null
  /**
   * Amount of deposit made to this bill.
   * @type {number}
   * @memberof Bill
   */
  deposit?: number | null
  /**
   * Sub-total amount, normally before tax.
   * @type {number}
   * @memberof Bill
   */
  sub_total?: number | null
  /**
   * Total tax amount applied to this bill.
   * @type {number}
   * @memberof Bill
   */
  total_tax?: number | null
  /**
   * Total amount of bill, including tax.
   * @type {number}
   * @memberof Bill
   */
  total?: number | null
  /**
   * Applicable tax id/code override if tax is not supplied on a line item basis.
   * @type {string}
   * @memberof Bill
   */
  tax_code?: string | null
  /**
   *
   * @type {string}
   * @memberof Bill
   */
  notes?: string | null
  /**
   * Invoice status
   * @type {string}
   * @memberof Bill
   */
  status?: BillStatus
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof Bill
   */
  ledger_account?: LinkedLedgerAccount | null
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   * @type {string}
   * @memberof Bill
   */
  payment_method?: string | null
  /**
   * The channel through which the transaction is processed.
   * @type {string}
   * @memberof Bill
   */
  channel?: string | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Bill
   */
  language?: string | null
  /**
   * Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row.
   * @type {boolean}
   * @memberof Bill
   */
  accounting_by_row?: boolean | null
  /**
   *
   * @type {BankAccount}
   * @memberof Bill
   */
  bank_account?: BankAccount
  /**
   * Discount percentage applied to this transaction.
   * @type {number}
   * @memberof Bill
   */
  discount_percentage?: number | null
  /**
   * URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.
   * @type {string}
   * @memberof Bill
   */
  source_document_url?: string | null
  /**
   *
   * @type {LinkedTrackingCategories}
   * @memberof Bill
   */
  tracking_categories?: LinkedTrackingCategories | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Bill
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Bill
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Bill
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Bill
   */
  readonly created_at?: Date | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Bill
   */
  row_version?: string | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Bill
   */
  custom_fields?: Array<CustomField>
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Bill
   */
  readonly custom_mappings?: object | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Bill
   */
  pass_through?: PassThroughBody
  /**
   * Accounting period
   * @type {string}
   * @memberof Bill
   */
  accounting_period?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum BillStatus {
  draft = 'draft',
  submitted = 'submitted',
  authorised = 'authorised',
  partially_paid = 'partially_paid',
  paid = 'paid',
  void = 'void',
  credit = 'credit',
  deleted = 'deleted'
}

export function BillFromJSON(json: any): Bill {
  return BillFromJSONTyped(json, false)
}

export function BillFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bill {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    bill_number: !exists(json, 'bill_number') ? undefined : json['bill_number'],
    supplier: !exists(json, 'supplier') ? undefined : LinkedSupplierFromJSON(json['supplier']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    tax_inclusive: !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    bill_date: !exists(json, 'bill_date')
      ? undefined
      : json['bill_date'] === null
      ? null
      : new Date(json['bill_date']),
    due_date: !exists(json, 'due_date')
      ? undefined
      : json['due_date'] === null
      ? null
      : new Date(json['due_date']),
    paid_date: !exists(json, 'paid_date')
      ? undefined
      : json['paid_date'] === null
      ? null
      : new Date(json['paid_date']),
    po_number: !exists(json, 'po_number') ? undefined : json['po_number'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(BillLineItemFromJSON),
    terms: !exists(json, 'terms') ? undefined : json['terms'],
    balance: !exists(json, 'balance') ? undefined : json['balance'],
    deposit: !exists(json, 'deposit') ? undefined : json['deposit'],
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total: !exists(json, 'total') ? undefined : json['total'],
    tax_code: !exists(json, 'tax_code') ? undefined : json['tax_code'],
    notes: !exists(json, 'notes') ? undefined : json['notes'],
    status: !exists(json, 'status') ? undefined : json['status'],
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    channel: !exists(json, 'channel') ? undefined : json['channel'],
    language: !exists(json, 'language') ? undefined : json['language'],
    accounting_by_row: !exists(json, 'accounting_by_row') ? undefined : json['accounting_by_row'],
    bank_account: !exists(json, 'bank_account')
      ? undefined
      : BankAccountFromJSON(json['bank_account']),
    discount_percentage: !exists(json, 'discount_percentage')
      ? undefined
      : json['discount_percentage'],
    source_document_url: !exists(json, 'source_document_url')
      ? undefined
      : json['source_document_url'],
    tracking_categories: !exists(json, 'tracking_categories')
      ? undefined
      : LinkedTrackingCategoriesFromJSON(json['tracking_categories']),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
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
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through']),
    accounting_period: !exists(json, 'accounting_period') ? undefined : json['accounting_period']
  }
}

export function BillToJSON(value?: Bill | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    bill_number: value.bill_number,
    supplier: LinkedSupplierToJSON(value.supplier),
    company_id: value.company_id,
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    tax_inclusive: value.tax_inclusive,
    bill_date:
      value.bill_date === undefined
        ? undefined
        : value.bill_date === null
        ? null
        : new Date(value.bill_date).toISOString().substr(0, 10),
    due_date:
      value.due_date === undefined
        ? undefined
        : value.due_date === null
        ? null
        : new Date(value.due_date).toISOString().substr(0, 10),
    paid_date:
      value.paid_date === undefined
        ? undefined
        : value.paid_date === null
        ? null
        : new Date(value.paid_date).toISOString().substr(0, 10),
    po_number: value.po_number,
    reference: value.reference,
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(BillLineItemToJSON),
    terms: value.terms,
    balance: value.balance,
    deposit: value.deposit,
    sub_total: value.sub_total,
    total_tax: value.total_tax,
    total: value.total,
    tax_code: value.tax_code,
    notes: value.notes,
    status: value.status,
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    payment_method: value.payment_method,
    channel: value.channel,
    language: value.language,
    accounting_by_row: value.accounting_by_row,
    bank_account: BankAccountToJSON(value.bank_account),
    discount_percentage: value.discount_percentage,
    source_document_url: value.source_document_url,
    tracking_categories: LinkedTrackingCategoriesToJSON(value.tracking_categories),
    row_version: value.row_version,
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    pass_through: PassThroughBodyToJSON(value.pass_through),
    accounting_period: value.accounting_period
  }
}
