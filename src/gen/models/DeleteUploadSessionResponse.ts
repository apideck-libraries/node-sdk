/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.1
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
 * @interface DeleteUploadSessionResponse
 */
export interface DeleteUploadSessionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteUploadSessionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteUploadSessionResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteUploadSessionResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteUploadSessionResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteUploadSessionResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteUploadSessionResponse
   */
  data: UnifiedId
}

export function DeleteUploadSessionResponseFromJSON(json: any): DeleteUploadSessionResponse {
  return DeleteUploadSessionResponseFromJSONTyped(json, false)
}

export function DeleteUploadSessionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteUploadSessionResponse {
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

export function DeleteUploadSessionResponseToJSON(value?: DeleteUploadSessionResponse | null): any {
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
