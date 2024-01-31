/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  TimeOffRequestNotes,
  TimeOffRequestNotesFromJSON,
  TimeOffRequestNotesToJSON
} from './TimeOffRequestNotes'

/**
 *
 * @export
 * @interface TimeOffRequest
 */
export interface TimeOffRequest {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof TimeOffRequest
   */
  readonly id?: string
  /**
   * ID of the employee
   * @type {string}
   * @memberof TimeOffRequest
   */
  employee_id?: string | null
  /**
   * ID of the policy
   * @type {string}
   * @memberof TimeOffRequest
   */
  policy_id?: string | null
  /**
   * The status of the time off request.
   * @type {string}
   * @memberof TimeOffRequest
   */
  status?: TimeOffRequestStatus
  /**
   * Description of the time off request.
   * @type {string}
   * @memberof TimeOffRequest
   */
  description?: string | null
  /**
   * The start date of the time off request.
   * @type {string}
   * @memberof TimeOffRequest
   */
  start_date?: string | null
  /**
   * The end date of the time off request.
   * @type {string}
   * @memberof TimeOffRequest
   */
  end_date?: string | null
  /**
   * The date the request was made.
   * @type {string}
   * @memberof TimeOffRequest
   */
  request_date?: string | null
  /**
   * The type of request
   * @type {string}
   * @memberof TimeOffRequest
   */
  request_type?: TimeOffRequestRequestType
  /**
   * The date the request was approved
   * @type {string}
   * @memberof TimeOffRequest
   */
  approval_date?: string | null
  /**
   * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
   * @type {string}
   * @memberof TimeOffRequest
   */
  units?: TimeOffRequestUnits
  /**
   * The amount of time off requested.
   * @type {number}
   * @memberof TimeOffRequest
   */
  amount?: number | null
  /**
   *
   * @type {TimeOffRequestNotes}
   * @memberof TimeOffRequest
   */
  notes?: TimeOffRequestNotes
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof TimeOffRequest
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof TimeOffRequest
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof TimeOffRequest
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof TimeOffRequest
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof TimeOffRequest
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum TimeOffRequestStatus {
  requested = 'requested',
  approved = 'approved',
  declined = 'declined',
  cancelled = 'cancelled',
  deleted = 'deleted',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum TimeOffRequestRequestType {
  vacation = 'vacation',
  sick = 'sick',
  personal = 'personal',
  jury_duty = 'jury_duty',
  volunteer = 'volunteer',
  bereavement = 'bereavement',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum TimeOffRequestUnits {
  days = 'days',
  hours = 'hours',
  other = 'other'
}

export function TimeOffRequestFromJSON(json: any): TimeOffRequest {
  return TimeOffRequestFromJSONTyped(json, false)
}

export function TimeOffRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TimeOffRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    policy_id: !exists(json, 'policy_id') ? undefined : json['policy_id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    description: !exists(json, 'description') ? undefined : json['description'],
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    request_date: !exists(json, 'request_date') ? undefined : json['request_date'],
    request_type: !exists(json, 'request_type') ? undefined : json['request_type'],
    approval_date: !exists(json, 'approval_date') ? undefined : json['approval_date'],
    units: !exists(json, 'units') ? undefined : json['units'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    notes: !exists(json, 'notes') ? undefined : TimeOffRequestNotesFromJSON(json['notes']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
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

export function TimeOffRequestToJSON(value?: TimeOffRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee_id: value.employee_id,
    policy_id: value.policy_id,
    status: value.status,
    description: value.description,
    start_date: value.start_date,
    end_date: value.end_date,
    request_date: value.request_date,
    request_type: value.request_type,
    approval_date: value.approval_date,
    units: value.units,
    amount: value.amount,
    notes: TimeOffRequestNotesToJSON(value.notes)
  }
}
