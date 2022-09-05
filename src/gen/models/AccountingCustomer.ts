/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.48.0
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
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { Website, WebsiteFromJSON, WebsiteToJSON } from './Website'

/**
 *
 * @export
 * @interface AccountingCustomer
 */
export interface AccountingCustomer {
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  readonly id?: string
  /**
   * Display ID
   * @type {string}
   * @memberof AccountingCustomer
   */
  display_id?: string | null
  /**
   * Display Name
   * @type {string}
   * @memberof AccountingCustomer
   */
  display_name?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  company_name?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  title?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  middle_name?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  suffix?: string | null
  /**
   * Is this an individual or business customer
   * @type {boolean}
   * @memberof AccountingCustomer
   */
  individual?: boolean | null
  /**
   *
   * @type {Array<Address>}
   * @memberof AccountingCustomer
   */
  addresses?: Array<Address>
  /**
   * Some notes about this customer
   * @type {string}
   * @memberof AccountingCustomer
   */
  notes?: string | null
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof AccountingCustomer
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof AccountingCustomer
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<Website>}
   * @memberof AccountingCustomer
   */
  websites?: Array<Website>
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof AccountingCustomer
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  tax_number?: string | null
  /**
   *
   * @type {Currency}
   * @memberof AccountingCustomer
   */
  currency?: Currency | null
  /**
   *
   * @type {Array<BankAccount>}
   * @memberof AccountingCustomer
   */
  bank_accounts?: Array<BankAccount>
  /**
   * Customer status
   * @type {string}
   * @memberof AccountingCustomer
   */
  status?: AccountingCustomerStatus
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  row_version?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof AccountingCustomer
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof AccountingCustomer
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof AccountingCustomer
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum AccountingCustomerStatus {
  active = 'active',
  inactive = 'inactive',
  archived = 'archived',
  gdpr_erasure_request = 'gdpr-erasure-request',
  unknown = 'unknown'
}

export function AccountingCustomerFromJSON(json: any): AccountingCustomer {
  return AccountingCustomerFromJSONTyped(json, false)
}

export function AccountingCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountingCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    title: !exists(json, 'title') ? undefined : json['title'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    individual: !exists(json, 'individual') ? undefined : json['individual'],
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    notes: !exists(json, 'notes') ? undefined : json['notes'],
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    websites: !exists(json, 'websites')
      ? undefined
      : (json['websites'] as Array<any>).map(WebsiteFromJSON),
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    tax_number: !exists(json, 'tax_number') ? undefined : json['tax_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    bank_accounts: !exists(json, 'bank_accounts')
      ? undefined
      : (json['bank_accounts'] as Array<any>).map(BankAccountFromJSON),
    status: !exists(json, 'status') ? undefined : json['status'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function AccountingCustomerToJSON(value?: AccountingCustomer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    display_id: value.display_id,
    display_name: value.display_name,
    company_name: value.company_name,
    title: value.title,
    first_name: value.first_name,
    middle_name: value.middle_name,
    last_name: value.last_name,
    suffix: value.suffix,
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
    websites:
      value.websites === undefined ? undefined : (value.websites as Array<any>).map(WebsiteToJSON),
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    tax_number: value.tax_number,
    currency: CurrencyToJSON(value.currency),
    bank_accounts:
      value.bank_accounts === undefined
        ? undefined
        : (value.bank_accounts as Array<any>).map(BankAccountToJSON),
    status: value.status,
    row_version: value.row_version
  }
}
