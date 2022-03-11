/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.13.0
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
 * @interface CreateMessageResponse
 */
export interface CreateMessageResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateMessageResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateMessageResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateMessageResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateMessageResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateMessageResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateMessageResponse
   */
  data: UnifiedId
}

export function CreateMessageResponseFromJSON(json: any): CreateMessageResponse {
  return CreateMessageResponseFromJSONTyped(json, false)
}

export function CreateMessageResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateMessageResponse {
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

export function CreateMessageResponseToJSON(value?: CreateMessageResponse | null): any {
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
