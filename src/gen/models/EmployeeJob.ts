/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
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
 * @interface EmployeeJob
 */
export interface EmployeeJob {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EmployeeJob
   */
  readonly id?: string | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EmployeeJob
   */
  readonly employee_id?: string | null
  /**
   * The job title of the person.
   * @type {string}
   * @memberof EmployeeJob
   */
  title?: string | null
  /**
   * The position and responsibilities of the person within the organization.
   * @type {string}
   * @memberof EmployeeJob
   */
  role?: string | null
  /**
   * The date on which the employee starts working in their current job role.
   * @type {Date}
   * @memberof EmployeeJob
   */
  start_date?: Date | null
  /**
   * The date on which the employee leaves or is expected to leave their current job role.
   * @type {Date}
   * @memberof EmployeeJob
   */
  end_date?: Date | null
  /**
   * The rate of pay for the employee in their current job role.
   * @type {number}
   * @memberof EmployeeJob
   */
  compensation_rate?: number | null
  /**
   *
   * @type {Currency}
   * @memberof EmployeeJob
   */
  currency?: Currency | null
  /**
   *
   * @type {PaymentUnit}
   * @memberof EmployeeJob
   */
  payment_unit?: PaymentUnit | null
  /**
   * The date on which the employee was hired by the organization
   * @type {Date}
   * @memberof EmployeeJob
   */
  hired_at?: Date | null
  /**
   * Indicates whether this the employee's primary job.
   * @type {boolean}
   * @memberof EmployeeJob
   */
  is_primary?: boolean | null
  /**
   *
   * @type {Address}
   * @memberof EmployeeJob
   */
  location?: Address
}

export function EmployeeJobFromJSON(json: any): EmployeeJob {
  return EmployeeJobFromJSONTyped(json, false)
}

export function EmployeeJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeJob {
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

export function EmployeeJobToJSON(value?: EmployeeJob | null): any {
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
