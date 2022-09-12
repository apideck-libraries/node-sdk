/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.54.0
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
 * @interface DeleteDriveResponse
 */
export interface DeleteDriveResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteDriveResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteDriveResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteDriveResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteDriveResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteDriveResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteDriveResponse
   */
  data: UnifiedId
}

export function DeleteDriveResponseFromJSON(json: any): DeleteDriveResponse {
  return DeleteDriveResponseFromJSONTyped(json, false)
}

export function DeleteDriveResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteDriveResponse {
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

export function DeleteDriveResponseToJSON(value?: DeleteDriveResponse | null): any {
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
