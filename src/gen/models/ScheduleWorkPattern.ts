/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.73.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ScheduleWorkPatternOddWeeks,
  ScheduleWorkPatternOddWeeksFromJSON,
  ScheduleWorkPatternOddWeeksToJSON
} from './ScheduleWorkPatternOddWeeks'

/**
 *
 * @export
 * @interface ScheduleWorkPattern
 */
export interface ScheduleWorkPattern {
  /**
   *
   * @type {ScheduleWorkPatternOddWeeks}
   * @memberof ScheduleWorkPattern
   */
  odd_weeks?: ScheduleWorkPatternOddWeeks
  /**
   *
   * @type {ScheduleWorkPatternOddWeeks}
   * @memberof ScheduleWorkPattern
   */
  even_weeks?: ScheduleWorkPatternOddWeeks
}

export function ScheduleWorkPatternFromJSON(json: any): ScheduleWorkPattern {
  return ScheduleWorkPatternFromJSONTyped(json, false)
}

export function ScheduleWorkPatternFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ScheduleWorkPattern {
  if (json === undefined || json === null) {
    return json
  }
  return {
    odd_weeks: !exists(json, 'odd_weeks')
      ? undefined
      : ScheduleWorkPatternOddWeeksFromJSON(json['odd_weeks']),
    even_weeks: !exists(json, 'even_weeks')
      ? undefined
      : ScheduleWorkPatternOddWeeksFromJSON(json['even_weeks'])
  }
}

export function ScheduleWorkPatternToJSON(value?: ScheduleWorkPattern | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    odd_weeks: ScheduleWorkPatternOddWeeksToJSON(value.odd_weeks),
    even_weeks: ScheduleWorkPatternOddWeeksToJSON(value.even_weeks)
  }
}
