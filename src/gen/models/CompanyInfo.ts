/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.4
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
import { TaxRate, TaxRateFromJSON, TaxRateToJSON } from './TaxRate'

/**
 *
 * @export
 * @interface CompanyInfo
 */
export interface CompanyInfo {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof CompanyInfo
   */
  readonly id?: string
  /**
   * The name of the company.
   * @type {string}
   * @memberof CompanyInfo
   */
  company_name?: string | null
  /**
   * Based on the status some functionality is enabled or disabled.
   * @type {string}
   * @memberof CompanyInfo
   */
  status?: CompanyInfoStatus
  /**
   * The legal name of the company
   * @type {string}
   * @memberof CompanyInfo
   */
  legal_name?: string
  /**
   * country code according to ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof CompanyInfo
   */
  country?: string | null
  /**
   *
   * @type {string}
   * @memberof CompanyInfo
   */
  sales_tax_number?: string | null
  /**
   * Whether sales tax is calculated automatically for the company
   * @type {boolean}
   * @memberof CompanyInfo
   */
  automated_sales_tax?: boolean
  /**
   * Whether sales tax is enabled for the company
   * @type {boolean}
   * @memberof CompanyInfo
   */
  sales_tax_enabled?: boolean
  /**
   *
   * @type {TaxRate}
   * @memberof CompanyInfo
   */
  default_sales_tax?: TaxRate
  /**
   *
   * @type {Currency}
   * @memberof CompanyInfo
   */
  currency?: Currency | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof CompanyInfo
   */
  language?: string | null
  /**
   * The start month of fiscal year.
   * @type {string}
   * @memberof CompanyInfo
   */
  fiscal_year_start_month?: CompanyInfoFiscalYearStartMonth
  /**
   * Date when company file was created
   * @type {Date}
   * @memberof CompanyInfo
   */
  company_start_date?: Date
  /**
   *
   * @type {Array<Address>}
   * @memberof CompanyInfo
   */
  addresses?: Array<Address>
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
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof CompanyInfo
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof CompanyInfo
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof CompanyInfo
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof CompanyInfo
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof CompanyInfo
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof CompanyInfo
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum CompanyInfoStatus {
  active = 'active',
  inactive = 'inactive'
}
/**
 * @export
 * @enum {string}
 */
export enum CompanyInfoFiscalYearStartMonth {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December'
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
    status: !exists(json, 'status') ? undefined : json['status'],
    legal_name: !exists(json, 'legal_name') ? undefined : json['legal_name'],
    country: !exists(json, 'country') ? undefined : json['country'],
    sales_tax_number: !exists(json, 'sales_tax_number') ? undefined : json['sales_tax_number'],
    automated_sales_tax: !exists(json, 'automated_sales_tax')
      ? undefined
      : json['automated_sales_tax'],
    sales_tax_enabled: !exists(json, 'sales_tax_enabled') ? undefined : json['sales_tax_enabled'],
    default_sales_tax: !exists(json, 'default_sales_tax')
      ? undefined
      : TaxRateFromJSON(json['default_sales_tax']),
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    language: !exists(json, 'language') ? undefined : json['language'],
    fiscal_year_start_month: !exists(json, 'fiscal_year_start_month')
      ? undefined
      : json['fiscal_year_start_month'],
    company_start_date: !exists(json, 'company_start_date')
      ? undefined
      : new Date(json['company_start_date']),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
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
      : new Date(json['created_at'])
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
    company_name: value.company_name,
    status: value.status,
    legal_name: value.legal_name,
    country: value.country,
    sales_tax_number: value.sales_tax_number,
    automated_sales_tax: value.automated_sales_tax,
    sales_tax_enabled: value.sales_tax_enabled,
    default_sales_tax: TaxRateToJSON(value.default_sales_tax),
    currency: CurrencyToJSON(value.currency),
    language: value.language,
    fiscal_year_start_month: value.fiscal_year_start_month,
    company_start_date:
      value.company_start_date === undefined
        ? undefined
        : new Date(value.company_start_date).toISOString().substr(0, 10),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    row_version: value.row_version
  }
}
