/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.64.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DriveGroup, DriveGroupFromJSON, DriveGroupToJSON } from './DriveGroup'

/**
 *
 * @export
 * @interface GetDriveGroupResponse
 */
export interface GetDriveGroupResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetDriveGroupResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetDriveGroupResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetDriveGroupResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetDriveGroupResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetDriveGroupResponse
   */
  operation: string
  /**
   *
   * @type {DriveGroup}
   * @memberof GetDriveGroupResponse
   */
  data: DriveGroup
}

export function GetDriveGroupResponseFromJSON(json: any): GetDriveGroupResponse {
  return GetDriveGroupResponseFromJSONTyped(json, false)
}

export function GetDriveGroupResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetDriveGroupResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: DriveGroupFromJSON(json['data'])
  }
}

export function GetDriveGroupResponseToJSON(value?: GetDriveGroupResponse | null): any {
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
    data: DriveGroupToJSON(value.data)
  }
}
