/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Employee, EmployeeFromJSON, EmployeeToJSON } from './Employee'
import { HrisJob, HrisJobFromJSON, HrisJobToJSON } from './HrisJob'

/**
 *
 * @export
 * @interface HrisJobs
 */
export interface HrisJobs {
  /**
   *
   * @type {Employee}
   * @memberof HrisJobs
   */
  employee?: Employee
  /**
   *
   * @type {Array<HrisJob>}
   * @memberof HrisJobs
   */
  jobs?: Array<HrisJob> | null
}

export function HrisJobsFromJSON(json: any): HrisJobs {
  return HrisJobsFromJSONTyped(json, false)
}

export function HrisJobsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HrisJobs {
  if (json === undefined || json === null) {
    return json
  }
  return {
    employee: !exists(json, 'employee') ? undefined : EmployeeFromJSON(json['employee']),
    jobs: !exists(json, 'jobs')
      ? undefined
      : json['jobs'] === null
      ? null
      : (json['jobs'] as Array<any>).map(HrisJobFromJSON)
  }
}

export function HrisJobsToJSON(value?: HrisJobs | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee: EmployeeToJSON(value.employee),
    jobs:
      value.jobs === undefined
        ? undefined
        : value.jobs === null
        ? null
        : (value.jobs as Array<any>).map(HrisJobToJSON)
  }
}
