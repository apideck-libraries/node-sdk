/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.64.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface JobSalary
 */
export interface JobSalary {
  /**
   * Minimum salary payable for the job role.
   * @type {number}
   * @memberof JobSalary
   */
  min?: number
  /**
   * Maximum salary payable for the job role.
   * @type {number}
   * @memberof JobSalary
   */
  max?: number
  /**
   *
   * @type {Currency}
   * @memberof JobSalary
   */
  currency?: Currency | null
}

export function JobSalaryFromJSON(json: any): JobSalary {
  return JobSalaryFromJSONTyped(json, false)
}

export function JobSalaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobSalary {
  if (json === undefined || json === null) {
    return json
  }
  return {
    min: !exists(json, 'min') ? undefined : json['min'],
    max: !exists(json, 'max') ? undefined : json['max'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency'])
  }
}

export function JobSalaryToJSON(value?: JobSalary | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    min: value.min,
    max: value.max,
    currency: CurrencyToJSON(value.currency)
  }
}
