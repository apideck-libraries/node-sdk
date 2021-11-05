/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { EmployeeJobs, EmployeeJobsFromJSON, EmployeeJobsToJSON } from './EmployeeJobs'
import { EmployeeTeam, EmployeeTeamFromJSON, EmployeeTeamToJSON } from './EmployeeTeam'
import { Gender, GenderFromJSON, GenderToJSON } from './Gender'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface Employee
 */
export interface Employee {
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  middle_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  title?: string | null
  /**
   * The URL pointing to a picture.
   * @type {string}
   * @memberof Employee
   */
  picture_url?: string | null
  /**
   * The division the user is currently in.
   * @type {string}
   * @memberof Employee
   */
  division?: string | null
  /**
   * The department the user is currently in.
   * @type {string}
   * @memberof Employee
   */
  department?: string | null
  /**
   *
   * @type {EmployeeTeam}
   * @memberof Employee
   */
  team?: EmployeeTeam | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  company_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  company_name?: string | null
  /**
   * A Start Date is the date that the employee started working at the company
   * @type {string}
   * @memberof Employee
   */
  employment_start_date?: string | null
  /**
   * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
   * @type {string}
   * @memberof Employee
   */
  employee_number?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  employment_status?: EmployeeEmploymentStatus
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  manager_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  social_security_number?: string | null
  /**
   *
   * @type {Date}
   * @memberof Employee
   */
  birthday?: Date | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  description?: string | null
  /**
   *
   * @type {Gender}
   * @memberof Employee
   */
  gender?: Gender | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Employee
   */
  language?: string | null
  /**
   *
   * @type {Array<EmployeeJobs>}
   * @memberof Employee
   */
  jobs?: Array<EmployeeJobs>
  /**
   *
   * @type {Array<Address>}
   * @memberof Employee
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof Employee
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof Employee
   */
  emails?: Array<Email>
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Employee
   */
  custom_fields?: Array<CustomField>
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Employee
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Employee
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeEmploymentStatus {
  active = 'active',
  inactive = 'inactive',
  other = 'other'
}

export function EmployeeFromJSON(json: any): Employee {
  return EmployeeFromJSONTyped(json, false)
}

export function EmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Employee {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    title: !exists(json, 'title') ? undefined : json['title'],
    picture_url: !exists(json, 'picture_url') ? undefined : json['picture_url'],
    division: !exists(json, 'division') ? undefined : json['division'],
    department: !exists(json, 'department') ? undefined : json['department'],
    team: !exists(json, 'team') ? undefined : EmployeeTeamFromJSON(json['team']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    employment_start_date: !exists(json, 'employment_start_date')
      ? undefined
      : json['employment_start_date'],
    employee_number: !exists(json, 'employee_number') ? undefined : json['employee_number'],
    employment_status: !exists(json, 'employment_status') ? undefined : json['employment_status'],
    manager_id: !exists(json, 'manager_id') ? undefined : json['manager_id'],
    social_security_number: !exists(json, 'social_security_number')
      ? undefined
      : json['social_security_number'],
    birthday: !exists(json, 'birthday')
      ? undefined
      : json['birthday'] === null
      ? null
      : new Date(json['birthday']),
    description: !exists(json, 'description') ? undefined : json['description'],
    gender: !exists(json, 'gender') ? undefined : GenderFromJSON(json['gender']),
    language: !exists(json, 'language') ? undefined : json['language'],
    jobs: !exists(json, 'jobs')
      ? undefined
      : (json['jobs'] as Array<any>).map(EmployeeJobsFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON),
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function EmployeeToJSON(value?: Employee | null): any {
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
    title: value.title,
    picture_url: value.picture_url,
    division: value.division,
    department: value.department,
    team: EmployeeTeamToJSON(value.team),
    company_id: value.company_id,
    company_name: value.company_name,
    employment_start_date: value.employment_start_date,
    employee_number: value.employee_number,
    employment_status: value.employment_status,
    manager_id: value.manager_id,
    social_security_number: value.social_security_number,
    birthday:
      value.birthday === undefined
        ? undefined
        : value.birthday === null
        ? null
        : new Date(value.birthday).toISOString().substr(0, 10),
    description: value.description,
    gender: GenderToJSON(value.gender),
    language: value.language,
    jobs: value.jobs === undefined ? undefined : (value.jobs as Array<any>).map(EmployeeJobsToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON),
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON)
  }
}
