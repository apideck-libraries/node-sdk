/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Benefit, BenefitFromJSON, BenefitToJSON } from './Benefit'
import { Deduction, DeductionFromJSON, DeductionToJSON } from './Deduction'
import { Tax, TaxFromJSON, TaxToJSON } from './Tax'

/**
 *
 * @export
 * @interface Compensation
 */
export interface Compensation {
  /**
   *
   * @type {string}
   * @memberof Compensation
   */
  readonly employee_id: string
  /**
   * The employee's net pay. Only available when payroll has been processed
   * @type {number}
   * @memberof Compensation
   */
  net_pay?: number
  /**
   * The employee's gross pay. Only available when payroll has been processed
   * @type {number}
   * @memberof Compensation
   */
  gross_pay?: number
  /**
   * An array of employer and employee taxes for the pay period.
   * @type {Array<Tax>}
   * @memberof Compensation
   */
  taxes?: Array<Tax>
  /**
   * An array of employee deductions for the pay period.
   * @type {Array<Deduction>}
   * @memberof Compensation
   */
  deductions?: Array<Deduction>
  /**
   * An array of employee benefits for the pay period.
   * @type {Array<Benefit>}
   * @memberof Compensation
   */
  benefits?: Array<Benefit>
}

export function CompensationFromJSON(json: any): Compensation {
  return CompensationFromJSONTyped(json, false)
}

export function CompensationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Compensation {
  if (json === undefined || json === null) {
    return json
  }
  return {
    employee_id: json['employee_id'],
    net_pay: !exists(json, 'net_pay') ? undefined : json['net_pay'],
    gross_pay: !exists(json, 'gross_pay') ? undefined : json['gross_pay'],
    taxes: !exists(json, 'taxes') ? undefined : (json['taxes'] as Array<any>).map(TaxFromJSON),
    deductions: !exists(json, 'deductions')
      ? undefined
      : (json['deductions'] as Array<any>).map(DeductionFromJSON),
    benefits: !exists(json, 'benefits')
      ? undefined
      : (json['benefits'] as Array<any>).map(BenefitFromJSON)
  }
}

export function CompensationToJSON(value?: Compensation | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    net_pay: value.net_pay,
    gross_pay: value.gross_pay,
    taxes: value.taxes === undefined ? undefined : (value.taxes as Array<any>).map(TaxToJSON),
    deductions:
      value.deductions === undefined
        ? undefined
        : (value.deductions as Array<any>).map(DeductionToJSON),
    benefits:
      value.benefits === undefined ? undefined : (value.benefits as Array<any>).map(BenefitToJSON)
  }
}
