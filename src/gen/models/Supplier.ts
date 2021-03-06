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
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { Website, WebsiteFromJSON, WebsiteToJSON } from './Website'

/**
 *
 * @export
 * @interface Supplier
 */
export interface Supplier {
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  readonly id?: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Supplier
   */
  readonly downstream_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  company_name?: string | null
  /**
   * Display name of supplier.
   * @type {string}
   * @memberof Supplier
   */
  display_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  title?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  middle_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  suffix?: string | null
  /**
   *
   * @type {Array<Address>}
   * @memberof Supplier
   */
  addresses?: Array<Address>
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  notes?: string | null
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Supplier
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof Supplier
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<Website>}
   * @memberof Supplier
   */
  websites?: Array<Website>
  /**
   *
   * @type {Array<BankAccount>}
   * @memberof Supplier
   */
  bank_accounts?: Array<BankAccount>
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof Supplier
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  tax_number?: string | null
  /**
   *
   * @type {Currency}
   * @memberof Supplier
   */
  currency?: Currency | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof Supplier
   */
  account?: LinkedLedgerAccount | null
  /**
   * Customer status
   * @type {string}
   * @memberof Supplier
   */
  status?: SupplierStatus
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Supplier
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Supplier
   */
  readonly created_at?: Date
  /**
   *
   * @type {string}
   * @memberof Supplier
   */
  row_version?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum SupplierStatus {
  active = 'active',
  inactive = 'inactive',
  archived = 'archived',
  gdpr_erasure_request = 'gdpr-erasure-request',
  unknown = 'unknown'
}

export function SupplierFromJSON(json: any): Supplier {
  return SupplierFromJSONTyped(json, false)
}

export function SupplierFromJSONTyped(json: any, ignoreDiscriminator: boolean): Supplier {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    title: !exists(json, 'title') ? undefined : json['title'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
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
    bank_accounts: !exists(json, 'bank_accounts')
      ? undefined
      : (json['bank_accounts'] as Array<any>).map(BankAccountFromJSON),
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    tax_number: !exists(json, 'tax_number') ? undefined : json['tax_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    status: !exists(json, 'status') ? undefined : json['status'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version']
  }
}

export function SupplierToJSON(value?: Supplier | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_name: value.company_name,
    display_name: value.display_name,
    title: value.title,
    first_name: value.first_name,
    middle_name: value.middle_name,
    last_name: value.last_name,
    suffix: value.suffix,
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
    bank_accounts:
      value.bank_accounts === undefined
        ? undefined
        : (value.bank_accounts as Array<any>).map(BankAccountToJSON),
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    tax_number: value.tax_number,
    currency: CurrencyToJSON(value.currency),
    account: LinkedLedgerAccountToJSON(value.account),
    status: value.status,
    row_version: value.row_version
  }
}
