/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.1
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
 * @interface UpdateApplicationResponse
 */
export interface UpdateApplicationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateApplicationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateApplicationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateApplicationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateApplicationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateApplicationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateApplicationResponse
   */
  data: UnifiedId
}

export function UpdateApplicationResponseFromJSON(json: any): UpdateApplicationResponse {
  return UpdateApplicationResponseFromJSONTyped(json, false)
}

export function UpdateApplicationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateApplicationResponse {
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

export function UpdateApplicationResponseToJSON(value?: UpdateApplicationResponse | null): any {
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
