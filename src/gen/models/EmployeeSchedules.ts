/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Employee, EmployeeFromJSON, EmployeeToJSON } from './Employee'
import { Schedule, ScheduleFromJSON, ScheduleToJSON } from './Schedule'

/**
 *
 * @export
 * @interface EmployeeSchedules
 */
export interface EmployeeSchedules {
  /**
   *
   * @type {Employee}
   * @memberof EmployeeSchedules
   */
  employee?: Employee
  /**
   *
   * @type {Array<Schedule>}
   * @memberof EmployeeSchedules
   */
  schedules?: Array<Schedule> | null
}

export function EmployeeSchedulesFromJSON(json: any): EmployeeSchedules {
  return EmployeeSchedulesFromJSONTyped(json, false)
}

export function EmployeeSchedulesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeeSchedules {
  if (json === undefined || json === null) {
    return json
  }
  return {
    employee: !exists(json, 'employee') ? undefined : EmployeeFromJSON(json['employee']),
    schedules: !exists(json, 'schedules')
      ? undefined
      : json['schedules'] === null
      ? null
      : (json['schedules'] as Array<any>).map(ScheduleFromJSON)
  }
}

export function EmployeeSchedulesToJSON(value?: EmployeeSchedules | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee: EmployeeToJSON(value.employee),
    schedules:
      value.schedules === undefined
        ? undefined
        : value.schedules === null
        ? null
        : (value.schedules as Array<any>).map(ScheduleToJSON)
  }
}
