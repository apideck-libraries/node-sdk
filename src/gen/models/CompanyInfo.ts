/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface CompanyInfo
 */
export interface CompanyInfo {
  /**
   *
   * @type {string}
   * @memberof CompanyInfo
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof CompanyInfo
   */
  company_name?: string | null
  /**
   *
   * @type {string}
   * @memberof CompanyInfo
   */
  salex_tax_number?: string | null
  /**
   *
   * @type {Currency}
   * @memberof CompanyInfo
   */
  currency?: Currency | null
  /**
   *
   * @type {Array<Address>}
   * @memberof CompanyInfo
   */
  addressses?: Array<Address>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof CompanyInfo
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof CompanyInfo
   */
  emails?: Array<Email>
  /**
   *
   * @type {string}
   * @memberof CompanyInfo
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof CompanyInfo
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof CompanyInfo
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof CompanyInfo
   */
  readonly created_at?: Date
}

export function CompanyInfoFromJSON(json: any): CompanyInfo {
  return CompanyInfoFromJSONTyped(json, false)
}

export function CompanyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyInfo {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    salex_tax_number: !exists(json, 'salex_tax_number') ? undefined : json['salex_tax_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    addressses: !exists(json, 'addressses')
      ? undefined
      : (json['addressses'] as Array<any>).map(AddressFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function CompanyInfoToJSON(value?: CompanyInfo | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    company_name: value.company_name,
    salex_tax_number: value.salex_tax_number,
    currency: CurrencyToJSON(value.currency),
    addressses:
      value.addressses === undefined
        ? undefined
        : (value.addressses as Array<any>).map(AddressToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON)
  }
}
