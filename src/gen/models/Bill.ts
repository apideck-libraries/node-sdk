/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.51.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { BillLineItem, BillLineItemFromJSON, BillLineItemToJSON } from './BillLineItem'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedSupplier, LinkedSupplierFromJSON, LinkedSupplierToJSON } from './LinkedSupplier'

/**
 *
 * @export
 * @interface Bill
 */
export interface Bill {
  /**
   *
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
   *
   * @type {LinkedSupplier}
   * @memberof Bill
   */
  supplier?: LinkedSupplier | null
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
  bill_date?: Date
  /**
   * The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.
   * @type {Date}
   * @memberof Bill
   */
  due_date?: Date
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
   * Optional invoice reference.
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
   *
   * @type {string}
   * @memberof Bill
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Bill
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Bill
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Bill
   */
  readonly created_at?: Date
  /**
   *
   * @type {string}
   * @memberof Bill
   */
  row_version?: string | null
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
    supplier: !exists(json, 'supplier') ? undefined : LinkedSupplierFromJSON(json['supplier']),
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    tax_inclusive: !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    bill_date: !exists(json, 'bill_date') ? undefined : new Date(json['bill_date']),
    due_date: !exists(json, 'due_date') ? undefined : new Date(json['due_date']),
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
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version']
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
    supplier: LinkedSupplierToJSON(value.supplier),
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    tax_inclusive: value.tax_inclusive,
    bill_date:
      value.bill_date === undefined
        ? undefined
        : new Date(value.bill_date).toISOString().substr(0, 10),
    due_date:
      value.due_date === undefined
        ? undefined
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
    row_version: value.row_version
  }
}
