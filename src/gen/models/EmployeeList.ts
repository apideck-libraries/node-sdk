/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.0
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
 * @interface EmployeeList
 */
export interface EmployeeList {
  [key: string]: unknown | any
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EmployeeList
   */
  readonly id?: string
  /**
   * The first name of the person.
   * @type {string}
   * @memberof EmployeeList
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof EmployeeList
   */
  last_name?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof EmployeeList
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof EmployeeList
   */
  readonly created_at?: Date | null
}

export function EmployeeListFromJSON(json: any): EmployeeList {
  return EmployeeListFromJSONTyped(json, false)
}

export function EmployeeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeList {
  if (json === undefined || json === null) {
    return json
  }
  return {
    ...json,
    id: !exists(json, 'id') ? undefined : json['id'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at'])
  }
}

export function EmployeeListToJSON(value?: EmployeeList | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    ...value,
    first_name: value.first_name,
    last_name: value.last_name
  }
}