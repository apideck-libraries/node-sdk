/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.1
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
 * @interface DeleteMessageResponse
 */
export interface DeleteMessageResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteMessageResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteMessageResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteMessageResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteMessageResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteMessageResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteMessageResponse
   */
  data: UnifiedId
}

export function DeleteMessageResponseFromJSON(json: any): DeleteMessageResponse {
  return DeleteMessageResponseFromJSONTyped(json, false)
}

export function DeleteMessageResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteMessageResponse {
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

export function DeleteMessageResponseToJSON(value?: DeleteMessageResponse | null): any {
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
