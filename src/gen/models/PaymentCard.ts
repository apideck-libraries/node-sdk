/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.40.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'

/**
 * A card's non-confidential details.
 * @export
 * @interface PaymentCard
 */
export interface PaymentCard {
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  readonly id?: string
  /**
   * The first six digits of the card number, known as the Bank Identification Number (BIN).
   * @type {string}
   * @memberof PaymentCard
   */
  bin?: string | null
  /**
   * The first six digits of the card number, known as the Bank Identification Number (BIN).
   * @type {string}
   * @memberof PaymentCard
   */
  card_brand?: PaymentCardCardBrand
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  card_type?: PaymentCardCardType
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  prepaid_type?: PaymentCardPrepaidType
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  cardholder_name?: string | null
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  customer_id?: string | null
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  merchant_id?: string
  /**
   * The expiration month of the associated card as an integer between 1 and 12.
   * @type {number}
   * @memberof PaymentCard
   */
  exp_month?: number | null
  /**
   * The four-digit year of the card's expiration date.
   * @type {number}
   * @memberof PaymentCard
   */
  exp_year?: number | null
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  fingerprint?: string | null
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  last_4?: string | null
  /**
   * Indicates whether or not a card can be used for payments.
   * @type {boolean}
   * @memberof PaymentCard
   */
  enabled?: boolean | null
  /**
   *
   * @type {Address}
   * @memberof PaymentCard
   */
  billing_address?: Address
  /**
   * An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.
   * @type {string}
   * @memberof PaymentCard
   */
  reference_id?: string | null
  /**
   *
   * @type {string}
   * @memberof PaymentCard
   */
  version?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum PaymentCardCardBrand {
  visa = 'visa',
  mastercard = 'mastercard',
  amex = 'amex',
  discover = 'discover',
  discover_diners = 'discover-diners',
  jcb = 'jcb',
  china_unionpay = 'china-unionpay',
  square_gift_card = 'square-gift-card',
  square_capital_card = 'square-capital-card',
  interac = 'interac',
  eftpos = 'eftpos',
  felica = 'felica',
  ebt = 'ebt',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum PaymentCardCardType {
  credit = 'credit',
  debit = 'debit',
  prepaid = 'prepaid',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum PaymentCardPrepaidType {
  non_prepaid = 'non-prepaid',
  prepaid = 'prepaid',
  unknown = 'unknown'
}

export function PaymentCardFromJSON(json: any): PaymentCard {
  return PaymentCardFromJSONTyped(json, false)
}

export function PaymentCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCard {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    bin: !exists(json, 'bin') ? undefined : json['bin'],
    card_brand: !exists(json, 'card_brand') ? undefined : json['card_brand'],
    card_type: !exists(json, 'card_type') ? undefined : json['card_type'],
    prepaid_type: !exists(json, 'prepaid_type') ? undefined : json['prepaid_type'],
    cardholder_name: !exists(json, 'cardholder_name') ? undefined : json['cardholder_name'],
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    merchant_id: !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
    exp_month: !exists(json, 'exp_month') ? undefined : json['exp_month'],
    exp_year: !exists(json, 'exp_year') ? undefined : json['exp_year'],
    fingerprint: !exists(json, 'fingerprint') ? undefined : json['fingerprint'],
    last_4: !exists(json, 'last_4') ? undefined : json['last_4'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    billing_address: !exists(json, 'billing_address')
      ? undefined
      : AddressFromJSON(json['billing_address']),
    reference_id: !exists(json, 'reference_id') ? undefined : json['reference_id'],
    version: !exists(json, 'version') ? undefined : json['version']
  }
}

export function PaymentCardToJSON(value?: PaymentCard | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    bin: value.bin,
    card_brand: value.card_brand,
    card_type: value.card_type,
    prepaid_type: value.prepaid_type,
    cardholder_name: value.cardholder_name,
    customer_id: value.customer_id,
    merchant_id: value.merchant_id,
    exp_month: value.exp_month,
    exp_year: value.exp_year,
    fingerprint: value.fingerprint,
    last_4: value.last_4,
    enabled: value.enabled,
    billing_address: AddressToJSON(value.billing_address),
    reference_id: value.reference_id,
    version: value.version
  }
}
