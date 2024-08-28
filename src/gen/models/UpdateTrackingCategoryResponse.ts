/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.1
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
 * @interface UpdateTrackingCategoryResponse
 */
export interface UpdateTrackingCategoryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateTrackingCategoryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateTrackingCategoryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateTrackingCategoryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateTrackingCategoryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateTrackingCategoryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateTrackingCategoryResponse
   */
  data: UnifiedId
}

export function UpdateTrackingCategoryResponseFromJSON(json: any): UpdateTrackingCategoryResponse {
  return UpdateTrackingCategoryResponseFromJSONTyped(json, false)
}

export function UpdateTrackingCategoryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateTrackingCategoryResponse {
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

export function UpdateTrackingCategoryResponseToJSON(
  value?: UpdateTrackingCategoryResponse | null
): any {
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
