/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ActivityAttendee
 */
export interface ActivityAttendee {
  /**
   * Unique identifier for the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  readonly id?: string | null
  /**
   * Full name of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  name?: string | null
  /**
   * First name of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  first_name?: string | null
  /**
   * Middle name of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  middle_name?: string | null
  /**
   * Last name of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  last_name?: string | null
  /**
   * Prefix of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  prefix?: string | null
  /**
   * Suffix of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  suffix?: string | null
  /**
   * Email address of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  email_address?: string | null
  /**
   * Whether the attendee is the organizer of the activity
   * @type {boolean}
   * @memberof ActivityAttendee
   */
  is_organizer?: boolean | null
  /**
   * Status of the attendee
   * @type {string}
   * @memberof ActivityAttendee
   */
  status?: ActivityAttendeeStatus
  /**
   * The identifier for a related user
   * @type {string}
   * @memberof ActivityAttendee
   */
  readonly user_id?: string | null
  /**
   * The identifier for a related contact
   * @type {string}
   * @memberof ActivityAttendee
   */
  readonly contact_id?: string | null
  /**
   * The last time the attendee was updated (ISO 8601)
   * @type {Date}
   * @memberof ActivityAttendee
   */
  readonly updated_at?: Date | null
  /**
   * The time the attendee was created (ISO 8601)
   * @type {Date}
   * @memberof ActivityAttendee
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum ActivityAttendeeStatus {
  accepted = 'accepted',
  tentative = 'tentative',
  declined = 'declined'
}

export function ActivityAttendeeFromJSON(json: any): ActivityAttendee {
  return ActivityAttendeeFromJSONTyped(json, false)
}

export function ActivityAttendeeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ActivityAttendee {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    email_address: !exists(json, 'email_address') ? undefined : json['email_address'],
    is_organizer: !exists(json, 'is_organizer') ? undefined : json['is_organizer'],
    status: !exists(json, 'status') ? undefined : json['status'],
    user_id: !exists(json, 'user_id') ? undefined : json['user_id'],
    contact_id: !exists(json, 'contact_id') ? undefined : json['contact_id'],
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

export function ActivityAttendeeToJSON(value?: ActivityAttendee | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    first_name: value.first_name,
    middle_name: value.middle_name,
    last_name: value.last_name,
    prefix: value.prefix,
    suffix: value.suffix,
    email_address: value.email_address,
    is_organizer: value.is_organizer,
    status: value.status
  }
}
