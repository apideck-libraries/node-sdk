/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.25.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { JobStatus, JobStatusFromJSON, JobStatusToJSON } from './JobStatus'
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'

/**
 *
 * @export
 * @interface Job
 */
export interface Job {
  /**
   *
   * @type {string}
   * @memberof Job
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Job
   */
  title?: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof Job
   */
  visibility?: Array<JobVisibility>
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
   * A job's Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company's internal processes.
   * @type {string}
   * @memberof Job
   */
  requisition_id?: string
  /**
   *
   * @type {Array<object>}
   * @memberof Job
   */
  hiring_managers?: Array<object>
  /**
   *
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
   *
   * @type {Tags}
   * @memberof Job
   */
  tags?: Tags
  /**
   *
   * @type {string}
   * @memberof Job
   */
  owner_id?: string
  /**
   *
   * @type {string}
   * @memberof Job
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Job
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Job
   */
  readonly updated_at?: Date
  /**
   *
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

export function JobFromJSON(json: any): Job {
  return JobFromJSONTyped(json, false)
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    visibility: !exists(json, 'visibility') ? undefined : json['visibility'],
    status: !exists(json, 'status') ? undefined : JobStatusFromJSON(json['status']),
    code: !exists(json, 'code') ? undefined : json['code'],
    requisition_id: !exists(json, 'requisition_id') ? undefined : json['requisition_id'],
    hiring_managers: !exists(json, 'hiring_managers') ? undefined : json['hiring_managers'],
    description: !exists(json, 'description') ? undefined : json['description'],
    description_html: !exists(json, 'description_html') ? undefined : json['description_html'],
    blocks: !exists(json, 'blocks') ? undefined : json['blocks'],
    closing: !exists(json, 'closing') ? undefined : json['closing'],
    closing_html: !exists(json, 'closing_html') ? undefined : json['closing_html'],
    url: !exists(json, 'url') ? undefined : json['url'],
    job_portal_url: !exists(json, 'job_portal_url') ? undefined : json['job_portal_url'],
    confidential: !exists(json, 'confidential') ? undefined : json['confidential'],
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
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
    title: value.title,
    visibility: value.visibility,
    status: JobStatusToJSON(value.status),
    code: value.code,
    requisition_id: value.requisition_id,
    hiring_managers: value.hiring_managers,
    description: value.description,
    description_html: value.description_html,
    blocks: value.blocks,
    closing: value.closing,
    closing_html: value.closing_html,
    url: value.url,
    job_portal_url: value.job_portal_url,
    confidential: value.confidential,
    tags: TagsToJSON(value.tags),
    owner_id: value.owner_id
  }
}
