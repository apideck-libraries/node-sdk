/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

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
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  companyId?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  companyName?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  leadId?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  firstName?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  middleName?: string | null
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  lastName?: string | null
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
  leadSource?: string | null
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
   * @type {string}
   * @memberof Contact
   */
  status?: string | null
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
  socialLinks?: Array<SocialLink>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Contact
   */
  phoneNumbers?: Array<PhoneNumber>
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
  customFields?: Array<CustomField>
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
  readonly firstCallAt?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly firstEmailAt?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly lastActivityAt?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly updatedAt?: Date
  /**
   *
   * @type {Date}
   * @memberof Contact
   */
  readonly createdAt?: Date
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
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    companyName: !exists(json, 'company_name') ? undefined : json['company_name'],
    leadId: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    firstName: !exists(json, 'first_name') ? undefined : json['first_name'],
    middleName: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    lastName: !exists(json, 'last_name') ? undefined : json['last_name'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    department: !exists(json, 'department') ? undefined : json['department'],
    language: !exists(json, 'language') ? undefined : json['language'],
    gender: !exists(json, 'gender') ? undefined : json['gender'],
    birthday: !exists(json, 'birthday') ? undefined : json['birthday'],
    image: !exists(json, 'image') ? undefined : json['image'],
    leadSource: !exists(json, 'lead_source') ? undefined : json['lead_source'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : json['status'],
    websites: !exists(json, 'websites')
      ? undefined
      : (json['websites'] as Array<any>).map(WebsiteFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    socialLinks: !exists(json, 'social_links')
      ? undefined
      : (json['social_links'] as Array<any>).map(SocialLinkFromJSON),
    phoneNumbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    customFields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    firstCallAt: !exists(json, 'first_call_at')
      ? undefined
      : json['first_call_at'] === null
      ? null
      : new Date(json['first_call_at']),
    firstEmailAt: !exists(json, 'first_email_at')
      ? undefined
      : json['first_email_at'] === null
      ? null
      : new Date(json['first_email_at']),
    lastActivityAt: !exists(json, 'last_activity_at')
      ? undefined
      : json['last_activity_at'] === null
      ? null
      : new Date(json['last_activity_at']),
    updatedAt: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    createdAt: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
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
    owner_id: value.ownerId,
    company_id: value.companyId,
    company_name: value.companyName,
    lead_id: value.leadId,
    first_name: value.firstName,
    middle_name: value.middleName,
    last_name: value.lastName,
    prefix: value.prefix,
    suffix: value.suffix,
    title: value.title,
    department: value.department,
    language: value.language,
    gender: value.gender,
    birthday: value.birthday,
    image: value.image,
    lead_source: value.leadSource,
    fax: value.fax,
    description: value.description,
    status: value.status,
    websites:
      value.websites === undefined ? undefined : (value.websites as Array<any>).map(WebsiteToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    social_links:
      value.socialLinks === undefined
        ? undefined
        : (value.socialLinks as Array<any>).map(SocialLinkToJSON),
    phone_numbers:
      value.phoneNumbers === undefined
        ? undefined
        : (value.phoneNumbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    custom_fields:
      value.customFields === undefined
        ? undefined
        : (value.customFields as Array<any>).map(CustomFieldToJSON),
    tags: TagsToJSON(value.tags)
  }
}
