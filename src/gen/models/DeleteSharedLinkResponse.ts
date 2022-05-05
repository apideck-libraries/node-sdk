/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.2
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
 * @interface DeleteSharedLinkResponse
 */
export interface DeleteSharedLinkResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteSharedLinkResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteSharedLinkResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteSharedLinkResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteSharedLinkResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteSharedLinkResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteSharedLinkResponse
   */
  data: UnifiedId
}

export function DeleteSharedLinkResponseFromJSON(json: any): DeleteSharedLinkResponse {
  return DeleteSharedLinkResponseFromJSONTyped(json, false)
}

export function DeleteSharedLinkResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteSharedLinkResponse {
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

export function DeleteSharedLinkResponseToJSON(value?: DeleteSharedLinkResponse | null): any {
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
