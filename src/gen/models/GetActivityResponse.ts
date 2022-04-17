/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Activity, ActivityFromJSON, ActivityToJSON } from './Activity'

/**
 *
 * @export
 * @interface GetActivityResponse
 */
export interface GetActivityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetActivityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetActivityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetActivityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetActivityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetActivityResponse
   */
  operation: string
  /**
   *
   * @type {Activity}
   * @memberof GetActivityResponse
   */
  data: Activity
}

export function GetActivityResponseFromJSON(json: any): GetActivityResponse {
  return GetActivityResponseFromJSONTyped(json, false)
}

export function GetActivityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetActivityResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ActivityFromJSON(json['data'])
  }
}

export function GetActivityResponseToJSON(value?: GetActivityResponse | null): any {
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
    data: ActivityToJSON(value.data)
  }
}
