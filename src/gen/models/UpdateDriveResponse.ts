/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.6.0
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
 * @interface UpdateDriveResponse
 */
export interface UpdateDriveResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateDriveResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateDriveResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateDriveResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateDriveResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateDriveResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateDriveResponse
   */
  data: UnifiedId
}

export function UpdateDriveResponseFromJSON(json: any): UpdateDriveResponse {
  return UpdateDriveResponseFromJSONTyped(json, false)
}

export function UpdateDriveResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateDriveResponse {
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

export function UpdateDriveResponseToJSON(value?: UpdateDriveResponse | null): any {
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
