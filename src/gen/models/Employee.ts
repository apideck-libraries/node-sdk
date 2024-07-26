/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { BankAccount, BankAccountFromJSON, BankAccountToJSON } from './BankAccount'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import {
  EmployeeCompensation,
  EmployeeCompensationFromJSON,
  EmployeeCompensationToJSON
} from './EmployeeCompensation'
import {
  EmployeeEmploymentRole,
  EmployeeEmploymentRoleFromJSON,
  EmployeeEmploymentRoleToJSON
} from './EmployeeEmploymentRole'
import { EmployeeJob, EmployeeJobFromJSON, EmployeeJobToJSON } from './EmployeeJob'
import { EmployeeManager, EmployeeManagerFromJSON, EmployeeManagerToJSON } from './EmployeeManager'
import {
  EmploymentStatus,
  EmploymentStatusFromJSON,
  EmploymentStatusToJSON
} from './EmploymentStatus'
import { Gender, GenderFromJSON, GenderToJSON } from './Gender'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import { Person, PersonFromJSON, PersonToJSON } from './Person'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'
import { ProbationPeriod, ProbationPeriodFromJSON, ProbationPeriodToJSON } from './ProbationPeriod'
import { SocialLink, SocialLinkFromJSON, SocialLinkToJSON } from './SocialLink'
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'
import { Team, TeamFromJSON, TeamToJSON } from './Team'

/**
 *
 * @export
 * @interface Employee
 */
export interface Employee {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Employee
   */
  id: string | null
  /**
   * The first name of the person.
   * @type {string}
   * @memberof Employee
   */
  first_name?: string | null
  /**
   * The last name of the person.
   * @type {string}
   * @memberof Employee
   */
  last_name?: string | null
  /**
   * Middle name of the person.
   * @type {string}
   * @memberof Employee
   */
  middle_name?: string | null
  /**
   * The name used to display the employee, often a combination of their first and last names.
   * @type {string}
   * @memberof Employee
   */
  display_name?: string | null
  /**
   * The name the employee prefers to be addressed by, which may be different from their legal name.
   * @type {string}
   * @memberof Employee
   */
  preferred_name?: string | null
  /**
   * The initials of the person, usually derived from their first, middle, and last names.
   * @type {string}
   * @memberof Employee
   */
  initials?: string | null
  /**
   * A formal salutation for the person. For example, 'Mr', 'Mrs'
   * @type {string}
   * @memberof Employee
   */
  salutation?: string | null
  /**
   * The job title of the person.
   * @type {string}
   * @memberof Employee
   */
  title?: string | null
  /**
   * The marital status of the employee.
   * @type {string}
   * @memberof Employee
   */
  marital_status?: string | null
  /**
   *
   * @type {Person}
   * @memberof Employee
   */
  partner?: Person
  /**
   * The division the person is currently in. Usually a collection of departments or teams or regions.
   * @type {string}
   * @memberof Employee
   */
  division?: string | null
  /**
   * Unique identifier of the division this employee belongs to.
   * @type {string}
   * @memberof Employee
   */
  division_id?: string | null
  /**
   * The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.
   * @type {string}
   * @memberof Employee
   */
  department?: string | null
  /**
   * Unique identifier of the department ID this employee belongs to.
   * @type {string}
   * @memberof Employee
   */
  department_id?: string | null
  /**
   * Name of the department this employee belongs to.
   * @type {string}
   * @memberof Employee
   */
  department_name?: string | null
  /**
   *
   * @type {Team}
   * @memberof Employee
   */
  team?: Team | null
  /**
   * The unique identifier of the company.
   * @type {string}
   * @memberof Employee
   */
  company_id?: string | null
  /**
   * The name of the company.
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
   * An End Date is the date that the employee ended working at the company
   * @type {string}
   * @memberof Employee
   */
  employment_end_date?: string | null
  /**
   * The reason because the employment ended.
   * @type {string}
   * @memberof Employee
   */
  leaving_reason?: EmployeeLeavingReason
  /**
   * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
   * @type {string}
   * @memberof Employee
   */
  employee_number?: string | null
  /**
   *
   * @type {EmploymentStatus}
   * @memberof Employee
   */
  employment_status?: EmploymentStatus | null
  /**
   *
   * @type {EmployeeEmploymentRole}
   * @memberof Employee
   */
  employment_role?: EmployeeEmploymentRole
  /**
   * The ethnicity of the employee
   * @type {string}
   * @memberof Employee
   */
  ethnicity?: string | null
  /**
   *
   * @type {EmployeeManager}
   * @memberof Employee
   */
  manager?: EmployeeManager
  /**
   * Direct reports is an array of ids that reflect the individuals in an organizational hierarchy who are directly supervised by this specific employee.
   * @type {Array<string>}
   * @memberof Employee
   */
  direct_reports?: Array<string> | null
  /**
   * A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.
   * @type {string}
   * @memberof Employee
   */
  social_security_number?: string | null
  /**
   * The date of birth of the person.
   * @type {Date}
   * @memberof Employee
   */
  birthday?: Date | null
  /**
   * The date the person deceased.
   * @type {Date}
   * @memberof Employee
   */
  deceased_on?: Date | null
  /**
   * Country code according to ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof Employee
   */
  country_of_birth?: string | null
  /**
   * A description of the object.
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
   * The preferred pronouns of the person.
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
   * The URL of the photo of a person.
   * @type {string}
   * @memberof Employee
   */
  photo_url?: string | null
  /**
   * The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.
   * @type {string}
   * @memberof Employee
   */
  timezone?: string | null
  /**
   * When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.
   * @type {string}
   * @memberof Employee
   */
  source?: string | null
  /**
   * Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).
   * @type {string}
   * @memberof Employee
   */
  source_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  record_url?: string | null
  /**
   *
   * @type {Array<EmployeeJob>}
   * @memberof Employee
   */
  jobs?: Array<EmployeeJob> | null
  /**
   *
   * @type {Array<EmployeeCompensation>}
   * @memberof Employee
   */
  compensations?: Array<EmployeeCompensation> | null
  /**
   * Indicates if the employee works from a remote location.
   * @type {boolean}
   * @memberof Employee
   */
  works_remote?: boolean | null
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
   * @type {Array<SocialLink>}
   * @memberof Employee
   */
  social_links?: Array<SocialLink>
  /**
   *
   * @type {Array<BankAccount>}
   * @memberof Employee
   */
  bank_accounts?: Array<BankAccount>
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  tax_code?: string | null
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  tax_id?: string | null
  /**
   * Indicate the employee's dietary preference.
   * @type {string}
   * @memberof Employee
   */
  dietary_preference?: string | null
  /**
   * Indicate the employee's food allergies.
   * @type {Array<string>}
   * @memberof Employee
   */
  food_allergies?: Array<string> | null
  /**
   *
   * @type {ProbationPeriod}
   * @memberof Employee
   */
  probation_period?: ProbationPeriod
  /**
   *
   * @type {Tags}
   * @memberof Employee
   */
  tags?: Tags | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Employee
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Employee
   */
  row_version?: string | null
  /**
   * Flag to indicate if the object is deleted.
   * @type {boolean}
   * @memberof Employee
   */
  deleted?: boolean | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Employee
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Employee
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Employee
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Employee
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Employee
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeLeavingReason {
  dismissed = 'dismissed',
  resigned = 'resigned',
  redundancy = 'redundancy',
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
    id: json['id'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    preferred_name: !exists(json, 'preferred_name') ? undefined : json['preferred_name'],
    initials: !exists(json, 'initials') ? undefined : json['initials'],
    salutation: !exists(json, 'salutation') ? undefined : json['salutation'],
    title: !exists(json, 'title') ? undefined : json['title'],
    marital_status: !exists(json, 'marital_status') ? undefined : json['marital_status'],
    partner: !exists(json, 'partner') ? undefined : PersonFromJSON(json['partner']),
    division: !exists(json, 'division') ? undefined : json['division'],
    division_id: !exists(json, 'division_id') ? undefined : json['division_id'],
    department: !exists(json, 'department') ? undefined : json['department'],
    department_id: !exists(json, 'department_id') ? undefined : json['department_id'],
    department_name: !exists(json, 'department_name') ? undefined : json['department_name'],
    team: !exists(json, 'team') ? undefined : TeamFromJSON(json['team']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    employment_start_date: !exists(json, 'employment_start_date')
      ? undefined
      : json['employment_start_date'],
    employment_end_date: !exists(json, 'employment_end_date')
      ? undefined
      : json['employment_end_date'],
    leaving_reason: !exists(json, 'leaving_reason') ? undefined : json['leaving_reason'],
    employee_number: !exists(json, 'employee_number') ? undefined : json['employee_number'],
    employment_status: !exists(json, 'employment_status')
      ? undefined
      : EmploymentStatusFromJSON(json['employment_status']),
    employment_role: !exists(json, 'employment_role')
      ? undefined
      : EmployeeEmploymentRoleFromJSON(json['employment_role']),
    ethnicity: !exists(json, 'ethnicity') ? undefined : json['ethnicity'],
    manager: !exists(json, 'manager') ? undefined : EmployeeManagerFromJSON(json['manager']),
    direct_reports: !exists(json, 'direct_reports') ? undefined : json['direct_reports'],
    social_security_number: !exists(json, 'social_security_number')
      ? undefined
      : json['social_security_number'],
    birthday: !exists(json, 'birthday')
      ? undefined
      : json['birthday'] === null
      ? null
      : new Date(json['birthday']),
    deceased_on: !exists(json, 'deceased_on')
      ? undefined
      : json['deceased_on'] === null
      ? null
      : new Date(json['deceased_on']),
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
    timezone: !exists(json, 'timezone') ? undefined : json['timezone'],
    source: !exists(json, 'source') ? undefined : json['source'],
    source_id: !exists(json, 'source_id') ? undefined : json['source_id'],
    record_url: !exists(json, 'record_url') ? undefined : json['record_url'],
    jobs: !exists(json, 'jobs')
      ? undefined
      : json['jobs'] === null
      ? null
      : (json['jobs'] as Array<any>).map(EmployeeJobFromJSON),
    compensations: !exists(json, 'compensations')
      ? undefined
      : json['compensations'] === null
      ? null
      : (json['compensations'] as Array<any>).map(EmployeeCompensationFromJSON),
    works_remote: !exists(json, 'works_remote') ? undefined : json['works_remote'],
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
      : (json['social_links'] as Array<any>).map(SocialLinkFromJSON),
    bank_accounts: !exists(json, 'bank_accounts')
      ? undefined
      : (json['bank_accounts'] as Array<any>).map(BankAccountFromJSON),
    tax_code: !exists(json, 'tax_code') ? undefined : json['tax_code'],
    tax_id: !exists(json, 'tax_id') ? undefined : json['tax_id'],
    dietary_preference: !exists(json, 'dietary_preference')
      ? undefined
      : json['dietary_preference'],
    food_allergies: !exists(json, 'food_allergies') ? undefined : json['food_allergies'],
    probation_period: !exists(json, 'probation_period')
      ? undefined
      : ProbationPeriodFromJSON(json['probation_period']),
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
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
    id: value.id,
    first_name: value.first_name,
    last_name: value.last_name,
    middle_name: value.middle_name,
    display_name: value.display_name,
    preferred_name: value.preferred_name,
    initials: value.initials,
    salutation: value.salutation,
    title: value.title,
    marital_status: value.marital_status,
    partner: PersonToJSON(value.partner),
    division: value.division,
    division_id: value.division_id,
    department: value.department,
    department_id: value.department_id,
    department_name: value.department_name,
    team: TeamToJSON(value.team),
    company_id: value.company_id,
    company_name: value.company_name,
    employment_start_date: value.employment_start_date,
    employment_end_date: value.employment_end_date,
    leaving_reason: value.leaving_reason,
    employee_number: value.employee_number,
    employment_status: EmploymentStatusToJSON(value.employment_status),
    employment_role: EmployeeEmploymentRoleToJSON(value.employment_role),
    ethnicity: value.ethnicity,
    manager: EmployeeManagerToJSON(value.manager),
    direct_reports: value.direct_reports,
    social_security_number: value.social_security_number,
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
        : new Date(value.deceased_on).toISOString().substr(0, 10),
    country_of_birth: value.country_of_birth,
    description: value.description,
    gender: GenderToJSON(value.gender),
    pronouns: value.pronouns,
    preferred_language: value.preferred_language,
    languages: value.languages,
    nationalities: value.nationalities,
    photo_url: value.photo_url,
    timezone: value.timezone,
    source: value.source,
    source_id: value.source_id,
    record_url: value.record_url,
    jobs:
      value.jobs === undefined
        ? undefined
        : value.jobs === null
        ? null
        : (value.jobs as Array<any>).map(EmployeeJobToJSON),
    compensations:
      value.compensations === undefined
        ? undefined
        : value.compensations === null
        ? null
        : (value.compensations as Array<any>).map(EmployeeCompensationToJSON),
    works_remote: value.works_remote,
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
        : (value.social_links as Array<any>).map(SocialLinkToJSON),
    bank_accounts:
      value.bank_accounts === undefined
        ? undefined
        : (value.bank_accounts as Array<any>).map(BankAccountToJSON),
    tax_code: value.tax_code,
    tax_id: value.tax_id,
    dietary_preference: value.dietary_preference,
    food_allergies: value.food_allergies,
    probation_period: ProbationPeriodToJSON(value.probation_period),
    tags: TagsToJSON(value.tags),
    row_version: value.row_version,
    deleted: value.deleted,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
