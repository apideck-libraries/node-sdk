/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.1
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
import {
  EmployeeCompensations,
  EmployeeCompensationsFromJSON,
  EmployeeCompensationsToJSON
} from './EmployeeCompensations'
import {
  EmployeeEmploymentRole,
  EmployeeEmploymentRoleFromJSON,
  EmployeeEmploymentRoleToJSON
} from './EmployeeEmploymentRole'
import { EmployeeJobs, EmployeeJobsFromJSON, EmployeeJobsToJSON } from './EmployeeJobs'
import { EmployeeManager, EmployeeManagerFromJSON, EmployeeManagerToJSON } from './EmployeeManager'
import {
  EmployeeSocialLinks,
  EmployeeSocialLinksFromJSON,
  EmployeeSocialLinksToJSON
} from './EmployeeSocialLinks'
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
  display_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  preferred_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  initials?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  salutation?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  title?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  marital_status?: string | null
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
   * A Start Date is the date that the employee ended working at the company
   * @type {string}
   * @memberof Employee
   */
  employment_end_date?: string | null
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
   * @type {EmployeeEmploymentRole}
   * @memberof Employee
   */
  employment_role?: EmployeeEmploymentRole
  /**
   *
   * @type {EmployeeManager}
   * @memberof Employee
   */
  manager?: EmployeeManager
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
   * country code according to ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof Employee
   */
  country_of_birth?: string | null
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
   *
   * @type {string}
   * @memberof Employee
   */
  pronouns?: string | null
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Employee
   */
  preferred_language?: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof Employee
   */
  languages?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof Employee
   */
  nationalities?: Array<string>
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  photo_url?: string | null
  /**
   *
   * @type {Array<EmployeeJobs>}
   * @memberof Employee
   */
  jobs?: Array<EmployeeJobs>
  /**
   *
   * @type {Array<EmployeeCompensations>}
   * @memberof Employee
   */
  compensations?: Array<EmployeeCompensations>
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
   * @type {Array<EmployeeSocialLinks>}
   * @memberof Employee
   */
  social_links?: Array<EmployeeSocialLinks>
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  row_version?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Employee
   */
  deleted?: boolean | null
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
  terminated = 'terminated',
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
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    preferred_name: !exists(json, 'preferred_name') ? undefined : json['preferred_name'],
    initials: !exists(json, 'initials') ? undefined : json['initials'],
    salutation: !exists(json, 'salutation') ? undefined : json['salutation'],
    title: !exists(json, 'title') ? undefined : json['title'],
    marital_status: !exists(json, 'marital_status') ? undefined : json['marital_status'],
    division: !exists(json, 'division') ? undefined : json['division'],
    department: !exists(json, 'department') ? undefined : json['department'],
    team: !exists(json, 'team') ? undefined : EmployeeTeamFromJSON(json['team']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    employment_start_date: !exists(json, 'employment_start_date')
      ? undefined
      : json['employment_start_date'],
    employment_end_date: !exists(json, 'employment_end_date')
      ? undefined
      : json['employment_end_date'],
    employee_number: !exists(json, 'employee_number') ? undefined : json['employee_number'],
    employment_status: !exists(json, 'employment_status') ? undefined : json['employment_status'],
    employment_role: !exists(json, 'employment_role')
      ? undefined
      : EmployeeEmploymentRoleFromJSON(json['employment_role']),
    manager: !exists(json, 'manager') ? undefined : EmployeeManagerFromJSON(json['manager']),
    social_security_number: !exists(json, 'social_security_number')
      ? undefined
      : json['social_security_number'],
    birthday: !exists(json, 'birthday')
      ? undefined
      : json['birthday'] === null
      ? null
      : new Date(json['birthday']),
    country_of_birth: !exists(json, 'country_of_birth') ? undefined : json['country_of_birth'],
    description: !exists(json, 'description') ? undefined : json['description'],
    gender: !exists(json, 'gender') ? undefined : GenderFromJSON(json['gender']),
    pronouns: !exists(json, 'pronouns') ? undefined : json['pronouns'],
    preferred_language: !exists(json, 'preferred_language')
      ? undefined
      : json['preferred_language'],
    languages: !exists(json, 'languages') ? undefined : json['languages'],
    nationalities: !exists(json, 'nationalities') ? undefined : json['nationalities'],
    photo_url: !exists(json, 'photo_url') ? undefined : json['photo_url'],
    jobs: !exists(json, 'jobs')
      ? undefined
      : (json['jobs'] as Array<any>).map(EmployeeJobsFromJSON),
    compensations: !exists(json, 'compensations')
      ? undefined
      : (json['compensations'] as Array<any>).map(EmployeeCompensationsFromJSON),
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
    social_links: !exists(json, 'social_links')
      ? undefined
      : (json['social_links'] as Array<any>).map(EmployeeSocialLinksFromJSON),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
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
    display_name: value.display_name,
    preferred_name: value.preferred_name,
    initials: value.initials,
    salutation: value.salutation,
    title: value.title,
    marital_status: value.marital_status,
    division: value.division,
    department: value.department,
    team: EmployeeTeamToJSON(value.team),
    company_id: value.company_id,
    company_name: value.company_name,
    employment_start_date: value.employment_start_date,
    employment_end_date: value.employment_end_date,
    employee_number: value.employee_number,
    employment_status: value.employment_status,
    employment_role: EmployeeEmploymentRoleToJSON(value.employment_role),
    manager: EmployeeManagerToJSON(value.manager),
    social_security_number: value.social_security_number,
    birthday:
      value.birthday === undefined
        ? undefined
        : value.birthday === null
        ? null
        : new Date(value.birthday).toISOString().substr(0, 10),
    country_of_birth: value.country_of_birth,
    description: value.description,
    gender: GenderToJSON(value.gender),
    pronouns: value.pronouns,
    preferred_language: value.preferred_language,
    languages: value.languages,
    nationalities: value.nationalities,
    photo_url: value.photo_url,
    jobs: value.jobs === undefined ? undefined : (value.jobs as Array<any>).map(EmployeeJobsToJSON),
    compensations:
      value.compensations === undefined
        ? undefined
        : (value.compensations as Array<any>).map(EmployeeCompensationsToJSON),
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
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    social_links:
      value.social_links === undefined
        ? undefined
        : (value.social_links as Array<any>).map(EmployeeSocialLinksToJSON),
    row_version: value.row_version,
    deleted: value.deleted
  }
}
