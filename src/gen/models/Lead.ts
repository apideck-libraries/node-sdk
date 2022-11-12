/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.84.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
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
 * @interface Lead
 */
export interface Lead {
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  company_name: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  owner_id?: string
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  company_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  contact_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  lead_source?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  prefix?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  title?: string | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Lead
   */
  language?: string | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  status?: string | null
  /**
   *
   * @type {number}
   * @memberof Lead
   */
  monetary_amount?: number | null
  /**
   *
   * @type {Currency}
   * @memberof Lead
   */
  currency?: Currency | null
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  fax?: string | null
  /**
   *
   * @type {Array<Website>}
   * @memberof Lead
   */
  websites?: Array<Website>
  /**
   *
   * @type {Array<Address>}
   * @memberof Lead
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<SocialLink>}
   * @memberof Lead
   */
  social_links?: Array<SocialLink>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Lead
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof Lead
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Lead
   */
  custom_fields?: Array<CustomField>
  /**
   *
   * @type {Tags}
   * @memberof Lead
   */
  tags?: Tags
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  readonly updated_at?: string
  /**
   *
   * @type {string}
   * @memberof Lead
   */
  readonly created_at?: string
}

export function LeadFromJSON(json: any): Lead {
  return LeadFromJSONTyped(json, false)
}

export function LeadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Lead {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    company_name: json['company_name'],
    id: !exists(json, 'id') ? undefined : json['id'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    contact_id: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    lead_source: !exists(json, 'lead_source') ? undefined : json['lead_source'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    language: !exists(json, 'language') ? undefined : json['language'],
    status: !exists(json, 'status') ? undefined : json['status'],
    monetary_amount: !exists(json, 'monetary_amount') ? undefined : json['monetary_amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    fax: !exists(json, 'fax') ? undefined : json['fax'],
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
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at']
  }
}

export function LeadToJSON(value?: Lead | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    company_name: value.company_name,
    owner_id: value.owner_id,
    company_id: value.company_id,
    contact_id: value.contact_id,
    lead_source: value.lead_source,
    first_name: value.first_name,
    last_name: value.last_name,
    description: value.description,
    prefix: value.prefix,
    title: value.title,
    language: value.language,
    status: value.status,
    monetary_amount: value.monetary_amount,
    currency: CurrencyToJSON(value.currency),
    fax: value.fax,
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
