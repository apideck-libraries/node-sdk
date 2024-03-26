/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
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
 * @interface CreateAttachmentResponse
 */
export interface CreateAttachmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateAttachmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateAttachmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateAttachmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateAttachmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateAttachmentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateAttachmentResponse
   */
  data: UnifiedId
}

export function CreateAttachmentResponseFromJSON(json: any): CreateAttachmentResponse {
  return CreateAttachmentResponseFromJSONTyped(json, false)
}

export function CreateAttachmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateAttachmentResponse {
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

export function CreateAttachmentResponseToJSON(value?: CreateAttachmentResponse | null): any {
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
