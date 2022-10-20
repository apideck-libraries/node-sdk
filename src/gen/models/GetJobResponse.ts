/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.72.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Job, JobFromJSON, JobToJSON } from './Job'

/**
 *
 * @export
 * @interface GetJobResponse
 */
export interface GetJobResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetJobResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetJobResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetJobResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetJobResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetJobResponse
   */
  operation: string
  /**
   *
   * @type {Job}
   * @memberof GetJobResponse
   */
  data: Job
}

export function GetJobResponseFromJSON(json: any): GetJobResponse {
  return GetJobResponseFromJSONTyped(json, false)
}

export function GetJobResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetJobResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: JobFromJSON(json['data'])
  }
}

export function GetJobResponseToJSON(value?: GetJobResponse | null): any {
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
    data: JobToJSON(value.data)
  }
}
