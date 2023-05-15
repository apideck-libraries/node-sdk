/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface JobsFilter
 */
export interface JobsFilter {
  /**
   * Id of the job to filter on
   * @type {string}
   * @memberof JobsFilter
   */
  job_id?: string
}

export function JobsFilterFromJSON(json: any): JobsFilter {
  return JobsFilterFromJSONTyped(json, false)
}

export function JobsFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    job_id: !exists(json, 'job_id') ? undefined : json['job_id']
  }
}

export function JobsFilterToJSON(value?: JobsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    job_id: value.job_id
  }
}
