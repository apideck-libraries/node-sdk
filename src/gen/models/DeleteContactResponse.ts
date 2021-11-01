/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.2.0
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
 * @interface DeleteContactResponse
 */
export interface DeleteContactResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteContactResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteContactResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteContactResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteContactResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteContactResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteContactResponse
   */
  data: UnifiedId
}

export function DeleteContactResponseFromJSON(json: any): DeleteContactResponse {
  return DeleteContactResponseFromJSONTyped(json, false)
}

export function DeleteContactResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteContactResponse {
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

export function DeleteContactResponseToJSON(value?: DeleteContactResponse | null): any {
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
