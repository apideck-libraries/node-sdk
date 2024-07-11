/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
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
 * @interface UpdateSharedLinkResponse
 */
export interface UpdateSharedLinkResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateSharedLinkResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateSharedLinkResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateSharedLinkResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateSharedLinkResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateSharedLinkResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateSharedLinkResponse
   */
  data: UnifiedId
}

export function UpdateSharedLinkResponseFromJSON(json: any): UpdateSharedLinkResponse {
  return UpdateSharedLinkResponseFromJSONTyped(json, false)
}

export function UpdateSharedLinkResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateSharedLinkResponse {
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

export function UpdateSharedLinkResponseToJSON(value?: UpdateSharedLinkResponse | null): any {
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
