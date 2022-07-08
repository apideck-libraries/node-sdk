/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.6
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
 * @interface EmployeeEmploymentRole
 */
export interface EmployeeEmploymentRole {
  /**
   *
   * @type {string}
   * @memberof EmployeeEmploymentRole
   */
  type?: EmployeeEmploymentRoleType
  /**
   *
   * @type {string}
   * @memberof EmployeeEmploymentRole
   */
  sub_type?: EmployeeEmploymentRoleSubType
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeEmploymentRoleType {
  contractor = 'contractor',
  employee = 'employee',
  freelance = 'freelance',
  temp = 'temp',
  intership = 'intership',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum EmployeeEmploymentRoleSubType {
  full_time = 'full_time',
  part_time = 'part_time',
  hourly = 'hourly'
}

export function EmployeeEmploymentRoleFromJSON(json: any): EmployeeEmploymentRole {
  return EmployeeEmploymentRoleFromJSONTyped(json, false)
}

export function EmployeeEmploymentRoleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeeEmploymentRole {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : json['type'],
    sub_type: !exists(json, 'sub_type') ? undefined : json['sub_type']
  }
}

export function EmployeeEmploymentRoleToJSON(value?: EmployeeEmploymentRole | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    sub_type: value.sub_type
  }
}
