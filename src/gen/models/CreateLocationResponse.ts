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
 * @interface CreateLocationResponse
 */
export interface CreateLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateLocationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateLocationResponse
   */
  data: UnifiedId
}

export function CreateLocationResponseFromJSON(json: any): CreateLocationResponse {
  return CreateLocationResponseFromJSONTyped(json, false)
}

export function CreateLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateLocationResponse {
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

export function CreateLocationResponseToJSON(value?: CreateLocationResponse | null): any {
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
