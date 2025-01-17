/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
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
 * @interface CreateDriveResponse
 */
export interface CreateDriveResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateDriveResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateDriveResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateDriveResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateDriveResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateDriveResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateDriveResponse
   */
  data: UnifiedId
}

export function CreateDriveResponseFromJSON(json: any): CreateDriveResponse {
  return CreateDriveResponseFromJSONTyped(json, false)
}

export function CreateDriveResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateDriveResponse {
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

export function CreateDriveResponseToJSON(value?: CreateDriveResponse | null): any {
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
