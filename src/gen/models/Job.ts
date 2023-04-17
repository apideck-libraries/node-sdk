/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Branch, BranchFromJSON, BranchToJSON } from './Branch'
import { Department, DepartmentFromJSON, DepartmentToJSON } from './Department'
import { JobSalary, JobSalaryFromJSON, JobSalaryToJSON } from './JobSalary'
import { JobStatus, JobStatusFromJSON, JobStatusToJSON } from './JobStatus'
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'

/**
 *
 * @export
 * @interface Job
 */
export interface Job {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Job
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Job
   */
  slug?: string | null
  /**
   * The job title of the person.
   * @type {string}
   * @memberof Job
   */
  title?: string | null
  /**
   * Sequence in relation to other jobs.
   * @type {number}
   * @memberof Job
   */
  sequence?: number
  /**
   * The visibility of the job
   * @type {string}
   * @memberof Job
   */
  visibility?: JobVisibility
  /**
   *
   * @type {JobStatus}
   * @memberof Job
   */
  status?: JobStatus
  /**
   * The code of the job.
   * @type {string}
   * @memberof Job
   */
  code?: string
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Job
   */
  language?: string | null
  /**
   *
   * @type {string}
   * @memberof Job
   */
  employment_terms?: JobEmploymentTerms
  /**
   * Level of experience required for the job role.
   * @type {string}
   * @memberof Job
   */
  experience?: string
  /**
   * Specifies whether the posting is for a remote job.
   * @type {boolean}
   * @memberof Job
   */
  remote?: boolean | null
  /**
   * A job's Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company's internal processes.
   * @type {string}
   * @memberof Job
   */
  requisition_id?: string
  /**
   *
   * @type {Department}
   * @memberof Job
   */
  department?: Department
  /**
   *
   * @type {Branch}
   * @memberof Job
   */
  branch?: Branch
  /**
   * The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant
   * @type {Array<string>}
   * @memberof Job
   */
  recruiters?: Array<string> | null
  /**
   *
   * @type {Array<object>}
   * @memberof Job
   */
  hiring_managers?: Array<object>
  /**
   *
   * @type {Array<string>}
   * @memberof Job
   */
  followers?: Array<string> | null
  /**
   * A description of the object.
   * @type {string}
   * @memberof Job
   */
  description?: string | null
  /**
   * The job description in HTML format
   * @type {string}
   * @memberof Job
   */
  description_html?: string | null
  /**
   *
   * @type {Array<object>}
   * @memberof Job
   */
  blocks?: Array<object>
  /**
   *
   * @type {string}
   * @memberof Job
   */
  closing?: string | null
  /**
   * The closing section of the job description in HTML format
   * @type {string}
   * @memberof Job
   */
  closing_html?: string | null
  /**
   *
   * @type {Date}
   * @memberof Job
   */
  closing_date?: Date | null
  /**
   *
   * @type {JobSalary}
   * @memberof Job
   */
  salary?: JobSalary
  /**
   * URL of the job description
   * @type {string}
   * @memberof Job
   */
  url?: string | null
  /**
   * URL of the job portal
   * @type {string}
   * @memberof Job
   */
  job_portal_url?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Job
   */
  confidential?: boolean
  /**
   * Specifies whether an employee of the organization can apply for the job.
   * @type {boolean}
   * @memberof Job
   */
  available_to_employees?: boolean
  /**
   *
   * @type {Tags}
   * @memberof Job
   */
  tags?: Tags
  /**
   *
   * @type {Array<Address>}
   * @memberof Job
   */
  addresses?: Array<Address>
  /**
   *
   * @type {string}
   * @memberof Job
   */
  record_url?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Job
   */
  deleted?: boolean | null
  /**
   *
   * @type {string}
   * @memberof Job
   */
  owner_id?: string
  /**
   *
   * @type {Date}
   * @memberof Job
   */
  readonly published_at?: Date
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Job
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Job
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Job
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Job
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum JobVisibility {
  public = 'public',
  internal = 'internal'
}
/**
 * @export
 * @enum {string}
 */
export enum JobEmploymentTerms {
  full_time = 'full-time',
  part_time = 'part-time',
  internship = 'internship',
  contractor = 'contractor',
  employee = 'employee',
  freelance = 'freelance',
  temp = 'temp',
  seasonal = 'seasonal',
  volunteer = 'volunteer',
  other = 'other'
}

export function JobFromJSON(json: any): Job {
  return JobFromJSONTyped(json, false)
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    slug: !exists(json, 'slug') ? undefined : json['slug'],
    title: !exists(json, 'title') ? undefined : json['title'],
    sequence: !exists(json, 'sequence') ? undefined : json['sequence'],
    visibility: !exists(json, 'visibility') ? undefined : json['visibility'],
    status: !exists(json, 'status') ? undefined : JobStatusFromJSON(json['status']),
    code: !exists(json, 'code') ? undefined : json['code'],
    language: !exists(json, 'language') ? undefined : json['language'],
    employment_terms: !exists(json, 'employment_terms') ? undefined : json['employment_terms'],
    experience: !exists(json, 'experience') ? undefined : json['experience'],
    remote: !exists(json, 'remote') ? undefined : json['remote'],
    requisition_id: !exists(json, 'requisition_id') ? undefined : json['requisition_id'],
    department: !exists(json, 'department') ? undefined : DepartmentFromJSON(json['department']),
    branch: !exists(json, 'branch') ? undefined : BranchFromJSON(json['branch']),
    recruiters: !exists(json, 'recruiters') ? undefined : json['recruiters'],
    hiring_managers: !exists(json, 'hiring_managers') ? undefined : json['hiring_managers'],
    followers: !exists(json, 'followers') ? undefined : json['followers'],
    description: !exists(json, 'description') ? undefined : json['description'],
    description_html: !exists(json, 'description_html') ? undefined : json['description_html'],
    blocks: !exists(json, 'blocks') ? undefined : json['blocks'],
    closing: !exists(json, 'closing') ? undefined : json['closing'],
    closing_html: !exists(json, 'closing_html') ? undefined : json['closing_html'],
    closing_date: !exists(json, 'closing_date')
      ? undefined
      : json['closing_date'] === null
      ? null
      : new Date(json['closing_date']),
    salary: !exists(json, 'salary') ? undefined : JobSalaryFromJSON(json['salary']),
    url: !exists(json, 'url') ? undefined : json['url'],
    job_portal_url: !exists(json, 'job_portal_url') ? undefined : json['job_portal_url'],
    confidential: !exists(json, 'confidential') ? undefined : json['confidential'],
    available_to_employees: !exists(json, 'available_to_employees')
      ? undefined
      : json['available_to_employees'],
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    record_url: !exists(json, 'record_url') ? undefined : json['record_url'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    published_at: !exists(json, 'published_at') ? undefined : new Date(json['published_at']),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function JobToJSON(value?: Job | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    slug: value.slug,
    title: value.title,
    sequence: value.sequence,
    visibility: value.visibility,
    status: JobStatusToJSON(value.status),
    code: value.code,
    language: value.language,
    employment_terms: value.employment_terms,
    experience: value.experience,
    remote: value.remote,
    requisition_id: value.requisition_id,
    department: DepartmentToJSON(value.department),
    branch: BranchToJSON(value.branch),
    recruiters: value.recruiters,
    hiring_managers: value.hiring_managers,
    followers: value.followers,
    description: value.description,
    description_html: value.description_html,
    blocks: value.blocks,
    closing: value.closing,
    closing_html: value.closing_html,
    closing_date:
      value.closing_date === undefined
        ? undefined
        : value.closing_date === null
        ? null
        : new Date(value.closing_date).toISOString().substr(0, 10),
    salary: JobSalaryToJSON(value.salary),
    url: value.url,
    job_portal_url: value.job_portal_url,
    confidential: value.confidential,
    available_to_employees: value.available_to_employees,
    tags: TagsToJSON(value.tags),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    record_url: value.record_url,
    deleted: value.deleted,
    owner_id: value.owner_id
  }
}
