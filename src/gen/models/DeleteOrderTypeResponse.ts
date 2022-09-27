/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.62.0
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
 * @interface DeleteOrderTypeResponse
 */
export interface DeleteOrderTypeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteOrderTypeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteOrderTypeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteOrderTypeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteOrderTypeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteOrderTypeResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteOrderTypeResponse
   */
  data: UnifiedId
}

export function DeleteOrderTypeResponseFromJSON(json: any): DeleteOrderTypeResponse {
  return DeleteOrderTypeResponseFromJSONTyped(json, false)
}

export function DeleteOrderTypeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteOrderTypeResponse {
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

export function DeleteOrderTypeResponseToJSON(value?: DeleteOrderTypeResponse | null): any {
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
