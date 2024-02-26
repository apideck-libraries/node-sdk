/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { PaymentCard, PaymentCardFromJSON, PaymentCardToJSON } from './PaymentCard'

/**
 *
 * @export
 * @interface PosPaymentCardDetails
 */
export interface PosPaymentCardDetails {
  /**
   *
   * @type {PaymentCard}
   * @memberof PosPaymentCardDetails
   */
  card?: PaymentCard | null
}

export function PosPaymentCardDetailsFromJSON(json: any): PosPaymentCardDetails {
  return PosPaymentCardDetailsFromJSONTyped(json, false)
}

export function PosPaymentCardDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PosPaymentCardDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    card: !exists(json, 'card') ? undefined : PaymentCardFromJSON(json['card'])
  }
}

export function PosPaymentCardDetailsToJSON(value?: PosPaymentCardDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    card: PaymentCardToJSON(value.card)
  }
}
