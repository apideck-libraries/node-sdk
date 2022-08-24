/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.42.0
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

/**
 *
 * @export
 * @interface Payment
 */
export interface Payment {
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
   * Unique identifier representing the entity
   * @type {string}
   * @memberof Payment
   */
  readonly id?: string
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
   * Payment method
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
   * @type {Array<object>}
   * @memberof Payment
   */
  allocations?: Array<object>
  /**
   * Optional note to be associated with the payment.
   * @type {string}
   * @memberof Payment
   */
  note?: string | null
  /**
   *
   * @type {string}
   * @memberof Payment
   */
  row_version?: string | null
  /**
   *
   * @type {Date}
   * @memberof Payment
   */
  readonly created_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Payment
   */
  readonly updated_at?: Date
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
    total_amount: json['total_amount'],
    transaction_date: new Date(json['transaction_date']),
    id: !exists(json, 'id') ? undefined : json['id'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    payment_method_reference: !exists(json, 'payment_method_reference')
      ? undefined
      : json['payment_method_reference'],
    accounts_receivable_account_type: !exists(json, 'accounts_receivable_account_type')
      ? undefined
      : json['accounts_receivable_account_type'],
    accounts_receivable_account_id: !exists(json, 'accounts_receivable_account_id')
      ? undefined
      : json['accounts_receivable_account_id'],
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    customer: !exists(json, 'customer') ? undefined : LinkedCustomerFromJSON(json['customer']),
    reconciled: !exists(json, 'reconciled') ? undefined : json['reconciled'],
    status: !exists(json, 'status') ? undefined : json['status'],
    type: !exists(json, 'type') ? undefined : json['type'],
    allocations: !exists(json, 'allocations') ? undefined : json['allocations'],
    note: !exists(json, 'note') ? undefined : json['note'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at'])
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
    accounts_receivable_account_type: value.accounts_receivable_account_type,
    accounts_receivable_account_id: value.accounts_receivable_account_id,
    account: LinkedLedgerAccountToJSON(value.account),
    customer: LinkedCustomerToJSON(value.customer),
    reconciled: value.reconciled,
    status: value.status,
    type: value.type,
    allocations: value.allocations,
    note: value.note,
    row_version: value.row_version
  }
}
