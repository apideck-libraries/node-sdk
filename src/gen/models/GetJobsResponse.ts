/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Job, JobFromJSON, JobToJSON } from './Job'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetJobsResponse
 */
export interface GetJobsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetJobsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetJobsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetJobsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetJobsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetJobsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Job>}
   * @memberof GetJobsResponse
   */
  data: Array<Job>
  /**
   *
   * @type {Meta}
   * @memberof GetJobsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetJobsResponse
   */
  links?: Links
}

export function GetJobsResponseFromJSON(json: any): GetJobsResponse {
  return GetJobsResponseFromJSONTyped(json, false)
}

export function GetJobsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetJobsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(JobFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetJobsResponseToJSON(value?: GetJobsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: (value.data as Array<any>).map(JobToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
