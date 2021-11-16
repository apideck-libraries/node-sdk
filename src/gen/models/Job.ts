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
import { JobStatus, JobStatusFromJSON, JobStatusToJSON } from './JobStatus'

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
   * @type {string}
   * @memberof Job
   */
  description?: string | null
  /**
   * The code of the job.
   * @type {string}
   * @memberof Job
   */
  code?: string
  /**
   *
   * @type {JobStatus}
   * @memberof Job
   */
  status?: JobStatus
  /**
   * The url pointing to the job.
   * @type {string}
   * @memberof Job
   */
  url?: string
  /**
   *
   * @type {Date}
   * @memberof Job
   */
  readonly created_at?: Date
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
    description: !exists(json, 'description') ? undefined : json['description'],
    code: !exists(json, 'code') ? undefined : json['code'],
    status: !exists(json, 'status') ? undefined : JobStatusFromJSON(json['status']),
    url: !exists(json, 'url') ? undefined : json['url'],
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
    description: value.description,
    code: value.code,
    status: JobStatusToJSON(value.status),
    url: value.url
  }
}
