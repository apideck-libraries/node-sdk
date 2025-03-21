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
import {
  PosBankAccountAchDetails,
  PosBankAccountAchDetailsFromJSON,
  PosBankAccountAchDetailsToJSON
} from './PosBankAccountAchDetails'

/**
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
 * @export
 * @interface PosBankAccount
 */
export interface PosBankAccount {
  /**
   * The name of the bank associated with the bank account.
   * @type {string}
   * @memberof PosBankAccount
   */
  bank_name?: string
  /**
   * The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.
   * @type {string}
   * @memberof PosBankAccount
   */
  transfer_type?: string
  /**
   * The ownership type of the bank account performing the transfer.
   * The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.
   * @type {string}
   * @memberof PosBankAccount
   */
  account_ownership_type?: string
  /**
   * Uniquely identifies the bank account for this seller and can be used
   * to determine if payments are from the same bank account.
   * @type {string}
   * @memberof PosBankAccount
   */
  fingerprint?: string
  /**
   * Country code according to ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof PosBankAccount
   */
  country?: string | null
  /**
   * The statement description as sent to the bank.
   * @type {string}
   * @memberof PosBankAccount
   */
  statement_description?: string
  /**
   *
   * @type {PosBankAccountAchDetails}
   * @memberof PosBankAccount
   */
  ach_details?: PosBankAccountAchDetails
}

export function PosBankAccountFromJSON(json: any): PosBankAccount {
  return PosBankAccountFromJSONTyped(json, false)
}

export function PosBankAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PosBankAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    bank_name: !exists(json, 'bank_name') ? undefined : json['bank_name'],
    transfer_type: !exists(json, 'transfer_type') ? undefined : json['transfer_type'],
    account_ownership_type: !exists(json, 'account_ownership_type')
      ? undefined
      : json['account_ownership_type'],
    fingerprint: !exists(json, 'fingerprint') ? undefined : json['fingerprint'],
    country: !exists(json, 'country') ? undefined : json['country'],
    statement_description: !exists(json, 'statement_description')
      ? undefined
      : json['statement_description'],
    ach_details: !exists(json, 'ach_details')
      ? undefined
      : PosBankAccountAchDetailsFromJSON(json['ach_details'])
  }
}

export function PosBankAccountToJSON(value?: PosBankAccount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    bank_name: value.bank_name,
    transfer_type: value.transfer_type,
    account_ownership_type: value.account_ownership_type,
    fingerprint: value.fingerprint,
    country: value.country,
    statement_description: value.statement_description,
    ach_details: PosBankAccountAchDetailsToJSON(value.ach_details)
  }
}
