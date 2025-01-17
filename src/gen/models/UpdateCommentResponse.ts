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
 * @interface UpdateCommentResponse
 */
export interface UpdateCommentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCommentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCommentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateCommentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateCommentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateCommentResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateCommentResponse
   */
  data: UnifiedId
}

export function UpdateCommentResponseFromJSON(json: any): UpdateCommentResponse {
  return UpdateCommentResponseFromJSONTyped(json, false)
}

export function UpdateCommentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCommentResponse {
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

export function UpdateCommentResponseToJSON(value?: UpdateCommentResponse | null): any {
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
