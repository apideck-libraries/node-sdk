/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
 * @export
 * @interface BankAccountAchDetails
 */
export interface BankAccountAchDetails {
  /**
   * The routing number for the bank account.
   * @type {string}
   * @memberof BankAccountAchDetails
   */
  routing_number?: string
  /**
   * The last few digits of the bank account number.
   * @type {string}
   * @memberof BankAccountAchDetails
   */
  account_number_suffix?: string
  /**
   * The type of the bank account performing the transfer. The account type can be `CHECKING`,
   * `SAVINGS`, or `UNKNOWN`.
   * @type {string}
   * @memberof BankAccountAchDetails
   */
  account_type?: string
}

export function BankAccountAchDetailsFromJSON(json: any): BankAccountAchDetails {
  return BankAccountAchDetailsFromJSONTyped(json, false)
}

export function BankAccountAchDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BankAccountAchDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    routing_number: !exists(json, 'routing_number') ? undefined : json['routing_number'],
    account_number_suffix: !exists(json, 'account_number_suffix')
      ? undefined
      : json['account_number_suffix'],
    account_type: !exists(json, 'account_type') ? undefined : json['account_type']
  }
}

export function BankAccountAchDetailsToJSON(value?: BankAccountAchDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    routing_number: value.routing_number,
    account_number_suffix: value.account_number_suffix,
    account_type: value.account_type
  }
}
