/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.63.0
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
 * @interface DeleteDriveGroupResponse
 */
export interface DeleteDriveGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteDriveGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteDriveGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteDriveGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteDriveGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteDriveGroupResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteDriveGroupResponse
   */
  data: UnifiedId
}

export function DeleteDriveGroupResponseFromJSON(json: any): DeleteDriveGroupResponse {
  return DeleteDriveGroupResponseFromJSONTyped(json, false)
}

export function DeleteDriveGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteDriveGroupResponse {
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

export function DeleteDriveGroupResponseToJSON(value?: DeleteDriveGroupResponse | null): any {
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
