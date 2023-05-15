/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { LinkedCustomer, LinkedCustomerFromJSON, LinkedCustomerToJSON } from './LinkedCustomer'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedSupplier, LinkedSupplierFromJSON, LinkedSupplierToJSON } from './LinkedSupplier'
import {
  PaymentAllocations,
  PaymentAllocationsFromJSON,
  PaymentAllocationsToJSON
} from './PaymentAllocations'

/**
 *
 * @export
 * @interface Payment
 */
export interface Payment {
  /**
   * Unique identifier representing the entity
   * @type {string}
   * @memberof Payment
   */
  readonly id: string
  /**
   * Amount of payment
   * @type {number}
   * @memberof Payment
   */
  total_amount: number
  /**
   * Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD
   * @type {Date}
   * @memberof Payment
   */
  transaction_date: Date
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Payment
   */
  readonly downstream_id?: string | null
  /**
   *
   * @type {Currency}
   * @memberof Payment
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof Payment
   */
  currency_rate?: number | null
  /**
   * Optional payment reference message ie: Debit remittance detail.
   * @type {string}
   * @memberof Payment
   */
  reference?: string | null
  /**
   * Payment method name
   * @type {string}
   * @memberof Payment
   */
  payment_method?: string | null
  /**
   * Optional reference message returned by payment method on processing
   * @type {string}
   * @memberof Payment
   */
  payment_method_reference?: string | null
  /**
   * Unique identifier for the payment method.
   * @type {string}
   * @memberof Payment
   */
  payment_method_id?: string | null
  /**
   * Type of accounts receivable account.
   * @type {string}
   * @memberof Payment
   */
  accounts_receivable_account_type?: string | null
  /**
   * Unique identifier for the account to allocate payment to.
   * @type {string}
   * @memberof Payment
   */
  accounts_receivable_account_id?: string | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof Payment
   */
  account?: LinkedLedgerAccount | null
  /**
   *
   * @type {LinkedCustomer}
   * @memberof Payment
   */
  customer?: LinkedCustomer | null
  /**
   *
   * @type {LinkedSupplier}
   * @memberof Payment
   */
  supplier?: LinkedSupplier | null
  /**
   * Payment has been reconciled
   * @type {boolean}
   * @memberof Payment
   */
  reconciled?: boolean
  /**
   * Status of payment
   * @type {string}
   * @memberof Payment
   */
  status?: PaymentStatus
  /**
   * Type of payment
   * @type {string}
   * @memberof Payment
   */
  type?: PaymentType
  /**
   *
   * @type {Array<PaymentAllocations>}
   * @memberof Payment
   */
  allocations?: Array<PaymentAllocations>
  /**
   * Optional note to be associated with the payment.
   * @type {string}
   * @memberof Payment
   */
  note?: string | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Payment
   */
  row_version?: string | null
  /**
   * Payment id to be displayed.
   * @type {string}
   * @memberof Payment
   */
  display_id?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Payment
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Payment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Payment
   */
  readonly created_at?: Date
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Payment
   */
  readonly updated_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum PaymentStatus {
  authorised = 'authorised',
  paid = 'paid',
  voided = 'voided',
  deleted = 'deleted'
}
/**
 * @export
 * @enum {string}
 */
export enum PaymentType {
  receivable = 'accounts_receivable',
  payable = 'accounts_payable',
  receivable_credit = 'accounts_receivable_credit',
  payable_credit = 'accounts_payable_credit',
  receivable_overpayment = 'accounts_receivable_overpayment',
  payable_overpayment = 'accounts_payable_overpayment',
  receivable_prepayment = 'accounts_receivable_prepayment',
  payable_prepayment = 'accounts_payable_prepayment'
}

export function PaymentFromJSON(json: any): Payment {
  return PaymentFromJSONTyped(json, false)
}

export function PaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payment {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    total_amount: json['total_amount'],
    transaction_date: new Date(json['transaction_date']),
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    payment_method_reference: !exists(json, 'payment_method_reference')
      ? undefined
      : json['payment_method_reference'],
    payment_method_id: !exists(json, 'payment_method_id') ? undefined : json['payment_method_id'],
    accounts_receivable_account_type: !exists(json, 'accounts_receivable_account_type')
      ? undefined
      : json['accounts_receivable_account_type'],
    accounts_receivable_account_id: !exists(json, 'accounts_receivable_account_id')
      ? undefined
      : json['accounts_receivable_account_id'],
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    customer: !exists(json, 'customer') ? undefined : LinkedCustomerFromJSON(json['customer']),
    supplier: !exists(json, 'supplier') ? undefined : LinkedSupplierFromJSON(json['supplier']),
    reconciled: !exists(json, 'reconciled') ? undefined : json['reconciled'],
    status: !exists(json, 'status') ? undefined : json['status'],
    type: !exists(json, 'type') ? undefined : json['type'],
    allocations: !exists(json, 'allocations')
      ? undefined
      : (json['allocations'] as Array<any>).map(PaymentAllocationsFromJSON),
    note: !exists(json, 'note') ? undefined : json['note'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function PaymentToJSON(value?: Payment | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total_amount: value.total_amount,
    transaction_date: new Date(value.transaction_date).toISOString(),
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    reference: value.reference,
    payment_method: value.payment_method,
    payment_method_reference: value.payment_method_reference,
    payment_method_id: value.payment_method_id,
    accounts_receivable_account_type: value.accounts_receivable_account_type,
    accounts_receivable_account_id: value.accounts_receivable_account_id,
    account: LinkedLedgerAccountToJSON(value.account),
    customer: LinkedCustomerToJSON(value.customer),
    supplier: LinkedSupplierToJSON(value.supplier),
    reconciled: value.reconciled,
    status: value.status,
    type: value.type,
    allocations:
      value.allocations === undefined
        ? undefined
        : (value.allocations as Array<any>).map(PaymentAllocationsToJSON),
    note: value.note,
    row_version: value.row_version,
    display_id: value.display_id
  }
}
