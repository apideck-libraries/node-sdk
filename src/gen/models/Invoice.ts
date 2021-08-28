/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.4.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { Customer, CustomerFromJSON, CustomerToJSON } from './Customer'
import {
  InvoiceLineItems,
  InvoiceLineItemsFromJSON,
  InvoiceLineItemsToJSON
} from './InvoiceLineItems'

/**
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
  /**
   *
   * @type {string}
   * @memberof Invoice
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Invoice
   */
  type?: string | null
  /**
   *
   * @type {string}
   * @memberof Invoice
   */
  number?: string | null
  /**
   *
   * @type {Customer}
   * @memberof Invoice
   */
  customer?: Customer | null
  /**
   * Date invoice was issued - YYYY-MM-DD
   * @type {Date}
   * @memberof Invoice
   */
  date?: Date
  /**
   * The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD
   * @type {Date}
   * @memberof Invoice
   */
  due_date?: Date
  /**
   * A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.
   * @type {string}
   * @memberof Invoice
   */
  po_number?: string | null
  /**
   * Invoice status
   * @type {string}
   * @memberof Invoice
   */
  status?: InvoiceStatus
  /**
   *
   * @type {Currency}
   * @memberof Invoice
   */
  currency?: Currency | null
  /**
   *
   * @type {number}
   * @memberof Invoice
   */
  sub_total?: number | null
  /**
   *
   * @type {number}
   * @memberof Invoice
   */
  total_tax?: number | null
  /**
   *
   * @type {number}
   * @memberof Invoice
   */
  total?: number | null
  /**
   *
   * @type {number}
   * @memberof Invoice
   */
  balance?: number | null
  /**
   *
   * @type {number}
   * @memberof Invoice
   */
  deposit?: number | null
  /**
   *
   * @type {string}
   * @memberof Invoice
   */
  customer_memo?: string | null
  /**
   *
   * @type {Array<InvoiceLineItems>}
   * @memberof Invoice
   */
  line_items?: Array<InvoiceLineItems>
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
   *
   * @type {string}
   * @memberof Invoice
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Invoice
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Invoice
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Invoice
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceStatus {
  draft = 'draft',
  submitted = 'submitted',
  partially_paid = 'partially_paid',
  paid = 'paid',
  void = 'void'
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
    type: !exists(json, 'type') ? undefined : json['type'],
    number: !exists(json, 'number') ? undefined : json['number'],
    customer: !exists(json, 'customer') ? undefined : CustomerFromJSON(json['customer']),
    date: !exists(json, 'date') ? undefined : new Date(json['date']),
    due_date: !exists(json, 'due_date') ? undefined : new Date(json['due_date']),
    po_number: !exists(json, 'po_number') ? undefined : json['po_number'],
    status: !exists(json, 'status') ? undefined : json['status'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total: !exists(json, 'total') ? undefined : json['total'],
    balance: !exists(json, 'balance') ? undefined : json['balance'],
    deposit: !exists(json, 'deposit') ? undefined : json['deposit'],
    customer_memo: !exists(json, 'customer_memo') ? undefined : json['customer_memo'],
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(InvoiceLineItemsFromJSON),
    billing_address: !exists(json, 'billing_address')
      ? undefined
      : AddressFromJSON(json['billing_address']),
    shipping_address: !exists(json, 'shipping_address')
      ? undefined
      : AddressFromJSON(json['shipping_address']),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
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
    customer: CustomerToJSON(value.customer),
    date: value.date === undefined ? undefined : new Date(value.date).toISOString().substr(0, 10),
    due_date:
      value.due_date === undefined
        ? undefined
        : new Date(value.due_date).toISOString().substr(0, 10),
    po_number: value.po_number,
    status: value.status,
    currency: CurrencyToJSON(value.currency),
    sub_total: value.sub_total,
    total_tax: value.total_tax,
    total: value.total,
    balance: value.balance,
    deposit: value.deposit,
    customer_memo: value.customer_memo,
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(InvoiceLineItemsToJSON),
    billing_address: AddressToJSON(value.billing_address),
    shipping_address: AddressToJSON(value.shipping_address)
  }
}
