/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
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
 * @interface ScheduleWorkPatternOddWeeks
 */
export interface ScheduleWorkPatternOddWeeks {
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_monday?: number
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_tuesday?: number
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_wednesday?: number
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_thursday?: number
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_friday?: number
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_saturday?: number
  /**
   *
   * @type {number}
   * @memberof ScheduleWorkPatternOddWeeks
   */
  hours_sunday?: number
}

export function ScheduleWorkPatternOddWeeksFromJSON(json: any): ScheduleWorkPatternOddWeeks {
  return ScheduleWorkPatternOddWeeksFromJSONTyped(json, false)
}

export function ScheduleWorkPatternOddWeeksFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ScheduleWorkPatternOddWeeks {
  if (json === undefined || json === null) {
    return json
  }
  return {
    hours_monday: !exists(json, 'hours_monday') ? undefined : json['hours_monday'],
    hours_tuesday: !exists(json, 'hours_tuesday') ? undefined : json['hours_tuesday'],
    hours_wednesday: !exists(json, 'hours_wednesday') ? undefined : json['hours_wednesday'],
    hours_thursday: !exists(json, 'hours_thursday') ? undefined : json['hours_thursday'],
    hours_friday: !exists(json, 'hours_friday') ? undefined : json['hours_friday'],
    hours_saturday: !exists(json, 'hours_saturday') ? undefined : json['hours_saturday'],
    hours_sunday: !exists(json, 'hours_sunday') ? undefined : json['hours_sunday']
  }
}

export function ScheduleWorkPatternOddWeeksToJSON(value?: ScheduleWorkPatternOddWeeks | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    hours_monday: value.hours_monday,
    hours_tuesday: value.hours_tuesday,
    hours_wednesday: value.hours_wednesday,
    hours_thursday: value.hours_thursday,
    hours_friday: value.hours_friday,
    hours_saturday: value.hours_saturday,
    hours_sunday: value.hours_sunday
  }
}
