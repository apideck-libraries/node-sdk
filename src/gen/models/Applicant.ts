/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.8.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import {
  ApplicantSocialLinks,
  ApplicantSocialLinksFromJSON,
  ApplicantSocialLinksToJSON
} from './ApplicantSocialLinks'
import {
  ApplicantWebsites,
  ApplicantWebsitesFromJSON,
  ApplicantWebsitesToJSON
} from './ApplicantWebsites'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
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
   * A unique identifier for an object.
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
   * The first name of the person.
   * @type {string}
   * @memberof Applicant
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof Applicant
   */
  last_name?: string | null
  /**
   * Middle name of the person.
   * @type {string}
   * @memberof Applicant
   */
  middle_name?: string | null
  /**
   * The initials of the person, usually derived from their first, middle, and last names.
   * @type {string}
   * @memberof Applicant
   */
  initials?: string | null
  /**
   * The date of birth of the person.
   * @type {Date}
   * @memberof Applicant
   */
  birthday?: Date | null
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  cover_letter?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  readonly job_url?: string | null
  /**
   * The URL of the photo of a person.
   * @type {string}
   * @memberof Applicant
   */
  photo_url?: string | null
  /**
   * Typically a list of previous companies where the contact has worked or schools that the contact has attended
   * @type {string}
   * @memberof Applicant
   */
  headline?: string
  /**
   * The job title of the person.
   * @type {string}
   * @memberof Applicant
   */
  title?: string | null
  /**
   *
   * @type {Array<Email>}
   * @memberof Applicant
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Applicant
   */
  custom_fields?: Array<CustomField>
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
   * @type {Array<ApplicantWebsites>}
   * @memberof Applicant
   */
  websites?: Array<ApplicantWebsites>
  /**
   *
   * @type {Array<ApplicantSocialLinks>}
   * @memberof Applicant
   */
  social_links?: Array<ApplicantSocialLinks>
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  stage_id?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  recruiter_id?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  coordinator_id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof Applicant
   */
  application_ids?: Array<string> | null
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
   * @type {string}
   * @memberof Applicant
   */
  readonly source_id?: string
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
  tags?: Tags | null
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
  readonly last_interaction_at?: Date | null
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  owner_id?: string | null
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
  readonly cv_url?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  record_url?: string | null
  /**
   *
   * @type {Date}
   * @memberof Applicant
   */
  readonly rejected_at?: Date | null
  /**
   *
   * @type {boolean}
   * @memberof Applicant
   */
  deleted?: boolean | null
  /**
   * The user who deleted the object.
   * @type {string}
   * @memberof Applicant
   */
  readonly deleted_by?: string | null
  /**
   * The time at which the object was deleted.
   * @type {Date}
   * @memberof Applicant
   */
  readonly deleted_at?: Date | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Applicant
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Applicant
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Applicant
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Applicant
   */
  readonly created_at?: Date | null
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
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    initials: !exists(json, 'initials') ? undefined : json['initials'],
    birthday: !exists(json, 'birthday')
      ? undefined
      : json['birthday'] === null
      ? null
      : new Date(json['birthday']),
    cover_letter: !exists(json, 'cover_letter') ? undefined : json['cover_letter'],
    job_url: !exists(json, 'job_url') ? undefined : json['job_url'],
    photo_url: !exists(json, 'photo_url') ? undefined : json['photo_url'],
    headline: !exists(json, 'headline') ? undefined : json['headline'],
    title: !exists(json, 'title') ? undefined : json['title'],
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    websites: !exists(json, 'websites')
      ? undefined
      : (json['websites'] as Array<any>).map(ApplicantWebsitesFromJSON),
    social_links: !exists(json, 'social_links')
      ? undefined
      : (json['social_links'] as Array<any>).map(ApplicantSocialLinksFromJSON),
    stage_id: !exists(json, 'stage_id') ? undefined : json['stage_id'],
    recruiter_id: !exists(json, 'recruiter_id') ? undefined : json['recruiter_id'],
    coordinator_id: !exists(json, 'coordinator_id') ? undefined : json['coordinator_id'],
    application_ids: !exists(json, 'application_ids') ? undefined : json['application_ids'],
    applications: !exists(json, 'applications') ? undefined : json['applications'],
    followers: !exists(json, 'followers') ? undefined : json['followers'],
    sources: !exists(json, 'sources') ? undefined : json['sources'],
    source_id: !exists(json, 'source_id') ? undefined : json['source_id'],
    confidential: !exists(json, 'confidential') ? undefined : json['confidential'],
    anonymized: !exists(json, 'anonymized') ? undefined : json['anonymized'],
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    archived: !exists(json, 'archived') ? undefined : json['archived'],
    last_interaction_at: !exists(json, 'last_interaction_at')
      ? undefined
      : json['last_interaction_at'] === null
      ? null
      : new Date(json['last_interaction_at']),
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    sourced_by: !exists(json, 'sourced_by') ? undefined : json['sourced_by'],
    cv_url: !exists(json, 'cv_url') ? undefined : json['cv_url'],
    record_url: !exists(json, 'record_url') ? undefined : json['record_url'],
    rejected_at: !exists(json, 'rejected_at')
      ? undefined
      : json['rejected_at'] === null
      ? null
      : new Date(json['rejected_at']),
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    deleted_by: !exists(json, 'deleted_by') ? undefined : json['deleted_by'],
    deleted_at: !exists(json, 'deleted_at')
      ? undefined
      : json['deleted_at'] === null
      ? null
      : new Date(json['deleted_at']),
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
    middle_name: value.middle_name,
    initials: value.initials,
    birthday:
      value.birthday === undefined
        ? undefined
        : value.birthday === null
        ? null
        : new Date(value.birthday).toISOString().substr(0, 10),
    cover_letter: value.cover_letter,
    photo_url: value.photo_url,
    headline: value.headline,
    title: value.title,
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    websites:
      value.websites === undefined
        ? undefined
        : (value.websites as Array<any>).map(ApplicantWebsitesToJSON),
    social_links:
      value.social_links === undefined
        ? undefined
        : (value.social_links as Array<any>).map(ApplicantSocialLinksToJSON),
    stage_id: value.stage_id,
    recruiter_id: value.recruiter_id,
    coordinator_id: value.coordinator_id,
    application_ids: value.application_ids,
    applications: value.applications,
    followers: value.followers,
    sources: value.sources,
    confidential: value.confidential,
    anonymized: value.anonymized,
    tags: TagsToJSON(value.tags),
    archived: value.archived,
    owner_id: value.owner_id,
    record_url: value.record_url,
    deleted: value.deleted
  }
}
