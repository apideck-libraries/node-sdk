/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface Applicant
 */
export interface Applicant {
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  readonly id?: string
  /**
   * The PositionId the applicant applied for.
   * @type {string}
   * @memberof Applicant
   */
  position_id?: string
  /**
   * The name of an applicant.
   * @type {string}
   * @memberof Applicant
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Applicant
   */
  last_name?: string | null
  /**
   *
   * @type {Array<Email>}
   * @memberof Applicant
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Applicant
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Date}
   * @memberof Applicant
   */
  readonly created_at?: Date
}

export function ApplicantFromJSON(json: any): Applicant {
  return ApplicantFromJSONTyped(json, false)
}

export function ApplicantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Applicant {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    position_id: !exists(json, 'position_id') ? undefined : json['position_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ApplicantToJSON(value?: Applicant | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    position_id: value.position_id,
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON)
  }
}
