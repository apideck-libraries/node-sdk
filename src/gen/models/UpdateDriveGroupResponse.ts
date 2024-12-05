/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface UpdateDriveGroupResponse
 */
export interface UpdateDriveGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateDriveGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateDriveGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateDriveGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateDriveGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateDriveGroupResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateDriveGroupResponse
   */
  data: UnifiedId
}

export function UpdateDriveGroupResponseFromJSON(json: any): UpdateDriveGroupResponse {
  return UpdateDriveGroupResponseFromJSONTyped(json, false)
}

export function UpdateDriveGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateDriveGroupResponse {
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

export function UpdateDriveGroupResponseToJSON(value?: UpdateDriveGroupResponse | null): any {
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
