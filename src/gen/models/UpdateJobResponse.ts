/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.1
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
 * @interface UpdateJobResponse
 */
export interface UpdateJobResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateJobResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateJobResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateJobResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateJobResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateJobResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateJobResponse
   */
  data: UnifiedId
}

export function UpdateJobResponseFromJSON(json: any): UpdateJobResponse {
  return UpdateJobResponseFromJSONTyped(json, false)
}

export function UpdateJobResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateJobResponse {
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

export function UpdateJobResponseToJSON(value?: UpdateJobResponse | null): any {
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
