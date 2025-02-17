/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import {
  PaymentFrequency,
  PaymentFrequencyFromJSON,
  PaymentFrequencyToJSON
} from './PaymentFrequency'
import { PaymentUnit, PaymentUnitFromJSON, PaymentUnitToJSON } from './PaymentUnit'

/**
 *
 * @export
 * @interface EmployeeCompensation
 */
export interface EmployeeCompensation {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EmployeeCompensation
   */
  readonly id?: string | null
  /**
   * The ID of the job to which the compensation belongs.
   * @type {string}
   * @memberof EmployeeCompensation
   */
  readonly job_id?: string | null
  /**
   * The amount paid per payment unit.
   * @type {number}
   * @memberof EmployeeCompensation
   */
  rate?: number | null
  /**
   *
   * @type {PaymentUnit}
   * @memberof EmployeeCompensation
   */
  payment_unit?: PaymentUnit | null
  /**
   *
   * @type {Currency}
   * @memberof EmployeeCompensation
   */
  currency?: Currency | null
  /**
   * The FLSA status for this compensation.
   * @type {string}
   * @memberof EmployeeCompensation
   */
  flsa_status?: EmployeeCompensationFlsaStatus
  /**
   * The date on which a change to an employee's compensation takes effect.
   * @type {string}
   * @memberof EmployeeCompensation
   */
  effective_date?: string | null
  /**
   *
   * @type {PaymentFrequency}
   * @memberof EmployeeCompensation
   */
  payment_frequency?: PaymentFrequency | null
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeCompensationFlsaStatus {
  exempt = 'exempt',
  salaried_nonexempt = 'salaried-nonexempt',
  nonexempt = 'nonexempt',
  owner = 'owner',
  other = 'other'
}

export function EmployeeCompensationFromJSON(json: any): EmployeeCompensation {
  return EmployeeCompensationFromJSONTyped(json, false)
}

export function EmployeeCompensationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeeCompensation {
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
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    flsa_status: !exists(json, 'flsa_status') ? undefined : json['flsa_status'],
    effective_date: !exists(json, 'effective_date') ? undefined : json['effective_date'],
    payment_frequency: !exists(json, 'payment_frequency')
      ? undefined
      : PaymentFrequencyFromJSON(json['payment_frequency'])
  }
}

export function EmployeeCompensationToJSON(value?: EmployeeCompensation | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    rate: value.rate,
    payment_unit: PaymentUnitToJSON(value.payment_unit),
    currency: CurrencyToJSON(value.currency),
    flsa_status: value.flsa_status,
    effective_date: value.effective_date,
    payment_frequency: PaymentFrequencyToJSON(value.payment_frequency)
  }
}
