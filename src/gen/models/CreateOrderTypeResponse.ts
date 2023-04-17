/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
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
 * @interface CreateOrderTypeResponse
 */
export interface CreateOrderTypeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateOrderTypeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateOrderTypeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateOrderTypeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateOrderTypeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateOrderTypeResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateOrderTypeResponse
   */
  data: UnifiedId
}

export function CreateOrderTypeResponseFromJSON(json: any): CreateOrderTypeResponse {
  return CreateOrderTypeResponseFromJSONTyped(json, false)
}

export function CreateOrderTypeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateOrderTypeResponse {
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

export function CreateOrderTypeResponseToJSON(value?: CreateOrderTypeResponse | null): any {
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
