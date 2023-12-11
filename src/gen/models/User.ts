/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
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
   * The unique identifier for the user
   * @type {string}
   * @memberof User
   */
  readonly id?: string
  /**
   * The parent user id
   * @type {string}
   * @memberof User
   */
  parent_id?: string | null
  /**
   * The username of the user
   * @type {string}
   * @memberof User
   */
  username?: string | null
  /**
   * The first name of the person.
   * @type {string}
   * @memberof User
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof User
   */
  last_name?: string | null
  /**
   * The job title of the person.
   * @type {string}
   * @memberof User
   */
  title?: string | null
  /**
   * The division the person is currently in. Usually a collection of departments or teams or regions.
   * @type {string}
   * @memberof User
   */
  division?: string | null
  /**
   * The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.
   * @type {string}
   * @memberof User
   */
  department?: string | null
  /**
   * The name of the company.
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
   * A description of the object.
   * @type {string}
   * @memberof User
   */
  description?: string | null
  /**
   * The URL of the user's avatar
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
   * The status of the user
   * @type {string}
   * @memberof User
   */
  status?: string | null
  /**
   * The password of the user
   * @type {string}
   * @memberof User
   */
  password?: string | null
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
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof User
   */
  readonly custom_mappings?: object | null
  /**
   * The date and time when the user was last updated.
   * @type {string}
   * @memberof User
   */
  readonly updated_at?: string | null
  /**
   * The date and time when the user was created.
   * @type {string}
   * @memberof User
   */
  readonly created_at?: string | null
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
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
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
