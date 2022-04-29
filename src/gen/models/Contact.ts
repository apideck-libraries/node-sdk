/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.27.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { SocialLink, SocialLinkFromJSON, SocialLinkToJSON } from './SocialLink'
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'
import { Website, WebsiteFromJSON, WebsiteToJSON } from './Website'

/**
 *
 * @export
 * @interface Contact
 */
export interface Contact {
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  owner_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  type?: ContactType
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  company_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  company_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  lead_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  middle_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  prefix?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  suffix?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  title?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  department?: string | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Contact
   */
  language?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  gender?: ContactGender
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  birthday?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  image?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  photo_url?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  lead_source?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  fax?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  description?: string | null
  /**
   *
   * @type {number}
   * @memberof Contact
   */
  current_balance?: number | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  status?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Contact
   */
  active?: boolean | null
  /**
   *
   * @type {Array<Website>}
   * @memberof Contact
   */
  websites?: Array<Website>
  /**
   *
   * @type {Array<Address>}
   * @memberof Contact
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<SocialLink>}
   * @memberof Contact
   */
  social_links?: Array<SocialLink>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Contact
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof Contact
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Contact
   */
  custom_fields?: Array<CustomField>
  /**
   *
   * @type {Tags}
   * @memberof Contact
   */
  tags?: Tags
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly first_call_at?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly first_email_at?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly last_activity_at?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum ContactType {
  customer = 'customer',
  supplier = 'supplier',
  employee = 'employee',
  personal = 'personal'
}
/**
 * @export
 * @enum {string}
 */
export enum ContactGender {
  male = 'male',
  female = 'female',
  unisex = 'unisex'
}

export function ContactFromJSON(json: any): Contact {
  return ContactFromJSONTyped(json, false)
}

export function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    id: !exists(json, 'id') ? undefined : json['id'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    lead_id: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    department: !exists(json, 'department') ? undefined : json['department'],
    language: !exists(json, 'language') ? undefined : json['language'],
    gender: !exists(json, 'gender') ? undefined : json['gender'],
    birthday: !exists(json, 'birthday') ? undefined : json['birthday'],
    image: !exists(json, 'image') ? undefined : json['image'],
    photo_url: !exists(json, 'photo_url') ? undefined : json['photo_url'],
    lead_source: !exists(json, 'lead_source') ? undefined : json['lead_source'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    description: !exists(json, 'description') ? undefined : json['description'],
    current_balance: !exists(json, 'current_balance') ? undefined : json['current_balance'],
    status: !exists(json, 'status') ? undefined : json['status'],
    active: !exists(json, 'active') ? undefined : json['active'],
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
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    first_call_at: !exists(json, 'first_call_at')
      ? undefined
      : json['first_call_at'] === null
      ? null
      : new Date(json['first_call_at']),
    first_email_at: !exists(json, 'first_email_at')
      ? undefined
      : json['first_email_at'] === null
      ? null
      : new Date(json['first_email_at']),
    last_activity_at: !exists(json, 'last_activity_at')
      ? undefined
      : json['last_activity_at'] === null
      ? null
      : new Date(json['last_activity_at']),
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ContactToJSON(value?: Contact | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    owner_id: value.owner_id,
    type: value.type,
    company_id: value.company_id,
    company_name: value.company_name,
    lead_id: value.lead_id,
    first_name: value.first_name,
    middle_name: value.middle_name,
    last_name: value.last_name,
    prefix: value.prefix,
    suffix: value.suffix,
    title: value.title,
    department: value.department,
    language: value.language,
    gender: value.gender,
    birthday: value.birthday,
    image: value.image,
    photo_url: value.photo_url,
    lead_source: value.lead_source,
    fax: value.fax,
    description: value.description,
    current_balance: value.current_balance,
    status: value.status,
    active: value.active,
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
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    tags: TagsToJSON(value.tags)
  }
}
