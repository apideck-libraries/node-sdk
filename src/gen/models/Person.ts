/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.1
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
 * @interface Person
 */
export interface Person {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Person
   */
  readonly id?: string
  /**
   * The first name of the person.
   * @type {string}
   * @memberof Person
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof Person
   */
  last_name?: string | null
  /**
   * Middle name of the person.
   * @type {string}
   * @memberof Person
   */
  middle_name?: string | null
  /**
   *
   * @type {Gender}
   * @memberof Person
   */
  gender?: Gender | null
  /**
   *
   * @type {string}
   * @memberof Person
   */
  initials?: string | null
  /**
   *
   * @type {Date}
   * @memberof Person
   */
  birthday?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Person
   */
  deceased_on?: Date | null
}

export function PersonFromJSON(json: any): Person {
  return PersonFromJSONTyped(json, false)
}

export function PersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Person {
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

export function PersonToJSON(value?: Person | null): any {
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
