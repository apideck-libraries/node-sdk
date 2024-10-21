/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Cash details for this payment
 * @export
 * @interface CashDetails
 */
export interface CashDetails {
  /**
   * The amount of cash given by the customer.
   * @type {any}
   * @memberof CashDetails
   */
  amount?: any | null
  /**
   * The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields.
   * @type {any}
   * @memberof CashDetails
   */
  charge_back_amount?: any | null
}

export function CashDetailsFromJSON(json: any): CashDetails {
  return CashDetailsFromJSONTyped(json, false)
}

export function CashDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    charge_back_amount: !exists(json, 'charge_back_amount') ? undefined : json['charge_back_amount']
  }
}

export function CashDetailsToJSON(value?: CashDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    amount: value.amount,
    charge_back_amount: value.charge_back_amount
  }
}
