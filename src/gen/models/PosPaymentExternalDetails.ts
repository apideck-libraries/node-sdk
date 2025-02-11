/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Details about an external payment.
 * @export
 * @interface PosPaymentExternalDetails
 */
export interface PosPaymentExternalDetails {
  /**
   * The type of external payment the seller received. It can be one of the following:
   * - CHECK - Paid using a physical check.
   * - BANK_TRANSFER - Paid using external bank transfer.
   * - OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
   * - CRYPTO - Paid using a crypto currency.
   * - SQUARE_CASH - Paid using Square Cash App.
   * - SOCIAL - Paid using peer-to-peer payment applications.
   * - EXTERNAL - A third-party application gathered this payment outside of Square.
   * - EMONEY - Paid using an E-money provider.
   * - CARD - A credit or debit card that Square does not support.
   * - STORED_BALANCE - Use for house accounts, store credit, and so forth.
   * - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
   * - OTHER - A type not listed here.
   * @type {string}
   * @memberof PosPaymentExternalDetails
   */
  type: PosPaymentExternalDetailsType
  /**
   * A description of the external payment source. For example,
   * "Food Delivery Service".
   * @type {string}
   * @memberof PosPaymentExternalDetails
   */
  source: string
  /**
   * An ID to associate the payment to its originating source.
   * @type {string}
   * @memberof PosPaymentExternalDetails
   */
  source_id?: string
  /**
   * The fees paid to the source. The amount minus this field is the net amount seller receives.
   * @type {number}
   * @memberof PosPaymentExternalDetails
   */
  source_fee_amount?: number
}

/**
 * @export
 * @enum {string}
 */
export enum PosPaymentExternalDetailsType {
  check = 'check',
  bank_transfer = 'bank_transfer',
  other_gift_card = 'other_gift_card',
  crypto = 'crypto',
  square_cash = 'square_cash',
  social = 'social',
  external = 'external',
  emoney = 'emoney',
  card = 'card',
  stored_balance = 'stored_balance',
  food_voucher = 'food_voucher',
  other = 'other'
}

export function PosPaymentExternalDetailsFromJSON(json: any): PosPaymentExternalDetails {
  return PosPaymentExternalDetailsFromJSONTyped(json, false)
}

export function PosPaymentExternalDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PosPaymentExternalDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: json['type'],
    source: json['source'],
    source_id: !exists(json, 'source_id') ? undefined : json['source_id'],
    source_fee_amount: !exists(json, 'source_fee_amount') ? undefined : json['source_fee_amount']
  }
}

export function PosPaymentExternalDetailsToJSON(value?: PosPaymentExternalDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    source: value.source,
    source_id: value.source_id,
    source_fee_amount: value.source_fee_amount
  }
}
