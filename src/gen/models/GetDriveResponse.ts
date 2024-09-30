/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Drive, DriveFromJSON, DriveToJSON } from './Drive'

/**
 *
 * @export
 * @interface GetDriveResponse
 */
export interface GetDriveResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetDriveResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetDriveResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetDriveResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetDriveResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetDriveResponse
   */
  operation: string
  /**
   *
   * @type {Drive}
   * @memberof GetDriveResponse
   */
  data: Drive
}

export function GetDriveResponseFromJSON(json: any): GetDriveResponse {
  return GetDriveResponseFromJSONTyped(json, false)
}

export function GetDriveResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetDriveResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: DriveFromJSON(json['data'])
  }
}

export function GetDriveResponseToJSON(value?: GetDriveResponse | null): any {
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
    data: DriveToJSON(value.data)
  }
}
