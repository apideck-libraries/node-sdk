/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.2
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
import { InvoiceLineItem, InvoiceLineItemFromJSON, InvoiceLineItemToJSON } from './InvoiceLineItem'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedSupplier, LinkedSupplierFromJSON, LinkedSupplierToJSON } from './LinkedSupplier'

/**
 *
 * @export
 * @interface PurchaseOrder
 */
export interface PurchaseOrder {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof PurchaseOrder
   */
  readonly id?: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof PurchaseOrder
   */
  readonly downstream_id?: string | null
  /**
   * A PO Number uniquely identifies a purchase order and is generally defined by the buyer.
   * @type {string}
   * @memberof PurchaseOrder
   */
  po_number?: string | null
  /**
   * Optional purchase order reference.
   * @type {string}
   * @memberof PurchaseOrder
   */
  reference?: string | null
  /**
   *
   * @type {LinkedSupplier}
   * @memberof PurchaseOrder
   */
  supplier?: LinkedSupplier | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof PurchaseOrder
   */
  company_id?: string | null
  /**
   *
   * @type {string}
   * @memberof PurchaseOrder
   */
  status?: PurchaseOrderStatus
  /**
   * Date purchase order was issued - YYYY-MM-DD.
   * @type {Date}
   * @memberof PurchaseOrder
   */
  issued_date?: Date | null
  /**
   * The date on which the purchase order is to be delivered - YYYY-MM-DD.
   * @type {Date}
   * @memberof PurchaseOrder
   */
  delivery_date?: Date | null
  /**
   * The date on which the order is expected to arrive - YYYY-MM-DD.
   * @type {Date}
   * @memberof PurchaseOrder
   */
  expected_arrival_date?: Date | null
  /**
   *
   * @type {Currency}
   * @memberof PurchaseOrder
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof PurchaseOrder
   */
  currency_rate?: number | null
  /**
   * Sub-total amount, normally before tax.
   * @type {number}
   * @memberof PurchaseOrder
   */
  sub_total?: number | null
  /**
   * Total tax amount applied to this invoice.
   * @type {number}
   * @memberof PurchaseOrder
   */
  total_tax?: number | null
  /**
   * Total amount of invoice, including tax.
   * @type {number}
   * @memberof PurchaseOrder
   */
  total?: number | null
  /**
   * Amounts are including tax
   * @type {boolean}
   * @memberof PurchaseOrder
   */
  tax_inclusive?: boolean | null
  /**
   *
   * @type {Array<InvoiceLineItem>}
   * @memberof PurchaseOrder
   */
  line_items?: Array<InvoiceLineItem>
  /**
   *
   * @type {Address}
   * @memberof PurchaseOrder
   */
  shipping_address?: Address
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof PurchaseOrder
   */
  ledger_account?: LinkedLedgerAccount | null
  /**
   * Optional purchase order template
   * @type {string}
   * @memberof PurchaseOrder
   */
  template_id?: string | null
  /**
   * Discount percentage applied to this transaction.
   * @type {number}
   * @memberof PurchaseOrder
   */
  discount_percentage?: number | null
  /**
   *
   * @type {BankAccount}
   * @memberof PurchaseOrder
   */
  bank_account?: BankAccount
  /**
   * Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row.
   * @type {boolean}
   * @memberof PurchaseOrder
   */
  accounting_by_row?: boolean | null
  /**
   * The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.
   * @type {Date}
   * @memberof PurchaseOrder
   */
  due_date?: Date
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   * @type {string}
   * @memberof PurchaseOrder
   */
  payment_method?: string | null
  /**
   * Applicable tax id/code override if tax is not supplied on a line item basis.
   * @type {string}
   * @memberof PurchaseOrder
   */
  tax_code?: string | null
  /**
   * The channel through which the transaction is processed.
   * @type {string}
   * @memberof PurchaseOrder
   */
  channel?: string | null
  /**
   * Message for the supplier. This text appears on the Purchase Order.
   * @type {string}
   * @memberof PurchaseOrder
   */
  memo?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof PurchaseOrder
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof PurchaseOrder
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof PurchaseOrder
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof PurchaseOrder
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof PurchaseOrder
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof PurchaseOrder
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum PurchaseOrderStatus {
  draft = 'draft',
  open = 'open',
  closed = 'closed',
  deleted = 'deleted',
  billed = 'billed',
  other = 'other'
}

export function PurchaseOrderFromJSON(json: any): PurchaseOrder {
  return PurchaseOrderFromJSONTyped(json, false)
}

export function PurchaseOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseOrder {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    po_number: !exists(json, 'po_number') ? undefined : json['po_number'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    supplier: !exists(json, 'supplier') ? undefined : LinkedSupplierFromJSON(json['supplier']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    issued_date: !exists(json, 'issued_date')
      ? undefined
      : json['issued_date'] === null
      ? null
      : new Date(json['issued_date']),
    delivery_date: !exists(json, 'delivery_date')
      ? undefined
      : json['delivery_date'] === null
      ? null
      : new Date(json['delivery_date']),
    expected_arrival_date: !exists(json, 'expected_arrival_date')
      ? undefined
      : json['expected_arrival_date'] === null
      ? null
      : new Date(json['expected_arrival_date']),
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total: !exists(json, 'total') ? undefined : json['total'],
    tax_inclusive: !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(InvoiceLineItemFromJSON),
    shipping_address: !exists(json, 'shipping_address')
      ? undefined
      : AddressFromJSON(json['shipping_address']),
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
    template_id: !exists(json, 'template_id') ? undefined : json['template_id'],
    discount_percentage: !exists(json, 'discount_percentage')
      ? undefined
      : json['discount_percentage'],
    bank_account: !exists(json, 'bank_account')
      ? undefined
      : BankAccountFromJSON(json['bank_account']),
    accounting_by_row: !exists(json, 'accounting_by_row') ? undefined : json['accounting_by_row'],
    due_date: !exists(json, 'due_date') ? undefined : new Date(json['due_date']),
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    tax_code: !exists(json, 'tax_code') ? undefined : json['tax_code'],
    channel: !exists(json, 'channel') ? undefined : json['channel'],
    memo: !exists(json, 'memo') ? undefined : json['memo'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
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
      : new Date(json['created_at'])
  }
}

export function PurchaseOrderToJSON(value?: PurchaseOrder | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    po_number: value.po_number,
    reference: value.reference,
    supplier: LinkedSupplierToJSON(value.supplier),
    company_id: value.company_id,
    status: value.status,
    issued_date:
      value.issued_date === undefined
        ? undefined
        : value.issued_date === null
        ? null
        : new Date(value.issued_date).toISOString().substr(0, 10),
    delivery_date:
      value.delivery_date === undefined
        ? undefined
        : value.delivery_date === null
        ? null
        : new Date(value.delivery_date).toISOString().substr(0, 10),
    expected_arrival_date:
      value.expected_arrival_date === undefined
        ? undefined
        : value.expected_arrival_date === null
        ? null
        : new Date(value.expected_arrival_date).toISOString().substr(0, 10),
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    sub_total: value.sub_total,
    total_tax: value.total_tax,
    total: value.total,
    tax_inclusive: value.tax_inclusive,
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(InvoiceLineItemToJSON),
    shipping_address: AddressToJSON(value.shipping_address),
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    template_id: value.template_id,
    discount_percentage: value.discount_percentage,
    bank_account: BankAccountToJSON(value.bank_account),
    accounting_by_row: value.accounting_by_row,
    due_date:
      value.due_date === undefined
        ? undefined
        : new Date(value.due_date).toISOString().substr(0, 10),
    payment_method: value.payment_method,
    tax_code: value.tax_code,
    channel: value.channel,
    memo: value.memo,
    row_version: value.row_version
  }
}
