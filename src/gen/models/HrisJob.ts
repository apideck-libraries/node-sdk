/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.76.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { HrisJobLocation, HrisJobLocationFromJSON, HrisJobLocationToJSON } from './HrisJobLocation'

/**
 *
 * @export
 * @interface HrisJob
 */
export interface HrisJob {
  /**
   *
   * @type {string}
   * @memberof HrisJob
   */
  readonly id?: string
  /**
   * Id of the employee
   * @type {string}
   * @memberof HrisJob
   */
  employee_id?: string
  /**
   *
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
   * @type {string}
   * @memberof HrisJob
   */
  employment_status?: HrisJobEmploymentStatus
  /**
   * Department name
   * @type {string}
   * @memberof HrisJob
   */
  department?: string | null
  /**
   *
   * @type {HrisJobLocation}
   * @memberof HrisJob
   */
  location?: HrisJobLocation
}

/**
 * @export
 * @enum {string}
 */
export enum HrisJobEmploymentStatus {
  active = 'active',
  inactive = 'inactive',
  terminated = 'terminated',
  other = 'other'
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
    employment_status: !exists(json, 'employment_status') ? undefined : json['employment_status'],
    department: !exists(json, 'department') ? undefined : json['department'],
    location: !exists(json, 'location') ? undefined : HrisJobLocationFromJSON(json['location'])
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
    employment_status: value.employment_status,
    department: value.department,
    location: HrisJobLocationToJSON(value.location)
  }
}
