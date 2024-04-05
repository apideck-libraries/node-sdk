/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.0
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
 * @interface DeleteAttachmentResponse
 */
export interface DeleteAttachmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteAttachmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteAttachmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteAttachmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteAttachmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteAttachmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteAttachmentResponse
   */
  data: UnifiedId
}

export function DeleteAttachmentResponseFromJSON(json: any): DeleteAttachmentResponse {
  return DeleteAttachmentResponseFromJSONTyped(json, false)
}

export function DeleteAttachmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteAttachmentResponse {
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

export function DeleteAttachmentResponseToJSON(value?: DeleteAttachmentResponse | null): any {
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