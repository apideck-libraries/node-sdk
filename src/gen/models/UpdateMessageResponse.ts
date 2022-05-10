/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.29.2
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
 * @interface UpdateMessageResponse
 */
export interface UpdateMessageResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateMessageResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateMessageResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateMessageResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateMessageResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateMessageResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateMessageResponse
   */
  data: UnifiedId
}

export function UpdateMessageResponseFromJSON(json: any): UpdateMessageResponse {
  return UpdateMessageResponseFromJSONTyped(json, false)
}

export function UpdateMessageResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateMessageResponse {
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

export function UpdateMessageResponseToJSON(value?: UpdateMessageResponse | null): any {
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
