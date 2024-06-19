/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { InvoiceLineItem, InvoiceLineItemFromJSON, InvoiceLineItemToJSON } from './InvoiceLineItem'
import { LinkedCustomer, LinkedCustomerFromJSON, LinkedCustomerToJSON } from './LinkedCustomer'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import {
  LinkedTrackingCategory,
  LinkedTrackingCategoryFromJSON,
  LinkedTrackingCategoryToJSON
} from './LinkedTrackingCategory'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Invoice
   */
  readonly id?: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Invoice
   */
  readonly downstream_id?: string | null
  /**
   * Invoice type
   * @type {string}
   * @memberof Invoice
   */
  type?: InvoiceType
  /**
   * Invoice number.
   * @type {string}
   * @memberof Invoice
   */
  number?: string | null
  /**
   *
   * @type {LinkedCustomer}
   * @memberof Invoice
   */
  customer?: LinkedCustomer | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof Invoice
   */
  company_id?: string | null
  /**
   * Date invoice was issued - YYYY-MM-DD.
   * @type {Date}
   * @memberof Invoice
   */
  invoice_date?: Date | null
  /**
   * The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.
   * @type {Date}
   * @memberof Invoice
   */
  due_date?: Date | null
  /**
   * Terms of payment.
   * @type {string}
   * @memberof Invoice
   */
  terms?: string | null
  /**
   * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
   * @type {string}
   * @memberof Invoice
   */
  po_number?: string | null
  /**
   * Optional invoice reference.
   * @type {string}
   * @memberof Invoice
   */
  reference?: string | null
  /**
   * Invoice status
   * @type {string}
   * @memberof Invoice
   */
  status?: InvoiceStatus
  /**
   * Invoice sent to contact/customer.
   * @type {boolean}
   * @memberof Invoice
   */
  invoice_sent?: boolean
  /**
   *
   * @type {Currency}
   * @memberof Invoice
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof Invoice
   */
  currency_rate?: number | null
  /**
   * Amounts are including tax
   * @type {boolean}
   * @memberof Invoice
   */
  tax_inclusive?: boolean | null
  /**
   * Sub-total amount, normally before tax.
   * @type {number}
   * @memberof Invoice
   */
  sub_total?: number | null
  /**
   * Total tax amount applied to this invoice.
   * @type {number}
   * @memberof Invoice
   */
  total_tax?: number | null
  /**
   * Applicable tax id/code override if tax is not supplied on a line item basis.
   * @type {string}
   * @memberof Invoice
   */
  tax_code?: string | null
  /**
   * Discount percentage applied to this invoice.
   * @type {number}
   * @memberof Invoice
   */
  discount_percentage?: number | null
  /**
   * Discount amount applied to this invoice.
   * @type {number}
   * @memberof Invoice
   */
  discount_amount?: number | null
  /**
   * Total amount of invoice, including tax.
   * @type {number}
   * @memberof Invoice
   */
  total?: number | null
  /**
   * Balance of invoice due.
   * @type {number}
   * @memberof Invoice
   */
  balance?: number | null
  /**
   * Amount of deposit made to this invoice.
   * @type {number}
   * @memberof Invoice
   */
  deposit?: number | null
  /**
   * Customer memo
   * @type {string}
   * @memberof Invoice
   */
  customer_memo?: string | null
  /**
   *
   * @type {LinkedTrackingCategory}
   * @memberof Invoice
   */
  tracking_category?: LinkedTrackingCategory | null
  /**
   *
   * @type {Array<InvoiceLineItem>}
   * @memberof Invoice
   */
  line_items?: Array<InvoiceLineItem>
  /**
   *
   * @type {Address}
   * @memberof Invoice
   */
  billing_address?: Address
  /**
   *
   * @type {Address}
   * @memberof Invoice
   */
  shipping_address?: Address
  /**
   * Optional invoice template
   * @type {string}
   * @memberof Invoice
   */
  template_id?: string | null
  /**
   * URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.
   * @type {string}
   * @memberof Invoice
   */
  source_document_url?: string | null
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   * @type {string}
   * @memberof Invoice
   */
  payment_method?: string | null
  /**
   * The channel through which the transaction is processed.
   * @type {string}
   * @memberof Invoice
   */
  channel?: string | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Invoice
   */
  language?: string | null
  /**
   * Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row.
   * @type {boolean}
   * @memberof Invoice
   */
  accounting_by_row?: boolean | null
  /**
   *
   * @type {BankAccount}
   * @memberof Invoice
   */
  bank_account?: BankAccount
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof Invoice
   */
  ledger_account?: LinkedLedgerAccount | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Invoice
   */
  readonly custom_mappings?: object | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Invoice
   */
  custom_fields?: Array<CustomField>
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Invoice
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Invoice
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Invoice
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Invoice
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Invoice
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Invoice
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceType {
  standard = 'standard',
  credit = 'credit',
  service = 'service',
  product = 'product',
  supplier = 'supplier',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum InvoiceStatus {
  draft = 'draft',
  submitted = 'submitted',
  authorised = 'authorised',
  partially_paid = 'partially_paid',
  paid = 'paid',
  void = 'void',
  credit = 'credit',
  deleted = 'deleted'
}

export function InvoiceFromJSON(json: any): Invoice {
  return InvoiceFromJSONTyped(json, false)
}

export function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    number: !exists(json, 'number') ? undefined : json['number'],
    customer: !exists(json, 'customer') ? undefined : LinkedCustomerFromJSON(json['customer']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    invoice_date: !exists(json, 'invoice_date')
      ? undefined
      : json['invoice_date'] === null
      ? null
      : new Date(json['invoice_date']),
    due_date: !exists(json, 'due_date')
      ? undefined
      : json['due_date'] === null
      ? null
      : new Date(json['due_date']),
    terms: !exists(json, 'terms') ? undefined : json['terms'],
    po_number: !exists(json, 'po_number') ? undefined : json['po_number'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    status: !exists(json, 'status') ? undefined : json['status'],
    invoice_sent: !exists(json, 'invoice_sent') ? undefined : json['invoice_sent'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    tax_inclusive: !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    tax_code: !exists(json, 'tax_code') ? undefined : json['tax_code'],
    discount_percentage: !exists(json, 'discount_percentage')
      ? undefined
      : json['discount_percentage'],
    discount_amount: !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
    total: !exists(json, 'total') ? undefined : json['total'],
    balance: !exists(json, 'balance') ? undefined : json['balance'],
    deposit: !exists(json, 'deposit') ? undefined : json['deposit'],
    customer_memo: !exists(json, 'customer_memo') ? undefined : json['customer_memo'],
    tracking_category: !exists(json, 'tracking_category')
      ? undefined
      : LinkedTrackingCategoryFromJSON(json['tracking_category']),
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(InvoiceLineItemFromJSON),
    billing_address: !exists(json, 'billing_address')
      ? undefined
      : AddressFromJSON(json['billing_address']),
    shipping_address: !exists(json, 'shipping_address')
      ? undefined
      : AddressFromJSON(json['shipping_address']),
    template_id: !exists(json, 'template_id') ? undefined : json['template_id'],
    source_document_url: !exists(json, 'source_document_url')
      ? undefined
      : json['source_document_url'],
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    channel: !exists(json, 'channel') ? undefined : json['channel'],
    language: !exists(json, 'language') ? undefined : json['language'],
    accounting_by_row: !exists(json, 'accounting_by_row') ? undefined : json['accounting_by_row'],
    bank_account: !exists(json, 'bank_account')
      ? undefined
      : BankAccountFromJSON(json['bank_account']),
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
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
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function InvoiceToJSON(value?: Invoice | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    number: value.number,
    customer: LinkedCustomerToJSON(value.customer),
    company_id: value.company_id,
    invoice_date:
      value.invoice_date === undefined
        ? undefined
        : value.invoice_date === null
        ? null
        : new Date(value.invoice_date).toISOString().substr(0, 10),
    due_date:
      value.due_date === undefined
        ? undefined
        : value.due_date === null
        ? null
        : new Date(value.due_date).toISOString().substr(0, 10),
    terms: value.terms,
    po_number: value.po_number,
    reference: value.reference,
    status: value.status,
    invoice_sent: value.invoice_sent,
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    tax_inclusive: value.tax_inclusive,
    sub_total: value.sub_total,
    total_tax: value.total_tax,
    tax_code: value.tax_code,
    discount_percentage: value.discount_percentage,
    discount_amount: value.discount_amount,
    total: value.total,
    balance: value.balance,
    deposit: value.deposit,
    customer_memo: value.customer_memo,
    tracking_category: LinkedTrackingCategoryToJSON(value.tracking_category),
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(InvoiceLineItemToJSON),
    billing_address: AddressToJSON(value.billing_address),
    shipping_address: AddressToJSON(value.shipping_address),
    template_id: value.template_id,
    source_document_url: value.source_document_url,
    payment_method: value.payment_method,
    channel: value.channel,
    language: value.language,
    accounting_by_row: value.accounting_by_row,
    bank_account: BankAccountToJSON(value.bank_account),
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
