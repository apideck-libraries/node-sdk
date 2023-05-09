/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.4.0
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
 * @interface ApplicantsFilter
 */
export interface ApplicantsFilter {
  /**
   * Id of the job to filter on
   * @type {string}
   * @memberof ApplicantsFilter
   */
  job_id?: string
}

export function ApplicantsFilterFromJSON(json: any): ApplicantsFilter {
  return ApplicantsFilterFromJSONTyped(json, false)
}

export function ApplicantsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApplicantsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    job_id: !exists(json, 'job_id') ? undefined : json['job_id']
  }
}

export function ApplicantsFilterToJSON(value?: ApplicantsFilter | null): any {
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
