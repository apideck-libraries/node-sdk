/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.3
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
 * @interface CreateTrackingCategoryResponse
 */
export interface CreateTrackingCategoryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateTrackingCategoryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateTrackingCategoryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateTrackingCategoryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateTrackingCategoryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateTrackingCategoryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateTrackingCategoryResponse
   */
  data: UnifiedId
}

export function CreateTrackingCategoryResponseFromJSON(json: any): CreateTrackingCategoryResponse {
  return CreateTrackingCategoryResponseFromJSONTyped(json, false)
}

export function CreateTrackingCategoryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTrackingCategoryResponse {
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

export function CreateTrackingCategoryResponseToJSON(
  value?: CreateTrackingCategoryResponse | null
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
