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
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { PaymentCard, PaymentCardFromJSON, PaymentCardToJSON } from './PaymentCard'

/**
 *
 * @export
 * @interface OrderTenders
 */
export interface OrderTenders {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderTenders
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof OrderTenders
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof OrderTenders
   */
  type?: OrderTendersType
  /**
   *
   * @type {string}
   * @memberof OrderTenders
   */
  note?: string
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  amount?: number
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  percentage?: number
  /**
   *
   * @type {Currency}
   * @memberof OrderTenders
   */
  currency?: Currency | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_tip?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_processing_fee?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_tax?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_discount?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_refund?: number | null
  /**
   *
   * @type {number}
   * @memberof OrderTenders
   */
  total_service_charge?: number | null
  /**
   * The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.
   * @type {number}
   * @memberof OrderTenders
   */
  buyer_tendered_cash_amount?: number | null
  /**
   * The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.
   * @type {number}
   * @memberof OrderTenders
   */
  change_back_cash_amount?: number | null
  /**
   *
   * @type {PaymentCard}
   * @memberof OrderTenders
   */
  card?: PaymentCard | null
  /**
   * The status of the card. Only applicable when the tender type is card.
   * @type {string}
   * @memberof OrderTenders
   */
  card_status?: OrderTendersCardStatus
  /**
   * The entry method of the card. Only applicable when the tender type is card.
   * @type {string}
   * @memberof OrderTenders
   */
  card_entry_method?: OrderTendersCardEntryMethod
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderTenders
   */
  readonly payment_id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderTenders
   */
  readonly location_id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderTenders
   */
  readonly transaction_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum OrderTendersType {
  cash = 'cash',
  card = 'card',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum OrderTendersCardStatus {
  authorized = 'authorized',
  captured = 'captured',
  failed = 'failed',
  voided = 'voided'
}
/**
 * @export
 * @enum {string}
 */
export enum OrderTendersCardEntryMethod {
  evm = 'evm',
  swiped = 'swiped',
  keyed = 'keyed',
  on_file = 'on-file',
  contactless = 'contactless'
}

export function OrderTendersFromJSON(json: any): OrderTenders {
  return OrderTendersFromJSONTyped(json, false)
}

export function OrderTendersFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderTenders {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    type: !exists(json, 'type') ? undefined : json['type'],
    note: !exists(json, 'note') ? undefined : json['note'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    percentage: !exists(json, 'percentage') ? undefined : json['percentage'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    total_tip: !exists(json, 'total_tip') ? undefined : json['total_tip'],
    total_processing_fee: !exists(json, 'total_processing_fee')
      ? undefined
      : json['total_processing_fee'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total_discount: !exists(json, 'total_discount') ? undefined : json['total_discount'],
    total_refund: !exists(json, 'total_refund') ? undefined : json['total_refund'],
    total_service_charge: !exists(json, 'total_service_charge')
      ? undefined
      : json['total_service_charge'],
    buyer_tendered_cash_amount: !exists(json, 'buyer_tendered_cash_amount')
      ? undefined
      : json['buyer_tendered_cash_amount'],
    change_back_cash_amount: !exists(json, 'change_back_cash_amount')
      ? undefined
      : json['change_back_cash_amount'],
    card: !exists(json, 'card') ? undefined : PaymentCardFromJSON(json['card']),
    card_status: !exists(json, 'card_status') ? undefined : json['card_status'],
    card_entry_method: !exists(json, 'card_entry_method') ? undefined : json['card_entry_method'],
    payment_id: !exists(json, 'payment_id') ? undefined : json['payment_id'],
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    transaction_id: !exists(json, 'transaction_id') ? undefined : json['transaction_id']
  }
}

export function OrderTendersToJSON(value?: OrderTenders | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    type: value.type,
    note: value.note,
    amount: value.amount,
    percentage: value.percentage,
    currency: CurrencyToJSON(value.currency),
    total_amount: value.total_amount,
    total_tip: value.total_tip,
    total_processing_fee: value.total_processing_fee,
    total_tax: value.total_tax,
    total_discount: value.total_discount,
    total_refund: value.total_refund,
    total_service_charge: value.total_service_charge,
    buyer_tendered_cash_amount: value.buyer_tendered_cash_amount,
    change_back_cash_amount: value.change_back_cash_amount,
    card: PaymentCardToJSON(value.card),
    card_status: value.card_status,
    card_entry_method: value.card_entry_method
  }
}
