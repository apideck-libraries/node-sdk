/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { CompanyRowType, CompanyRowTypeFromJSON, CompanyRowTypeToJSON } from './CompanyRowType'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { SocialLink, SocialLinkFromJSON, SocialLinkToJSON } from './SocialLink'
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'
import { Website, WebsiteFromJSON, WebsiteToJSON } from './Website'

/**
 *
 * @export
 * @interface Company
 */
export interface Company {
  /**
   * Name of the company
   * @type {string}
   * @memberof Company
   */
  name: string
  /**
   * Unique identifier for the company
   * @type {string}
   * @memberof Company
   */
  readonly id?: string
  /**
   * Number of interactions
   * @type {number}
   * @memberof Company
   */
  readonly interaction_count?: number | null
  /**
   * Owner ID
   * @type {string}
   * @memberof Company
   */
  owner_id?: string | null
  /**
   * The Image URL of the company
   * @type {string}
   * @memberof Company
   */
  image?: string | null
  /**
   * A description of the company
   * @type {string}
   * @memberof Company
   */
  description?: string | null
  /**
   * The VAT number of the company
   * @type {string}
   * @memberof Company
   */
  vat_number?: string | null
  /**
   *
   * @type {Currency}
   * @memberof Company
   */
  currency?: Currency | null
  /**
   * The status of the company
   * @type {string}
   * @memberof Company
   */
  status?: string | null
  /**
   * The fax number of the company
   * @type {string}
   * @memberof Company
   */
  fax?: string | null
  /**
   * The annual revenue of the company
   * @type {string}
   * @memberof Company
   */
  annual_revenue?: string | null
  /**
   * Number of employees
   * @type {string}
   * @memberof Company
   */
  number_of_employees?: string | null
  /**
   * The industry represents the type of business the company is in.
   * @type {string}
   * @memberof Company
   */
  industry?: string | null
  /**
   * The ownership indicates the type of ownership of the company.
   * @type {string}
   * @memberof Company
   */
  ownership?: string | null
  /**
   * A sales tax number is a unique number that identifies a company for tax purposes.
   * @type {string}
   * @memberof Company
   */
  sales_tax_number?: string | null
  /**
   * A payee number is a unique number that identifies a payee for tax purposes.
   * @type {string}
   * @memberof Company
   */
  payee_number?: string | null
  /**
   * An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
   * @type {string}
   * @memberof Company
   */
  abn_or_tfn?: string | null
  /**
   * An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
   * @type {string}
   * @memberof Company
   */
  abn_branch?: string | null
  /**
   * The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
   * @type {string}
   * @memberof Company
   */
  acn?: string | null
  /**
   * The first name of the person.
   * @type {string}
   * @memberof Company
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof Company
   */
  last_name?: string | null
  /**
   * Parent ID
   * @type {string}
   * @memberof Company
   */
  readonly parent_id?: string | null
  /**
   *
   * @type {Array<BankAccount>}
   * @memberof Company
   */
  bank_accounts?: Array<BankAccount>
  /**
   *
   * @type {Array<Website>}
   * @memberof Company
   */
  websites?: Array<Website>
  /**
   *
   * @type {Array<Address>}
   * @memberof Company
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<SocialLink>}
   * @memberof Company
   */
  social_links?: Array<SocialLink>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Company
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof Company
   */
  emails?: Array<Email>
  /**
   *
   * @type {CompanyRowType}
   * @memberof Company
   */
  row_type?: CompanyRowType
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Company
   */
  custom_fields?: Array<CustomField>
  /**
   *
   * @type {Tags}
   * @memberof Company
   */
  tags?: Tags | null
  /**
   * Whether the company is read-only or not
   * @type {boolean}
   * @memberof Company
   */
  read_only?: boolean | null
  /**
   * Last activity date
   * @type {Date}
   * @memberof Company
   */
  readonly last_activity_at?: Date | null
  /**
   * Whether the company is deleted or not
   * @type {boolean}
   * @memberof Company
   */
  readonly deleted?: boolean
  /**
   * A formal salutation for the person. For example, 'Mr', 'Mrs'
   * @type {string}
   * @memberof Company
   */
  salutation?: string | null
  /**
   * The date of birth of the person.
   * @type {Date}
   * @memberof Company
   */
  birthday?: Date | null
  /**
   * Updated by user ID
   * @type {string}
   * @memberof Company
   */
  readonly updated_by?: string | null
  /**
   * Created by user ID
   * @type {string}
   * @memberof Company
   */
  readonly created_by?: string | null
  /**
   * Last updated date
   * @type {Date}
   * @memberof Company
   */
  readonly updated_at?: Date | null
  /**
   * Creation date
   * @type {Date}
   * @memberof Company
   */
  readonly created_at?: Date | null
}

export function CompanyFromJSON(json: any): Company {
  return CompanyFromJSONTyped(json, false)
}

export function CompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Company {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    id: !exists(json, 'id') ? undefined : json['id'],
    interaction_count: !exists(json, 'interaction_count') ? undefined : json['interaction_count'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    image: !exists(json, 'image') ? undefined : json['image'],
    description: !exists(json, 'description') ? undefined : json['description'],
    vat_number: !exists(json, 'vat_number') ? undefined : json['vat_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    status: !exists(json, 'status') ? undefined : json['status'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    annual_revenue: !exists(json, 'annual_revenue') ? undefined : json['annual_revenue'],
    number_of_employees: !exists(json, 'number_of_employees')
      ? undefined
      : json['number_of_employees'],
    industry: !exists(json, 'industry') ? undefined : json['industry'],
    ownership: !exists(json, 'ownership') ? undefined : json['ownership'],
    sales_tax_number: !exists(json, 'sales_tax_number') ? undefined : json['sales_tax_number'],
    payee_number: !exists(json, 'payee_number') ? undefined : json['payee_number'],
    abn_or_tfn: !exists(json, 'abn_or_tfn') ? undefined : json['abn_or_tfn'],
    abn_branch: !exists(json, 'abn_branch') ? undefined : json['abn_branch'],
    acn: !exists(json, 'acn') ? undefined : json['acn'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    bank_accounts: !exists(json, 'bank_accounts')
      ? undefined
      : (json['bank_accounts'] as Array<any>).map(BankAccountFromJSON),
    websites: !exists(json, 'websites')
      ? undefined
      : (json['websites'] as Array<any>).map(WebsiteFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    social_links: !exists(json, 'social_links')
      ? undefined
      : (json['social_links'] as Array<any>).map(SocialLinkFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    row_type: !exists(json, 'row_type') ? undefined : CompanyRowTypeFromJSON(json['row_type']),
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    read_only: !exists(json, 'read_only') ? undefined : json['read_only'],
    last_activity_at: !exists(json, 'last_activity_at')
      ? undefined
      : json['last_activity_at'] === null
      ? null
      : new Date(json['last_activity_at']),
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    salutation: !exists(json, 'salutation') ? undefined : json['salutation'],
    birthday: !exists(json, 'birthday')
      ? undefined
      : json['birthday'] === null
      ? null
      : new Date(json['birthday']),
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

export function CompanyToJSON(value?: Company | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    owner_id: value.owner_id,
    image: value.image,
    description: value.description,
    vat_number: value.vat_number,
    currency: CurrencyToJSON(value.currency),
    status: value.status,
    fax: value.fax,
    annual_revenue: value.annual_revenue,
    number_of_employees: value.number_of_employees,
    industry: value.industry,
    ownership: value.ownership,
    sales_tax_number: value.sales_tax_number,
    payee_number: value.payee_number,
    abn_or_tfn: value.abn_or_tfn,
    abn_branch: value.abn_branch,
    acn: value.acn,
    first_name: value.first_name,
    last_name: value.last_name,
    bank_accounts:
      value.bank_accounts === undefined
        ? undefined
        : (value.bank_accounts as Array<any>).map(BankAccountToJSON),
    websites:
      value.websites === undefined ? undefined : (value.websites as Array<any>).map(WebsiteToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    social_links:
      value.social_links === undefined
        ? undefined
        : (value.social_links as Array<any>).map(SocialLinkToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    row_type: CompanyRowTypeToJSON(value.row_type),
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    tags: TagsToJSON(value.tags),
    read_only: value.read_only,
    salutation: value.salutation,
    birthday:
      value.birthday === undefined
        ? undefined
        : value.birthday === null
        ? null
        : new Date(value.birthday).toISOString().substr(0, 10)
  }
}
