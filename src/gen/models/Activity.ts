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
   *
   * @type {string}
   * @memberof Activity
   */
  activityDatetime?: string | null
  /**
   *
   * @type {number}
   * @memberof Activity
   */
  durationSeconds?: number | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  accountId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  contactId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  companyId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  opportunityId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  leadId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  campaignId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  caseId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  assetId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  contractId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  productId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  solutionId?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  customObjectId?: string | null
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
  location?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  allDayEvent?: boolean
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
  groupEvent?: boolean
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  eventSubType?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  groupEventType?: string | null
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
  showAs?: ActivityShowAs
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  activityDate?: string | null
  /**
   *
   * @type {number}
   * @memberof Activity
   */
  durationMinutes?: number | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  startDatetime?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  endDatetime?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  endDate?: string | null
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
  reminderDatetime?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Activity
   */
  reminderSet?: boolean | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Activity
   */
  customFields?: Array<CustomField>
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly updatedBy?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly createdBy?: string | null
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly updatedAt?: string
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  readonly createdAt?: string
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
  sendLetter = 'send-letter',
  sendQuote = 'send-quote',
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
    activityDatetime: !exists(json, 'activity_datetime') ? undefined : json['activity_datetime'],
    durationSeconds: !exists(json, 'duration_seconds') ? undefined : json['duration_seconds'],
    accountId: !exists(json, 'account_id') ? undefined : json['account_id'],
    contactId: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    opportunityId: !exists(json, 'opportunity_id') ? undefined : json['opportunity_id'],
    leadId: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    campaignId: !exists(json, 'campaign_id') ? undefined : json['campaign_id'],
    caseId: !exists(json, 'case_id') ? undefined : json['case_id'],
    assetId: !exists(json, 'asset_id') ? undefined : json['asset_id'],
    contractId: !exists(json, 'contract_id') ? undefined : json['contract_id'],
    productId: !exists(json, 'product_id') ? undefined : json['product_id'],
    solutionId: !exists(json, 'solution_id') ? undefined : json['solution_id'],
    customObjectId: !exists(json, 'custom_object_id') ? undefined : json['custom_object_id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    location: !exists(json, 'location') ? undefined : json['location'],
    allDayEvent: !exists(json, 'all_day_event') ? undefined : json['all_day_event'],
    _private: !exists(json, 'private') ? undefined : json['private'],
    groupEvent: !exists(json, 'group_event') ? undefined : json['group_event'],
    eventSubType: !exists(json, 'event_sub_type') ? undefined : json['event_sub_type'],
    groupEventType: !exists(json, 'group_event_type') ? undefined : json['group_event_type'],
    child: !exists(json, 'child') ? undefined : json['child'],
    archived: !exists(json, 'archived') ? undefined : json['archived'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    showAs: !exists(json, 'show_as') ? undefined : json['show_as'],
    activityDate: !exists(json, 'activity_date') ? undefined : json['activity_date'],
    durationMinutes: !exists(json, 'duration_minutes') ? undefined : json['duration_minutes'],
    startDatetime: !exists(json, 'start_datetime') ? undefined : json['start_datetime'],
    endDatetime: !exists(json, 'end_datetime') ? undefined : json['end_datetime'],
    endDate: !exists(json, 'end_date') ? undefined : json['end_date'],
    recurrent: !exists(json, 'recurrent') ? undefined : json['recurrent'],
    reminderDatetime: !exists(json, 'reminder_datetime') ? undefined : json['reminder_datetime'],
    reminderSet: !exists(json, 'reminder_set') ? undefined : json['reminder_set'],
    customFields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    updatedBy: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    createdBy: !exists(json, 'created_by') ? undefined : json['created_by'],
    updatedAt: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    createdAt: !exists(json, 'created_at') ? undefined : json['created_at']
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
    activity_datetime: value.activityDatetime,
    duration_seconds: value.durationSeconds,
    account_id: value.accountId,
    contact_id: value.contactId,
    company_id: value.companyId,
    opportunity_id: value.opportunityId,
    lead_id: value.leadId,
    owner_id: value.ownerId,
    campaign_id: value.campaignId,
    case_id: value.caseId,
    asset_id: value.assetId,
    contract_id: value.contractId,
    product_id: value.productId,
    solution_id: value.solutionId,
    custom_object_id: value.customObjectId,
    title: value.title,
    description: value.description,
    location: value.location,
    all_day_event: value.allDayEvent,
    private: value._private,
    group_event: value.groupEvent,
    event_sub_type: value.eventSubType,
    group_event_type: value.groupEventType,
    child: value.child,
    archived: value.archived,
    deleted: value.deleted,
    show_as: value.showAs,
    activity_date: value.activityDate,
    duration_minutes: value.durationMinutes,
    start_datetime: value.startDatetime,
    end_datetime: value.endDatetime,
    end_date: value.endDate,
    recurrent: value.recurrent,
    reminder_datetime: value.reminderDatetime,
    reminder_set: value.reminderSet,
    custom_fields:
      value.customFields === undefined
        ? undefined
        : (value.customFields as Array<any>).map(CustomFieldToJSON)
  }
}
