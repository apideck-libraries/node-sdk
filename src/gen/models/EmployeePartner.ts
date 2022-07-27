/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Gender, GenderFromJSON, GenderToJSON } from './Gender'

/**
 *
 * @export
 * @interface EmployeePartner
 */
export interface EmployeePartner {
  /**
   *
   * @type {string}
   * @memberof EmployeePartner
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof EmployeePartner
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeePartner
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeePartner
   */
  middle_name?: string | null
  /**
   *
   * @type {Gender}
   * @memberof EmployeePartner
   */
  gender?: Gender | null
  /**
   *
   * @type {string}
   * @memberof EmployeePartner
   */
  initials?: string | null
  /**
   *
   * @type {Date}
   * @memberof EmployeePartner
   */
  birthday?: Date | null
  /**
   *
   * @type {Date}
   * @memberof EmployeePartner
   */
  deceased_on?: Date | null
}

export function EmployeePartnerFromJSON(json: any): EmployeePartner {
  return EmployeePartnerFromJSONTyped(json, false)
}

export function EmployeePartnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeePartner {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    gender: !exists(json, 'gender') ? undefined : GenderFromJSON(json['gender']),
    initials: !exists(json, 'initials') ? undefined : json['initials'],
    birthday: !exists(json, 'birthday')
      ? undefined
      : json['birthday'] === null
      ? null
      : new Date(json['birthday']),
    deceased_on: !exists(json, 'deceased_on')
      ? undefined
      : json['deceased_on'] === null
      ? null
      : new Date(json['deceased_on'])
  }
}

export function EmployeePartnerToJSON(value?: EmployeePartner | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    first_name: value.first_name,
    last_name: value.last_name,
    middle_name: value.middle_name,
    gender: GenderToJSON(value.gender),
    initials: value.initials,
    birthday:
      value.birthday === undefined
        ? undefined
        : value.birthday === null
        ? null
        : new Date(value.birthday).toISOString().substr(0, 10),
    deceased_on:
      value.deceased_on === undefined
        ? undefined
        : value.deceased_on === null
        ? null
        : new Date(value.deceased_on).toISOString().substr(0, 10)
  }
}