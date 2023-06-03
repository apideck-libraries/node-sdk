/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { InvoiceLineItem, InvoiceLineItemFromJSON, InvoiceLineItemToJSON } from './InvoiceLineItem'
import { LinkedCustomer, LinkedCustomerFromJSON, LinkedCustomerToJSON } from './LinkedCustomer'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'

/**
 *
 * @export
 * @interface CreditNote
 */
export interface CreditNote {
  /**
   * Unique identifier representing the entity
   * @type {string}
   * @memberof CreditNote
   */
  readonly id: string
  /**
   * Amount of transaction
   * @type {number}
   * @memberof CreditNote
   */
  total_amount: number
  /**
   * Credit note number.
   * @type {string}
   * @memberof CreditNote
   */
  number?: string | null
  /**
   *
   * @type {LinkedCustomer}
   * @memberof CreditNote
   */
  customer?: LinkedCustomer | null
  /**
   *
   * @type {Currency}
   * @memberof CreditNote
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof CreditNote
   */
  currency_rate?: number | null
  /**
   * Amounts are including tax
   * @type {boolean}
   * @memberof CreditNote
   */
  tax_inclusive?: boolean | null
  /**
   * Sub-total amount, normally before tax.
   * @type {number}
   * @memberof CreditNote
   */
  sub_total?: number | null
  /**
   * Total tax amount applied to this invoice.
   * @type {number}
   * @memberof CreditNote
   */
  total_tax?: number | null
  /**
   * Applicable tax id/code override if tax is not supplied on a line item basis.
   * @type {string}
   * @memberof CreditNote
   */
  tax_code?: string | null
  /**
   * The balance reflecting any payments made against the transaction.
   * @type {number}
   * @memberof CreditNote
   */
  balance?: number | null
  /**
   * Indicates the total credit amount still available to apply towards the payment.
   * @type {number}
   * @memberof CreditNote
   */
  remaining_credit?: number | null
  /**
   * Status of credit notes
   * @type {string}
   * @memberof CreditNote
   */
  status?: CreditNoteStatus
  /**
   * Optional reference message ie: Debit remittance detail.
   * @type {string}
   * @memberof CreditNote
   */
  reference?: string | null
  /**
   * Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD
   * @type {Date}
   * @memberof CreditNote
   */
  date_issued?: Date
  /**
   * Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD
   * @type {Date}
   * @memberof CreditNote
   */
  date_paid?: Date | null
  /**
   * Type of payment
   * @type {string}
   * @memberof CreditNote
   */
  type?: CreditNoteType
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof CreditNote
   */
  account?: LinkedLedgerAccount | null
  /**
   *
   * @type {Array<InvoiceLineItem>}
   * @memberof CreditNote
   */
  line_items?: Array<InvoiceLineItem>
  /**
   *
   * @type {Array<object>}
   * @memberof CreditNote
   */
  allocations?: Array<object>
  /**
   * Optional note to be associated with the credit note.
   * @type {string}
   * @memberof CreditNote
   */
  note?: string | null
  /**
   * Optional terms to be associated with the credit note.
   * @type {string}
   * @memberof CreditNote
   */
  terms?: string | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof CreditNote
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof CreditNote
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof CreditNote
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof CreditNote
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof CreditNote
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum CreditNoteStatus {
  draft = 'draft',
  authorised = 'authorised',
  paid = 'paid',
  voided = 'voided',
  deleted = 'deleted'
}
/**
 * @export
 * @enum {string}
 */
export enum CreditNoteType {
  receivable_credit = 'accounts_receivable_credit',
  payable_credit = 'accounts_payable_credit'
}

export function CreditNoteFromJSON(json: any): CreditNote {
  return CreditNoteFromJSONTyped(json, false)
}

export function CreditNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditNote {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    total_amount: json['total_amount'],
    number: !exists(json, 'number') ? undefined : json['number'],
    customer: !exists(json, 'customer') ? undefined : LinkedCustomerFromJSON(json['customer']),
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    tax_inclusive: !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    tax_code: !exists(json, 'tax_code') ? undefined : json['tax_code'],
    balance: !exists(json, 'balance') ? undefined : json['balance'],
    remaining_credit: !exists(json, 'remaining_credit') ? undefined : json['remaining_credit'],
    status: !exists(json, 'status') ? undefined : json['status'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    date_issued: !exists(json, 'date_issued') ? undefined : new Date(json['date_issued']),
    date_paid: !exists(json, 'date_paid')
      ? undefined
      : json['date_paid'] === null
      ? null
      : new Date(json['date_paid']),
    type: !exists(json, 'type') ? undefined : json['type'],
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(InvoiceLineItemFromJSON),
    allocations: !exists(json, 'allocations') ? undefined : json['allocations'],
    note: !exists(json, 'note') ? undefined : json['note'],
    terms: !exists(json, 'terms') ? undefined : json['terms'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function CreditNoteToJSON(value?: CreditNote | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total_amount: value.total_amount,
    number: value.number,
    customer: LinkedCustomerToJSON(value.customer),
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    tax_inclusive: value.tax_inclusive,
    sub_total: value.sub_total,
    total_tax: value.total_tax,
    tax_code: value.tax_code,
    balance: value.balance,
    remaining_credit: value.remaining_credit,
    status: value.status,
    reference: value.reference,
    date_issued:
      value.date_issued === undefined ? undefined : new Date(value.date_issued).toISOString(),
    date_paid:
      value.date_paid === undefined
        ? undefined
        : value.date_paid === null
        ? null
        : new Date(value.date_paid).toISOString(),
    type: value.type,
    account: LinkedLedgerAccountToJSON(value.account),
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(InvoiceLineItemToJSON),
    allocations: value.allocations,
    note: value.note,
    terms: value.terms,
    row_version: value.row_version
  }
}
