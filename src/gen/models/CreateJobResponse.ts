/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateJobResponse
 */
export interface CreateJobResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateJobResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateJobResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateJobResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateJobResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateJobResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateJobResponse
   */
  data: UnifiedId
}

export function CreateJobResponseFromJSON(json: any): CreateJobResponse {
  return CreateJobResponseFromJSONTyped(json, false)
}

export function CreateJobResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateJobResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  }
}

export function CreateJobResponseToJSON(value?: CreateJobResponse | null): any {
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
    data: UnifiedIdToJSON(value.data)
  }
}
