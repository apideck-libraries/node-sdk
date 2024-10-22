/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
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
 * @interface UpdateOrderTypeResponse
 */
export interface UpdateOrderTypeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateOrderTypeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateOrderTypeResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateOrderTypeResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateOrderTypeResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateOrderTypeResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateOrderTypeResponse
   */
  data: UnifiedId
}

export function UpdateOrderTypeResponseFromJSON(json: any): UpdateOrderTypeResponse {
  return UpdateOrderTypeResponseFromJSONTyped(json, false)
}

export function UpdateOrderTypeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateOrderTypeResponse {
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

export function UpdateOrderTypeResponseToJSON(value?: UpdateOrderTypeResponse | null): any {
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
