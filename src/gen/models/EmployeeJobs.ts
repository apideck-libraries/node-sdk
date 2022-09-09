/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.52.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { PaymentUnit, PaymentUnitFromJSON, PaymentUnitToJSON } from './PaymentUnit'

/**
 *
 * @export
 * @interface EmployeeJobs
 */
export interface EmployeeJobs {
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  readonly employee_id?: string
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  title?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  role?: string | null
  /**
   *
   * @type {Date}
   * @memberof EmployeeJobs
   */
  start_date?: Date | null
  /**
   *
   * @type {Date}
   * @memberof EmployeeJobs
   */
  end_date?: Date | null
  /**
   *
   * @type {number}
   * @memberof EmployeeJobs
   */
  compensation_rate?: number
  /**
   *
   * @type {Currency}
   * @memberof EmployeeJobs
   */
  currency?: Currency | null
  /**
   *
   * @type {PaymentUnit}
   * @memberof EmployeeJobs
   */
  payment_unit?: PaymentUnit
  /**
   *
   * @type {Date}
   * @memberof EmployeeJobs
   */
  hired_at?: Date | null
  /**
   * Indicates whether this the employee's primary job
   * @type {boolean}
   * @memberof EmployeeJobs
   */
  is_primary?: boolean | null
  /**
   *
   * @type {Address}
   * @memberof EmployeeJobs
   */
  location?: Address
}

export function EmployeeJobsFromJSON(json: any): EmployeeJobs {
  return EmployeeJobsFromJSONTyped(json, false)
}

export function EmployeeJobsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeJobs {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    role: !exists(json, 'role') ? undefined : json['role'],
    start_date: !exists(json, 'start_date')
      ? undefined
      : json['start_date'] === null
      ? null
      : new Date(json['start_date']),
    end_date: !exists(json, 'end_date')
      ? undefined
      : json['end_date'] === null
      ? null
      : new Date(json['end_date']),
    compensation_rate: !exists(json, 'compensation_rate') ? undefined : json['compensation_rate'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    payment_unit: !exists(json, 'payment_unit')
      ? undefined
      : PaymentUnitFromJSON(json['payment_unit']),
    hired_at: !exists(json, 'hired_at')
      ? undefined
      : json['hired_at'] === null
      ? null
      : new Date(json['hired_at']),
    is_primary: !exists(json, 'is_primary') ? undefined : json['is_primary'],
    location: !exists(json, 'location') ? undefined : AddressFromJSON(json['location'])
  }
}

export function EmployeeJobsToJSON(value?: EmployeeJobs | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    role: value.role,
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
        : new Date(value.end_date).toISOString().substr(0, 10),
    compensation_rate: value.compensation_rate,
    currency: CurrencyToJSON(value.currency),
    payment_unit: PaymentUnitToJSON(value.payment_unit),
    hired_at:
      value.hired_at === undefined
        ? undefined
        : value.hired_at === null
        ? null
        : new Date(value.hired_at).toISOString().substr(0, 10),
    is_primary: value.is_primary,
    location: AddressToJSON(value.location)
  }
}
