/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.6.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { PaymentUnit, PaymentUnitFromJSON, PaymentUnitToJSON } from './PaymentUnit'

/**
 *
 * @export
 * @interface EmployeeCompensations
 */
export interface EmployeeCompensations {
  /**
   *
   * @type {string}
   * @memberof EmployeeCompensations
   */
  readonly id?: string
  /**
   * The ID of the job to which the compensation belongs.
   * @type {string}
   * @memberof EmployeeCompensations
   */
  readonly job_id?: string
  /**
   * The amount paid per payment unit.
   * @type {string}
   * @memberof EmployeeCompensations
   */
  rate?: string
  /**
   *
   * @type {PaymentUnit}
   * @memberof EmployeeCompensations
   */
  payment_unit?: PaymentUnit
  /**
   * The FLSA status for this compensation.
   * @type {string}
   * @memberof EmployeeCompensations
   */
  flsa_status?: EmployeeCompensationsFlsaStatus
  /**
   * The effective date for this compensation.
   * @type {string}
   * @memberof EmployeeCompensations
   */
  effective_date?: string
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeCompensationsFlsaStatus {
  exempt = 'exempt',
  salaried_nonexempt = 'salaried-nonexempt',
  nonexempt = 'nonexempt',
  owner = 'owner'
}

export function EmployeeCompensationsFromJSON(json: any): EmployeeCompensations {
  return EmployeeCompensationsFromJSONTyped(json, false)
}

export function EmployeeCompensationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeeCompensations {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    job_id: !exists(json, 'job_id') ? undefined : json['job_id'],
    rate: !exists(json, 'rate') ? undefined : json['rate'],
    payment_unit: !exists(json, 'payment_unit')
      ? undefined
      : PaymentUnitFromJSON(json['payment_unit']),
    flsa_status: !exists(json, 'flsa_status') ? undefined : json['flsa_status'],
    effective_date: !exists(json, 'effective_date') ? undefined : json['effective_date']
  }
}

export function EmployeeCompensationsToJSON(value?: EmployeeCompensations | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    rate: value.rate,
    payment_unit: PaymentUnitToJSON(value.payment_unit),
    flsa_status: value.flsa_status,
    effective_date: value.effective_date
  }
}
