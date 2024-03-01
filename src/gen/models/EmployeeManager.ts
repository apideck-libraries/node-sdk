/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EmploymentStatus,
  EmploymentStatusFromJSON,
  EmploymentStatusToJSON
} from './EmploymentStatus'

/**
 *
 * @export
 * @interface EmployeeManager
 */
export interface EmployeeManager {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EmployeeManager
   */
  id?: string | null
  /**
   * The name of the manager, often a combination of their first and last names.
   * @type {string}
   * @memberof EmployeeManager
   */
  name?: string | null
  /**
   * The first name of the person.
   * @type {string}
   * @memberof EmployeeManager
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof EmployeeManager
   */
  last_name?: string | null
  /**
   * The email address of the manager.
   * @type {string}
   * @memberof EmployeeManager
   */
  email?: string | null
  /**
   *
   * @type {EmploymentStatus}
   * @memberof EmployeeManager
   */
  employment_status?: EmploymentStatus | null
}

export function EmployeeManagerFromJSON(json: any): EmployeeManager {
  return EmployeeManagerFromJSONTyped(json, false)
}

export function EmployeeManagerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeeManager {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    employment_status: !exists(json, 'employment_status')
      ? undefined
      : EmploymentStatusFromJSON(json['employment_status'])
  }
}

export function EmployeeManagerToJSON(value?: EmployeeManager | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email,
    employment_status: EmploymentStatusToJSON(value.employment_status)
  }
}
