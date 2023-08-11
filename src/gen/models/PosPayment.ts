/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.8.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CashDetails, CashDetailsFromJSON, CashDetailsToJSON } from './CashDetails'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { PosBankAccount, PosBankAccountFromJSON, PosBankAccountToJSON } from './PosBankAccount'
import {
  PosPaymentCardDetails,
  PosPaymentCardDetailsFromJSON,
  PosPaymentCardDetailsToJSON
} from './PosPaymentCardDetails'
import {
  PosPaymentExternalDetails,
  PosPaymentExternalDetailsFromJSON,
  PosPaymentExternalDetailsToJSON
} from './PosPaymentExternalDetails'
import { ServiceCharges, ServiceChargesFromJSON, ServiceChargesToJSON } from './ServiceCharges'
import { WalletDetails, WalletDetailsFromJSON, WalletDetailsToJSON } from './WalletDetails'

/**
 *
 * @export
 * @interface PosPayment
 */
export interface PosPayment {
  /**
   * The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.
   * @type {string}
   * @memberof PosPayment
   */
  source_id: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  order_id: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  customer_id: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  tender_id: string
  /**
   *
   * @type {number}
   * @memberof PosPayment
   */
  amount: number
  /**
   *
   * @type {Currency}
   * @memberof PosPayment
   */
  currency: Currency | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof PosPayment
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  merchant_id?: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  employee_id?: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  location_id?: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  device_id?: string
  /**
   *
   * @type {string}
   * @memberof PosPayment
   */
  external_payment_id?: string
  /**
   * A value you specify that uniquely identifies this request among requests you have sent.
   * @type {string}
   * @memberof PosPayment
   */
  idempotency_key?: string
  /**
   *
   * @type {number}
   * @memberof PosPayment
   */
  tip?: number
  /**
   *
   * @type {number}
   * @memberof PosPayment
   */
  tax?: number
  /**
   *
   * @type {number}
   * @memberof PosPayment
   */
  total?: number
  /**
   * The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.
   * @type {number}
   * @memberof PosPayment
   */
  app_fee?: number
  /**
   *
   * @type {number}
   * @memberof PosPayment
   */
  change_back_cash_amount?: number
  /**
   * The initial amount of money approved for this payment.
   * @type {number}
   * @memberof PosPayment
   */
  approved?: number
  /**
   * The initial amount of money approved for this payment.
   * @type {number}
   * @memberof PosPayment
   */
  refunded?: number
  /**
   *
   * @type {Array<object>}
   * @memberof PosPayment
   */
  processing_fees?: Array<object>
  /**
   * Source of this payment.
   * @type {string}
   * @memberof PosPayment
   */
  source?: PosPaymentSource
  /**
   * Status of this payment.
   * @type {string}
   * @memberof PosPayment
   */
  status?: PosPaymentStatus
  /**
   *
   * @type {CashDetails}
   * @memberof PosPayment
   */
  cash?: CashDetails
  /**
   *
   * @type {PosPaymentCardDetails}
   * @memberof PosPayment
   */
  card_details?: PosPaymentCardDetails
  /**
   *
   * @type {PosBankAccount}
   * @memberof PosPayment
   */
  bank_account?: PosBankAccount
  /**
   *
   * @type {WalletDetails}
   * @memberof PosPayment
   */
  wallet?: WalletDetails
  /**
   *
   * @type {PosPaymentExternalDetails}
   * @memberof PosPayment
   */
  external_details?: PosPaymentExternalDetails
  /**
   *
   * @type {ServiceCharges}
   * @memberof PosPayment
   */
  service_charges?: ServiceCharges
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof PosPayment
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof PosPayment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof PosPayment
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof PosPayment
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum PosPaymentSource {
  card = 'card',
  bank_account = 'bank_account',
  wallet = 'wallet',
  bnpl = 'bnpl',
  cash = 'cash',
  external = 'external',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum PosPaymentStatus {
  approved = 'approved',
  pending = 'pending',
  completed = 'completed',
  canceled = 'canceled',
  failed = 'failed',
  other = 'other'
}

export function PosPaymentFromJSON(json: any): PosPayment {
  return PosPaymentFromJSONTyped(json, false)
}

export function PosPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PosPayment {
  if (json === undefined || json === null) {
    return json
  }
  return {
    source_id: json['source_id'],
    order_id: json['order_id'],
    customer_id: json['customer_id'],
    tender_id: json['tender_id'],
    amount: json['amount'],
    currency: CurrencyFromJSON(json['currency']),
    id: !exists(json, 'id') ? undefined : json['id'],
    merchant_id: !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    device_id: !exists(json, 'device_id') ? undefined : json['device_id'],
    external_payment_id: !exists(json, 'external_payment_id')
      ? undefined
      : json['external_payment_id'],
    idempotency_key: !exists(json, 'idempotency_key') ? undefined : json['idempotency_key'],
    tip: !exists(json, 'tip') ? undefined : json['tip'],
    tax: !exists(json, 'tax') ? undefined : json['tax'],
    total: !exists(json, 'total') ? undefined : json['total'],
    app_fee: !exists(json, 'app_fee') ? undefined : json['app_fee'],
    change_back_cash_amount: !exists(json, 'change_back_cash_amount')
      ? undefined
      : json['change_back_cash_amount'],
    approved: !exists(json, 'approved') ? undefined : json['approved'],
    refunded: !exists(json, 'refunded') ? undefined : json['refunded'],
    processing_fees: !exists(json, 'processing_fees') ? undefined : json['processing_fees'],
    source: !exists(json, 'source') ? undefined : json['source'],
    status: !exists(json, 'status') ? undefined : json['status'],
    cash: !exists(json, 'cash') ? undefined : CashDetailsFromJSON(json['cash']),
    card_details: !exists(json, 'card_details')
      ? undefined
      : PosPaymentCardDetailsFromJSON(json['card_details']),
    bank_account: !exists(json, 'bank_account')
      ? undefined
      : PosBankAccountFromJSON(json['bank_account']),
    wallet: !exists(json, 'wallet') ? undefined : WalletDetailsFromJSON(json['wallet']),
    external_details: !exists(json, 'external_details')
      ? undefined
      : PosPaymentExternalDetailsFromJSON(json['external_details']),
    service_charges: !exists(json, 'service_charges')
      ? undefined
      : ServiceChargesFromJSON(json['service_charges']),
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

export function PosPaymentToJSON(value?: PosPayment | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    source_id: value.source_id,
    order_id: value.order_id,
    customer_id: value.customer_id,
    tender_id: value.tender_id,
    amount: value.amount,
    currency: CurrencyToJSON(value.currency),
    merchant_id: value.merchant_id,
    employee_id: value.employee_id,
    location_id: value.location_id,
    device_id: value.device_id,
    external_payment_id: value.external_payment_id,
    idempotency_key: value.idempotency_key,
    tip: value.tip,
    tax: value.tax,
    total: value.total,
    app_fee: value.app_fee,
    change_back_cash_amount: value.change_back_cash_amount,
    approved: value.approved,
    refunded: value.refunded,
    processing_fees: value.processing_fees,
    source: value.source,
    status: value.status,
    cash: CashDetailsToJSON(value.cash),
    card_details: PosPaymentCardDetailsToJSON(value.card_details),
    bank_account: PosBankAccountToJSON(value.bank_account),
    wallet: WalletDetailsToJSON(value.wallet),
    external_details: PosPaymentExternalDetailsToJSON(value.external_details),
    service_charges: ServiceChargesToJSON(value.service_charges)
  }
}
