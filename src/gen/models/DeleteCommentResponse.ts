/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
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
 * @interface DeleteCommentResponse
 */
export interface DeleteCommentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteCommentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteCommentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteCommentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteCommentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteCommentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteCommentResponse
   */
  data: UnifiedId
}

export function DeleteCommentResponseFromJSON(json: any): DeleteCommentResponse {
  return DeleteCommentResponseFromJSONTyped(json, false)
}

export function DeleteCommentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteCommentResponse {
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

export function DeleteCommentResponseToJSON(value?: DeleteCommentResponse | null): any {
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