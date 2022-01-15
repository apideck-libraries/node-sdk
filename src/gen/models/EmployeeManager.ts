/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.10.2
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
 * @interface EmployeeManager
 */
export interface EmployeeManager {
  /**
   *
   * @type {string}
   * @memberof EmployeeManager
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof EmployeeManager
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeeManager
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeeManager
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeeManager
   */
  email?: string | null
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
    email: !exists(json, 'email') ? undefined : json['email']
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
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email
  }
}
