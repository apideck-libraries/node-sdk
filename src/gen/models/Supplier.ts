/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { Website, WebsiteFromJSON, WebsiteToJSON } from './Website'

/**
 *
 * @export
 * @interface Supplier
 */
export interface Supplier {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Supplier
   */
  readonly id: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Supplier
   */
  readonly downstream_id?: string | null
  /**
   * Display ID
   * @type {string}
   * @memberof Supplier
   */
  display_id?: string | null
  /**
   * Display name
   * @type {string}
   * @memberof Supplier
   */
  display_name?: string | null
  /**
   * The name of the company.
   * @type {string}
   * @memberof Supplier
   */
  company_name?: string | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof Supplier
   */
  company_id?: string | null
  /**
   * The job title of the person.
   * @type {string}
   * @memberof Supplier
   */
  title?: string | null
  /**
   * The first name of the person.
   * @type {string}
   * @memberof Supplier
   */
  first_name?: string | null
  /**
   * Middle name of the person.
   * @type {string}
   * @memberof Supplier
   */
  middle_name?: string | null
  /**
   * The last name of the person.
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
   * Is this an individual or business supplier
   * @type {boolean}
   * @memberof Supplier
   */
  individual?: boolean | null
  /**
   *
   * @type {Array<Address>}
   * @memberof Supplier
   */
  addresses?: Array<Address>
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
   * Some notes about this supplier
   * @type {string}
   * @memberof Supplier
   */
  notes?: string | null
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
   * Supplier status
   * @type {string}
   * @memberof Supplier
   */
  status?: SupplierStatus
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   * @type {string}
   * @memberof Supplier
   */
  payment_method?: string | null
  /**
   * The channel through which the transaction is processed.
   * @type {string}
   * @memberof Supplier
   */
  channel?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Supplier
   */
  readonly custom_mappings?: object | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Supplier
   */
  custom_fields?: Array<CustomField>
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Supplier
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Supplier
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Supplier
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Supplier
   */
  readonly created_at?: Date | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Supplier
   */
  row_version?: string | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Supplier
   */
  pass_through?: PassThroughBody
  /**
   * The subsidiary the supplier belongs to.
   * @type {string}
   * @memberof Supplier
   */
  subsidiary_id?: string
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
    id: json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    individual: !exists(json, 'individual') ? undefined : json['individual'],
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
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
    notes: !exists(json, 'notes') ? undefined : json['notes'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    tax_number: !exists(json, 'tax_number') ? undefined : json['tax_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    status: !exists(json, 'status') ? undefined : json['status'],
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    channel: !exists(json, 'channel') ? undefined : json['channel'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through']),
    subsidiary_id: !exists(json, 'subsidiary_id') ? undefined : json['subsidiary_id']
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
    display_id: value.display_id,
    display_name: value.display_name,
    company_name: value.company_name,
    company_id: value.company_id,
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
    notes: value.notes,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    tax_number: value.tax_number,
    currency: CurrencyToJSON(value.currency),
    account: LinkedLedgerAccountToJSON(value.account),
    status: value.status,
    payment_method: value.payment_method,
    channel: value.channel,
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through),
    subsidiary_id: value.subsidiary_id
  }
}
