/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ApplicationStage,
  ApplicationStageFromJSON,
  ApplicationStageToJSON
} from './ApplicationStage'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface Application
 */
export interface Application {
  /**
   *
   * @type {string}
   * @memberof Application
   */
  applicant_id: string | null
  /**
   *
   * @type {string}
   * @memberof Application
   */
  job_id: string | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Application
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Application
   */
  status?: ApplicationStatus
  /**
   *
   * @type {ApplicationStage}
   * @memberof Application
   */
  stage?: ApplicationStage
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Application
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Application
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Application
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Application
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Application
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Application
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum ApplicationStatus {
  open = 'open',
  rejected = 'rejected',
  hired = 'hired',
  converted = 'converted',
  other = 'other'
}

export function ApplicationFromJSON(json: any): Application {
  return ApplicationFromJSONTyped(json, false)
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
  if (json === undefined || json === null) {
    return json
  }
  return {
    applicant_id: json['applicant_id'],
    job_id: json['job_id'],
    id: !exists(json, 'id') ? undefined : json['id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    stage: !exists(json, 'stage') ? undefined : ApplicationStageFromJSON(json['stage']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
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

export function ApplicationToJSON(value?: Application | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    applicant_id: value.applicant_id,
    job_id: value.job_id,
    status: value.status,
    stage: ApplicationStageToJSON(value.stage),
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
