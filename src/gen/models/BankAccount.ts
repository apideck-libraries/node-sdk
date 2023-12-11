/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
  /**
   * The name of the bank
   * @type {string}
   * @memberof BankAccount
   */
  bank_name?: string | null
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
  /**
   * The type of bank account.
   * @type {string}
   * @memberof BankAccount
   */
  account_type?: BankAccountAccountType
  /**
   * The International Bank Account Number (IBAN).
   * @type {string}
   * @memberof BankAccount
   */
  iban?: string | null
  /**
   * The Bank Identifier Code (BIC).
   * @type {string}
   * @memberof BankAccount
   */
  bic?: string | null
  /**
   * A routing number is a nine-digit code used to identify a financial institution in the United States.
   * @type {string}
   * @memberof BankAccount
   */
  routing_number?: string | null
  /**
   * A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution.
   * @type {string}
   * @memberof BankAccount
   */
  bsb_number?: string | null
  /**
   * A branch identifier is a unique identifier for a branch of a bank or financial institution.
   * @type {string}
   * @memberof BankAccount
   */
  branch_identifier?: string | null
  /**
   * A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions.
   * @type {string}
   * @memberof BankAccount
   */
  bank_code?: string | null
  /**
   *
   * @type {Currency}
   * @memberof BankAccount
   */
  currency?: Currency | null
}

/**
 * @export
 * @enum {string}
 */
export enum BankAccountAccountType {
  bank_account = 'bank_account',
  credit_card = 'credit_card',
  other = 'other'
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
    account_number: !exists(json, 'account_number') ? undefined : json['account_number'],
    account_name: !exists(json, 'account_name') ? undefined : json['account_name'],
    account_type: !exists(json, 'account_type') ? undefined : json['account_type'],
    iban: !exists(json, 'iban') ? undefined : json['iban'],
    bic: !exists(json, 'bic') ? undefined : json['bic'],
    routing_number: !exists(json, 'routing_number') ? undefined : json['routing_number'],
    bsb_number: !exists(json, 'bsb_number') ? undefined : json['bsb_number'],
    branch_identifier: !exists(json, 'branch_identifier') ? undefined : json['branch_identifier'],
    bank_code: !exists(json, 'bank_code') ? undefined : json['bank_code'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency'])
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
    account_number: value.account_number,
    account_name: value.account_name,
    account_type: value.account_type,
    iban: value.iban,
    bic: value.bic,
    routing_number: value.routing_number,
    bsb_number: value.bsb_number,
    branch_identifier: value.branch_identifier,
    bank_code: value.bank_code,
    currency: CurrencyToJSON(value.currency)
  }
}
