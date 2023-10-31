/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface IssuesFilter
 */
export interface IssuesFilter {
  /**
   * Filter by ticket status, can be `open`, `closed` or `all`. Will passthrough if none of the above match
   * @type {Set<string>}
   * @memberof IssuesFilter
   */
  status?: Set<string>
  /**
   * Only return tickets since a specific date
   * @type {Date}
   * @memberof IssuesFilter
   */
  since?: Date
  /**
   * Only return tickets assigned to a specific user
   * @type {string}
   * @memberof IssuesFilter
   */
  assignee_id?: string
}

export function IssuesFilterFromJSON(json: any): IssuesFilter {
  return IssuesFilterFromJSONTyped(json, false)
}

export function IssuesFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status: !exists(json, 'status') ? undefined : json['status'],
    since: !exists(json, 'since') ? undefined : new Date(json['since']),
    assignee_id: !exists(json, 'assignee_id') ? undefined : json['assignee_id']
  }
}

export function IssuesFilterToJSON(value?: IssuesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status: value.status,
    since: value.since === undefined ? undefined : new Date(value.since).toISOString(),
    assignee_id: value.assignee_id
  }
}
