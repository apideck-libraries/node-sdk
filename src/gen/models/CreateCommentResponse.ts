/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.0
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
 * @interface CreateCommentResponse
 */
export interface CreateCommentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCommentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCommentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateCommentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateCommentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateCommentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateCommentResponse
   */
  data: UnifiedId
}

export function CreateCommentResponseFromJSON(json: any): CreateCommentResponse {
  return CreateCommentResponseFromJSONTyped(json, false)
}

export function CreateCommentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCommentResponse {
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

export function CreateCommentResponseToJSON(value?: CreateCommentResponse | null): any {
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
