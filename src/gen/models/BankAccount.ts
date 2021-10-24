/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
  /**
   *
   * @type {string}
   * @memberof BankAccount
   */
  iban?: string | null
  /**
   *
   * @type {string}
   * @memberof BankAccount
   */
  bic?: string | null
  /**
   * A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution.
   * @type {string}
   * @memberof BankAccount
   */
  bsb_number?: string | null
  /**
   * A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions.
   * @type {string}
   * @memberof BankAccount
   */
  bank_code?: string | null
  /**
   * A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number.
   * @type {string}
   * @memberof BankAccount
   */
  account_number?: string | null
  /**
   * The name which you used in opening your bank account.
   * @type {string}
   * @memberof BankAccount
   */
  account_name?: string | null
}

export function BankAccountFromJSON(json: any): BankAccount {
  return BankAccountFromJSONTyped(json, false)
}

export function BankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    iban: !exists(json, 'iban') ? undefined : json['iban'],
    bic: !exists(json, 'bic') ? undefined : json['bic'],
    bsb_number: !exists(json, 'bsb_number') ? undefined : json['bsb_number'],
    bank_code: !exists(json, 'bank_code') ? undefined : json['bank_code'],
    account_number: !exists(json, 'account_number') ? undefined : json['account_number'],
    account_name: !exists(json, 'account_name') ? undefined : json['account_name']
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
    iban: value.iban,
    bic: value.bic,
    bsb_number: value.bsb_number,
    bank_code: value.bank_code,
    account_number: value.account_number,
    account_name: value.account_name
  }
}
