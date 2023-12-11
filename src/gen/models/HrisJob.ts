/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EmploymentStatus,
  EmploymentStatusFromJSON,
  EmploymentStatusToJSON
} from './EmploymentStatus'
import { HrisJobLocation, HrisJobLocationFromJSON, HrisJobLocationToJSON } from './HrisJobLocation'

/**
 *
 * @export
 * @interface HrisJob
 */
export interface HrisJob {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof HrisJob
   */
  readonly id?: string | null
  /**
   * Id of the employee
   * @type {string}
   * @memberof HrisJob
   */
  employee_id?: string | null
  /**
   * The job title of the person.
   * @type {string}
   * @memberof HrisJob
   */
  title?: string | null
  /**
   *
   * @type {Date}
   * @memberof HrisJob
   */
  start_date?: Date | null
  /**
   *
   * @type {Date}
   * @memberof HrisJob
   */
  end_date?: Date | null
  /**
   *
   * @type {EmploymentStatus}
   * @memberof HrisJob
   */
  employment_status?: EmploymentStatus | null
  /**
   * Department name
   * @type {string}
   * @memberof HrisJob
   */
  department?: string | null
  /**
   * Indicates whether this the employee's primary job.
   * @type {boolean}
   * @memberof HrisJob
   */
  is_primary?: boolean | null
  /**
   *
   * @type {HrisJobLocation}
   * @memberof HrisJob
   */
  location?: HrisJobLocation
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof HrisJob
   */
  readonly custom_mappings?: object | null
}

export function HrisJobFromJSON(json: any): HrisJob {
  return HrisJobFromJSONTyped(json, false)
}

export function HrisJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): HrisJob {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    start_date: !exists(json, 'start_date')
      ? undefined
      : json['start_date'] === null
      ? null
      : new Date(json['start_date']),
    end_date: !exists(json, 'end_date')
      ? undefined
      : json['end_date'] === null
      ? null
      : new Date(json['end_date']),
    employment_status: !exists(json, 'employment_status')
      ? undefined
      : EmploymentStatusFromJSON(json['employment_status']),
    department: !exists(json, 'department') ? undefined : json['department'],
    is_primary: !exists(json, 'is_primary') ? undefined : json['is_primary'],
    location: !exists(json, 'location') ? undefined : HrisJobLocationFromJSON(json['location']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings']
  }
}

export function HrisJobToJSON(value?: HrisJob | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee_id: value.employee_id,
    title: value.title,
    start_date:
      value.start_date === undefined
        ? undefined
        : value.start_date === null
        ? null
        : new Date(value.start_date).toISOString().substr(0, 10),
    end_date:
      value.end_date === undefined
        ? undefined
        : value.end_date === null
        ? null
        : new Date(value.end_date).toISOString().substr(0, 10),
    employment_status: EmploymentStatusToJSON(value.employment_status),
    department: value.department,
    is_primary: value.is_primary,
    location: HrisJobLocationToJSON(value.location)
  }
}
