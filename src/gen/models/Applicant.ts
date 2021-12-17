/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.10.1
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
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'

/**
 *
 * @export
 * @interface Applicant
 */
export interface Applicant {
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  readonly id?: string
  /**
   * The PositionId the applicant applied for.
   * @type {string}
   * @memberof Applicant
   */
  position_id?: string
  /**
   * The name of an applicant.
   * @type {string}
   * @memberof Applicant
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  last_name?: string | null
  /**
   * Typically a list of previous companies where the contact has worked or schools that the contact has attended
   * @type {string}
   * @memberof Applicant
   */
  headline?: string
  /**
   *
   * @type {Array<Email>}
   * @memberof Applicant
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Applicant
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Address>}
   * @memberof Applicant
   */
  addresses?: Array<Address>
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  readonly stage_id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof Applicant
   */
  applications?: Array<string> | null
  /**
   *
   * @type {Array<string>}
   * @memberof Applicant
   */
  followers?: Array<string> | null
  /**
   *
   * @type {Array<string>}
   * @memberof Applicant
   */
  sources?: Array<string> | null
  /**
   *
   * @type {boolean}
   * @memberof Applicant
   */
  confidential?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Applicant
   */
  anonymized?: boolean
  /**
   *
   * @type {Tags}
   * @memberof Applicant
   */
  tags?: Tags
  /**
   *
   * @type {boolean}
   * @memberof Applicant
   */
  archived?: boolean
  /**
   *
   * @type {Date}
   * @memberof Applicant
   */
  readonly last_interaction_at?: Date
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  owner_id?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  readonly sourced_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  readonly deleted_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Applicant
   */
  readonly deleted_at?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Applicant
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Applicant
   */
  readonly created_at?: Date
}

export function ApplicantFromJSON(json: any): Applicant {
  return ApplicantFromJSONTyped(json, false)
}

export function ApplicantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Applicant {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    position_id: !exists(json, 'position_id') ? undefined : json['position_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    headline: !exists(json, 'headline') ? undefined : json['headline'],
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    stage_id: !exists(json, 'stage_id') ? undefined : json['stage_id'],
    applications: !exists(json, 'applications') ? undefined : json['applications'],
    followers: !exists(json, 'followers') ? undefined : json['followers'],
    sources: !exists(json, 'sources') ? undefined : json['sources'],
    confidential: !exists(json, 'confidential') ? undefined : json['confidential'],
    anonymized: !exists(json, 'anonymized') ? undefined : json['anonymized'],
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    archived: !exists(json, 'archived') ? undefined : json['archived'],
    last_interaction_at: !exists(json, 'last_interaction_at')
      ? undefined
      : new Date(json['last_interaction_at']),
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    sourced_by: !exists(json, 'sourced_by') ? undefined : json['sourced_by'],
    deleted_by: !exists(json, 'deleted_by') ? undefined : json['deleted_by'],
    deleted_at: !exists(json, 'deleted_at')
      ? undefined
      : json['deleted_at'] === null
      ? null
      : new Date(json['deleted_at']),
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ApplicantToJSON(value?: Applicant | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    position_id: value.position_id,
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    headline: value.headline,
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    applications: value.applications,
    followers: value.followers,
    sources: value.sources,
    confidential: value.confidential,
    anonymized: value.anonymized,
    tags: TagsToJSON(value.tags),
    archived: value.archived,
    owner_id: value.owner_id
  }
}
