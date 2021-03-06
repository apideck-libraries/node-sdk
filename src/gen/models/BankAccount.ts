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
import {
  BankAccountAchDetails,
  BankAccountAchDetailsFromJSON,
  BankAccountAchDetailsToJSON
} from './BankAccountAchDetails'

/**
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
  /**
   * The name of the bank associated with the bank account.
   * @type {string}
   * @memberof BankAccount
   */
  bank_name?: string
  /**
   * The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.
   * @type {string}
   * @memberof BankAccount
   */
  transfer_type?: string
  /**
   * The ownership type of the bank account performing the transfer.
   * The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.
   * @type {string}
   * @memberof BankAccount
   */
  account_ownership_type?: string
  /**
   * Uniquely identifies the bank account for this seller and can be used
   * to determine if payments are from the same bank account.
   * @type {string}
   * @memberof BankAccount
   */
  fingerprint?: string
  /**
   * country code according to ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof BankAccount
   */
  country?: string | null
  /**
   * The statement description as sent to the bank.
   * @type {string}
   * @memberof BankAccount
   */
  statement_description?: string
  /**
   *
   * @type {BankAccountAchDetails}
   * @memberof BankAccount
   */
  ach_details?: BankAccountAchDetails
}

export function BankAccountFromJSON(json: any): BankAccount {
  return BankAccountFromJSONTyped(json, false)
}

export function BankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccount {
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
      : BankAccountAchDetailsFromJSON(json['ach_details'])
  }
}

export function BankAccountToJSON(value?: BankAccount | null): any {
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
    ach_details: BankAccountAchDetailsToJSON(value.ach_details)
  }
}
