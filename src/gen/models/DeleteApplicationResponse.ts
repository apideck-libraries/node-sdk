/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.8.1
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
 * @interface DeleteApplicationResponse
 */
export interface DeleteApplicationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteApplicationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteApplicationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteApplicationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteApplicationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteApplicationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteApplicationResponse
   */
  data: UnifiedId
}

export function DeleteApplicationResponseFromJSON(json: any): DeleteApplicationResponse {
  return DeleteApplicationResponseFromJSONTyped(json, false)
}

export function DeleteApplicationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteApplicationResponse {
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

export function DeleteApplicationResponseToJSON(value?: DeleteApplicationResponse | null): any {
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
