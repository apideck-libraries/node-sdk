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
/**
 *
 * @export
 * @interface ProbationPeriod
 */
export interface ProbationPeriod {
  /**
   * The date that the employee started their probation period at the company.
   * @type {Date}
   * @memberof ProbationPeriod
   */
  start_date?: Date | null
  /**
   * The date that the employee ended their probation period at the company.
   * @type {Date}
   * @memberof ProbationPeriod
   */
  end_date?: Date | null
}

export function ProbationPeriodFromJSON(json: any): ProbationPeriod {
  return ProbationPeriodFromJSONTyped(json, false)
}

export function ProbationPeriodFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProbationPeriod {
  if (json === undefined || json === null) {
    return json
  }
  return {
    start_date: !exists(json, 'start_date')
      ? undefined
      : json['start_date'] === null
      ? null
      : new Date(json['start_date']),
    end_date: !exists(json, 'end_date')
      ? undefined
      : json['end_date'] === null
      ? null
      : new Date(json['end_date'])
  }
}

export function ProbationPeriodToJSON(value?: ProbationPeriod | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
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
        : new Date(value.end_date).toISOString().substr(0, 10)
  }
}
