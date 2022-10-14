/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.70.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HrisJobs, HrisJobsFromJSON, HrisJobsToJSON } from './HrisJobs'

/**
 *
 * @export
 * @interface GetHrisJobsResponse
 */
export interface GetHrisJobsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetHrisJobsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetHrisJobsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetHrisJobsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetHrisJobsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetHrisJobsResponse
   */
  operation: string
  /**
   *
   * @type {HrisJobs}
   * @memberof GetHrisJobsResponse
   */
  data: HrisJobs
}

export function GetHrisJobsResponseFromJSON(json: any): GetHrisJobsResponse {
  return GetHrisJobsResponseFromJSONTyped(json, false)
}

export function GetHrisJobsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetHrisJobsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: HrisJobsFromJSON(json['data'])
  }
}

export function GetHrisJobsResponseToJSON(value?: GetHrisJobsResponse | null): any {
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
    data: HrisJobsToJSON(value.data)
  }
}
