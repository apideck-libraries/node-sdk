/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ActivityAttendee,
  ActivityAttendeeFromJSON,
  ActivityAttendeeToJSON
} from './ActivityAttendee'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'

/**
 *
 * @export
 * @interface Activity
 */
export interface Activity {
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  type: ActivityType
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly id?: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Activity
   */
  readonly downstream_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  activity_datetime?: string | null
  /**
   *
   * @type {number}
   * @memberof Activity
   */
  duration_seconds?: number | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  user_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  account_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  contact_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  company_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  opportunity_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  lead_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  owner_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  campaign_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  case_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  asset_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  contract_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  product_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  solution_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  custom_object_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  title?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  note?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  location?: string | null
  /**
   *
   * @type {Address}
   * @memberof Activity
   */
  location_address?: Address
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  all_day_event?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  _private?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  group_event?: boolean
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  event_sub_type?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  group_event_type?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  child?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  archived?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  deleted?: boolean
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  show_as?: ActivityShowAs
  /**
   * Whether the Activity is done or not
   * @type {boolean}
   * @memberof Activity
   */
  done?: boolean
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  start_datetime?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  end_datetime?: string | null
  /**
   *
   * @type {number}
   * @memberof Activity
   */
  readonly duration_minutes?: number | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  activity_date?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  end_date?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  recurrent?: boolean
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  reminder_datetime?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  reminder_set?: boolean | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  video_conference_url?: string
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  video_conference_id?: string
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Activity
   */
  custom_fields?: Array<CustomField>
  /**
   *
   * @type {Array<ActivityAttendee>}
   * @memberof Activity
   */
  attendees?: Array<ActivityAttendee>
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly created_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly updated_at?: string
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly created_at?: string
}

/**
 * @export
 * @enum {string}
 */
export enum ActivityType {
  call = 'call',
  meeting = 'meeting',
  email = 'email',
  note = 'note',
  task = 'task',
  deadline = 'deadline',
  send_letter = 'send-letter',
  send_quote = 'send-quote',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum ActivityShowAs {
  free = 'free',
  busy = 'busy'
}

export function ActivityFromJSON(json: any): Activity {
  return ActivityFromJSONTyped(json, false)
}

export function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: json['type'],
    id: !exists(json, 'id') ? undefined : json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    activity_datetime: !exists(json, 'activity_datetime') ? undefined : json['activity_datetime'],
    duration_seconds: !exists(json, 'duration_seconds') ? undefined : json['duration_seconds'],
    user_id: !exists(json, 'user_id') ? undefined : json['user_id'],
    account_id: !exists(json, 'account_id') ? undefined : json['account_id'],
    contact_id: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    opportunity_id: !exists(json, 'opportunity_id') ? undefined : json['opportunity_id'],
    lead_id: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    campaign_id: !exists(json, 'campaign_id') ? undefined : json['campaign_id'],
    case_id: !exists(json, 'case_id') ? undefined : json['case_id'],
    asset_id: !exists(json, 'asset_id') ? undefined : json['asset_id'],
    contract_id: !exists(json, 'contract_id') ? undefined : json['contract_id'],
    product_id: !exists(json, 'product_id') ? undefined : json['product_id'],
    solution_id: !exists(json, 'solution_id') ? undefined : json['solution_id'],
    custom_object_id: !exists(json, 'custom_object_id') ? undefined : json['custom_object_id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    note: !exists(json, 'note') ? undefined : json['note'],
    location: !exists(json, 'location') ? undefined : json['location'],
    location_address: !exists(json, 'location_address')
      ? undefined
      : AddressFromJSON(json['location_address']),
    all_day_event: !exists(json, 'all_day_event') ? undefined : json['all_day_event'],
    _private: !exists(json, 'private') ? undefined : json['private'],
    group_event: !exists(json, 'group_event') ? undefined : json['group_event'],
    event_sub_type: !exists(json, 'event_sub_type') ? undefined : json['event_sub_type'],
    group_event_type: !exists(json, 'group_event_type') ? undefined : json['group_event_type'],
    child: !exists(json, 'child') ? undefined : json['child'],
    archived: !exists(json, 'archived') ? undefined : json['archived'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    show_as: !exists(json, 'show_as') ? undefined : json['show_as'],
    done: !exists(json, 'done') ? undefined : json['done'],
    start_datetime: !exists(json, 'start_datetime') ? undefined : json['start_datetime'],
    end_datetime: !exists(json, 'end_datetime') ? undefined : json['end_datetime'],
    duration_minutes: !exists(json, 'duration_minutes') ? undefined : json['duration_minutes'],
    activity_date: !exists(json, 'activity_date') ? undefined : json['activity_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    recurrent: !exists(json, 'recurrent') ? undefined : json['recurrent'],
    reminder_datetime: !exists(json, 'reminder_datetime') ? undefined : json['reminder_datetime'],
    reminder_set: !exists(json, 'reminder_set') ? undefined : json['reminder_set'],
    video_conference_url: !exists(json, 'video_conference_url')
      ? undefined
      : json['video_conference_url'],
    video_conference_id: !exists(json, 'video_conference_id')
      ? undefined
      : json['video_conference_id'],
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    attendees: !exists(json, 'attendees')
      ? undefined
      : (json['attendees'] as Array<any>).map(ActivityAttendeeFromJSON),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at']
  }
}

export function ActivityToJSON(value?: Activity | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    activity_datetime: value.activity_datetime,
    duration_seconds: value.duration_seconds,
    user_id: value.user_id,
    account_id: value.account_id,
    contact_id: value.contact_id,
    company_id: value.company_id,
    opportunity_id: value.opportunity_id,
    lead_id: value.lead_id,
    owner_id: value.owner_id,
    campaign_id: value.campaign_id,
    case_id: value.case_id,
    asset_id: value.asset_id,
    contract_id: value.contract_id,
    product_id: value.product_id,
    solution_id: value.solution_id,
    custom_object_id: value.custom_object_id,
    title: value.title,
    description: value.description,
    note: value.note,
    location: value.location,
    location_address: AddressToJSON(value.location_address),
    all_day_event: value.all_day_event,
    private: value._private,
    group_event: value.group_event,
    event_sub_type: value.event_sub_type,
    group_event_type: value.group_event_type,
    child: value.child,
    archived: value.archived,
    deleted: value.deleted,
    show_as: value.show_as,
    done: value.done,
    start_datetime: value.start_datetime,
    end_datetime: value.end_datetime,
    activity_date: value.activity_date,
    end_date: value.end_date,
    recurrent: value.recurrent,
    reminder_datetime: value.reminder_datetime,
    reminder_set: value.reminder_set,
    video_conference_url: value.video_conference_url,
    video_conference_id: value.video_conference_id,
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    attendees:
      value.attendees === undefined
        ? undefined
        : (value.attendees as Array<any>).map(ActivityAttendeeToJSON)
  }
}
