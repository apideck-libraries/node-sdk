/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.40.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {Array<Email>}
   * @memberof User
   */
  emails: Array<Email>
  /**
   *
   * @type {string}
   * @memberof User
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  parent_id?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  username?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  title?: string | null
  /**
   * The division the user is currently in.
   * @type {string}
   * @memberof User
   */
  division?: string | null
  /**
   * The department the user is currently in.
   * @type {string}
   * @memberof User
   */
  department?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  company_name?: string | null
  /**
   * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
   * @type {string}
   * @memberof User
   */
  employee_number?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  image?: string | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof User
   */
  language?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  status?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  password?: string
  /**
   *
   * @type {Array<Address>}
   * @memberof User
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof User
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {string}
   * @memberof User
   */
  readonly updated_at?: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  readonly created_at?: string
}

export function UserFromJSON(json: any): User {
  return UserFromJSONTyped(json, false)
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
  if (json === undefined || json === null) {
    return json
  }
  return {
    emails: (json['emails'] as Array<any>).map(EmailFromJSON),
    id: !exists(json, 'id') ? undefined : json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    username: !exists(json, 'username') ? undefined : json['username'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    title: !exists(json, 'title') ? undefined : json['title'],
    division: !exists(json, 'division') ? undefined : json['division'],
    department: !exists(json, 'department') ? undefined : json['department'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    employee_number: !exists(json, 'employee_number') ? undefined : json['employee_number'],
    description: !exists(json, 'description') ? undefined : json['description'],
    image: !exists(json, 'image') ? undefined : json['image'],
    language: !exists(json, 'language') ? undefined : json['language'],
    status: !exists(json, 'status') ? undefined : json['status'],
    password: !exists(json, 'password') ? undefined : json['password'],
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at']
  }
}

export function UserToJSON(value?: User | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    emails: (value.emails as Array<any>).map(EmailToJSON),
    parent_id: value.parent_id,
    username: value.username,
    first_name: value.first_name,
    last_name: value.last_name,
    title: value.title,
    division: value.division,
    department: value.department,
    company_name: value.company_name,
    employee_number: value.employee_number,
    description: value.description,
    image: value.image,
    language: value.language,
    status: value.status,
    password: value.password,
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON)
  }
}
