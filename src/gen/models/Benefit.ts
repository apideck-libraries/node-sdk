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
 * @interface Benefit
 */
export interface Benefit {
  /**
   * The name of the benefit.
   * @type {string}
   * @memberof Benefit
   */
  name?: string | null
  /**
   * The amount deducted for benefit.
   * @type {number}
   * @memberof Benefit
   */
  employee_deduction?: number | null
  /**
   * The amount of employer contribution.
   * @type {number}
   * @memberof Benefit
   */
  employer_contribution?: number | null
}

export function BenefitFromJSON(json: any): Benefit {
  return BenefitFromJSONTyped(json, false)
}

export function BenefitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Benefit {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    employee_deduction: !exists(json, 'employee_deduction')
      ? undefined
      : json['employee_deduction'],
    employer_contribution: !exists(json, 'employer_contribution')
      ? undefined
      : json['employer_contribution']
  }
}

export function BenefitToJSON(value?: Benefit | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    employee_deduction: value.employee_deduction,
    employer_contribution: value.employer_contribution
  }
}
