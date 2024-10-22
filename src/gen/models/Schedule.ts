/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  ScheduleWorkPattern,
  ScheduleWorkPatternFromJSON,
  ScheduleWorkPatternToJSON
} from './ScheduleWorkPattern'

/**
 *
 * @export
 * @interface Schedule
 */
export interface Schedule {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Schedule
   */
  readonly id: string
  /**
   * The start date, inclusive, of the schedule period.
   * @type {string}
   * @memberof Schedule
   */
  start_date: string
  /**
   * The end date, inclusive, of the schedule period.
   * @type {string}
   * @memberof Schedule
   */
  end_date: string
  /**
   *
   * @type {ScheduleWorkPattern}
   * @memberof Schedule
   */
  work_pattern: ScheduleWorkPattern
}

export function ScheduleFromJSON(json: any): Schedule {
  return ScheduleFromJSONTyped(json, false)
}

export function ScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schedule {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    start_date: json['start_date'],
    end_date: json['end_date'],
    work_pattern: ScheduleWorkPatternFromJSON(json['work_pattern'])
  }
}

export function ScheduleToJSON(value?: Schedule | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    start_date: value.start_date,
    end_date: value.end_date,
    work_pattern: ScheduleWorkPatternToJSON(value.work_pattern)
  }
}
