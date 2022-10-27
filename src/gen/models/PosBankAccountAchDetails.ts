/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.73.0
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
 * @interface PosBankAccountAchDetails
 */
export interface PosBankAccountAchDetails {
  /**
   * The routing number for the bank account.
   * @type {string}
   * @memberof PosBankAccountAchDetails
   */
  routing_number?: string
  /**
   * The last few digits of the bank account number.
   * @type {string}
   * @memberof PosBankAccountAchDetails
   */
  account_number_suffix?: string
  /**
   * The type of the bank account performing the transfer. The account type can be `CHECKING`,
   * `SAVINGS`, or `UNKNOWN`.
   * @type {string}
   * @memberof PosBankAccountAchDetails
   */
  account_type?: string
}

export function PosBankAccountAchDetailsFromJSON(json: any): PosBankAccountAchDetails {
  return PosBankAccountAchDetailsFromJSONTyped(json, false)
}

export function PosBankAccountAchDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PosBankAccountAchDetails {
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

export function PosBankAccountAchDetailsToJSON(value?: PosBankAccountAchDetails | null): any {
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
