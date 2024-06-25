/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.2
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
 * @interface CreateUploadSessionResponse
 */
export interface CreateUploadSessionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateUploadSessionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateUploadSessionResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateUploadSessionResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateUploadSessionResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateUploadSessionResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateUploadSessionResponse
   */
  data: UnifiedId
}

export function CreateUploadSessionResponseFromJSON(json: any): CreateUploadSessionResponse {
  return CreateUploadSessionResponseFromJSONTyped(json, false)
}

export function CreateUploadSessionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateUploadSessionResponse {
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

export function CreateUploadSessionResponseToJSON(value?: CreateUploadSessionResponse | null): any {
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
