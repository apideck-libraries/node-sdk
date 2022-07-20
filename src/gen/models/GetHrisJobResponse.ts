/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.35.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HrisJob, HrisJobFromJSON, HrisJobToJSON } from './HrisJob'

/**
 *
 * @export
 * @interface GetHrisJobResponse
 */
export interface GetHrisJobResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetHrisJobResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetHrisJobResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetHrisJobResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetHrisJobResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetHrisJobResponse
   */
  operation: string
  /**
   *
   * @type {HrisJob}
   * @memberof GetHrisJobResponse
   */
  data: HrisJob
}

export function GetHrisJobResponseFromJSON(json: any): GetHrisJobResponse {
  return GetHrisJobResponseFromJSONTyped(json, false)
}

export function GetHrisJobResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetHrisJobResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: HrisJobFromJSON(json['data'])
  }
}

export function GetHrisJobResponseToJSON(value?: GetHrisJobResponse | null): any {
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
    data: HrisJobToJSON(value.data)
  }
}
