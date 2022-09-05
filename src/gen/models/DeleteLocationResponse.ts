/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.48.0
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
 * @interface DeleteLocationResponse
 */
export interface DeleteLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteLocationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteLocationResponse
   */
  data: UnifiedId
}

export function DeleteLocationResponseFromJSON(json: any): DeleteLocationResponse {
  return DeleteLocationResponseFromJSONTyped(json, false)
}

export function DeleteLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteLocationResponse {
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

export function DeleteLocationResponseToJSON(value?: DeleteLocationResponse | null): any {
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
