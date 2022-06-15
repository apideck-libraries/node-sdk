/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { Website, WebsiteFromJSON, WebsiteToJSON } from './Website'

/**
 *
 * @export
 * @interface HrisCompany
 */
export interface HrisCompany {
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  legal_name: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  display_name?: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  subdomain?: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  status?: HrisCompanyStatus
  /**
   * An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.
   * @type {string}
   * @memberof HrisCompany
   */
  company_number?: string | null
  /**
   *
   * @type {Array<Address>}
   * @memberof HrisCompany
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof HrisCompany
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof HrisCompany
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<Website>}
   * @memberof HrisCompany
   */
  websites?: Array<Website>
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  debtor_id?: string
  /**
   *
   * @type {boolean}
   * @memberof HrisCompany
   */
  readonly deleted?: boolean
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof HrisCompany
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof HrisCompany
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum HrisCompanyStatus {
  active = 'active',
  inactive = 'inactive',
  trial = 'trial',
  other = 'other'
}

export function HrisCompanyFromJSON(json: any): HrisCompany {
  return HrisCompanyFromJSONTyped(json, false)
}

export function HrisCompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): HrisCompany {
  if (json === undefined || json === null) {
    return json
  }
  return {
    legal_name: json['legal_name'],
    id: !exists(json, 'id') ? undefined : json['id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    subdomain: !exists(json, 'subdomain') ? undefined : json['subdomain'],
    status: !exists(json, 'status') ? undefined : json['status'],
    company_number: !exists(json, 'company_number') ? undefined : json['company_number'],
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
    debtor_id: !exists(json, 'debtor_id') ? undefined : json['debtor_id'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function HrisCompanyToJSON(value?: HrisCompany | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    legal_name: value.legal_name,
    display_name: value.display_name,
    subdomain: value.subdomain,
    status: value.status,
    company_number: value.company_number,
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
    debtor_id: value.debtor_id
  }
}
