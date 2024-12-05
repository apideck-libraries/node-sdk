/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface TimeOffRequestsFilter
 */
export interface TimeOffRequestsFilter {
  /**
   * Start date
   * @type {string}
   * @memberof TimeOffRequestsFilter
   */
  start_date?: string
  /**
   * End date
   * @type {string}
   * @memberof TimeOffRequestsFilter
   */
  end_date?: string
  /**
   * Minimum date the time off request was last created or modified
   * @type {string}
   * @memberof TimeOffRequestsFilter
   */
  updated_since?: string
  /**
   * Employee ID
   * @type {string}
   * @memberof TimeOffRequestsFilter
   */
  employee_id?: string
  /**
   * Time off request status to filter on
   * @type {string}
   * @memberof TimeOffRequestsFilter
   */
  time_off_request_status?: TimeOffRequestsFilterTimeOffRequestStatus
  /**
   * Company ID
   * @type {string}
   * @memberof TimeOffRequestsFilter
   */
  company_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum TimeOffRequestsFilterTimeOffRequestStatus {
  requested = 'requested',
  approved = 'approved',
  declined = 'declined',
  cancelled = 'cancelled',
  deleted = 'deleted',
  other = 'other'
}

export function TimeOffRequestsFilterFromJSON(json: any): TimeOffRequestsFilter {
  return TimeOffRequestsFilterFromJSONTyped(json, false)
}

export function TimeOffRequestsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TimeOffRequestsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    updated_since: !exists(json, 'updated_since') ? undefined : json['updated_since'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    time_off_request_status: !exists(json, 'time_off_request_status')
      ? undefined
      : json['time_off_request_status'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id']
  }
}

export function TimeOffRequestsFilterToJSON(value?: TimeOffRequestsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    start_date: value.start_date,
    end_date: value.end_date,
    updated_since: value.updated_since,
    employee_id: value.employee_id,
    time_off_request_status: value.time_off_request_status,
    company_id: value.company_id
  }
}
