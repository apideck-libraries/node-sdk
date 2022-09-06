/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.50.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface CustomerSupportCustomer
 */
export interface CustomerSupportCustomer {
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  company_name?: string | null
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  last_name?: string | null
  /**
   *
   * @type {boolean}
   * @memberof CustomerSupportCustomer
   */
  individual?: boolean | null
  /**
   *
   * @type {Array<Address>}
   * @memberof CustomerSupportCustomer
   */
  addresses?: Array<Address>
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  notes?: string | null
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof CustomerSupportCustomer
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof CustomerSupportCustomer
   */
  emails?: Array<Email>
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  tax_number?: string | null
  /**
   *
   * @type {Currency}
   * @memberof CustomerSupportCustomer
   */
  currency?: Currency | null
  /**
   *
   * @type {BankAccount}
   * @memberof CustomerSupportCustomer
   */
  bank_accounts?: BankAccount
  /**
   * Customer status
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  status?: CustomerSupportCustomerStatus
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof CustomerSupportCustomer
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof CustomerSupportCustomer
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof CustomerSupportCustomer
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum CustomerSupportCustomerStatus {
  active = 'active',
  archived = 'archived',
  gdpr_erasure_request = 'gdpr-erasure-request',
  unknown = 'unknown'
}

export function CustomerSupportCustomerFromJSON(json: any): CustomerSupportCustomer {
  return CustomerSupportCustomerFromJSONTyped(json, false)
}

export function CustomerSupportCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CustomerSupportCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    individual: !exists(json, 'individual') ? undefined : json['individual'],
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    notes: !exists(json, 'notes') ? undefined : json['notes'],
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    tax_number: !exists(json, 'tax_number') ? undefined : json['tax_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    bank_accounts: !exists(json, 'bank_accounts')
      ? undefined
      : BankAccountFromJSON(json['bank_accounts']),
    status: !exists(json, 'status') ? undefined : json['status'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function CustomerSupportCustomerToJSON(value?: CustomerSupportCustomer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_name: value.company_name,
    first_name: value.first_name,
    last_name: value.last_name,
    individual: value.individual,
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    notes: value.notes,
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    tax_number: value.tax_number,
    currency: CurrencyToJSON(value.currency),
    bank_accounts: BankAccountToJSON(value.bank_accounts),
    status: value.status
  }
}
