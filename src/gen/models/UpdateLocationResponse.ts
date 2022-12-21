/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
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
 * @interface UpdateLocationResponse
 */
export interface UpdateLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateLocationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateLocationResponse
   */
  data: UnifiedId
}

export function UpdateLocationResponseFromJSON(json: any): UpdateLocationResponse {
  return UpdateLocationResponseFromJSONTyped(json, false)
}

export function UpdateLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateLocationResponse {
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

export function UpdateLocationResponseToJSON(value?: UpdateLocationResponse | null): any {
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
