/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.40.1
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
 * @interface UpdateLeadResponse
 */
export interface UpdateLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateLeadResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateLeadResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateLeadResponse
   */
  data: UnifiedId
}

export function UpdateLeadResponseFromJSON(json: any): UpdateLeadResponse {
  return UpdateLeadResponseFromJSONTyped(json, false)
}

export function UpdateLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateLeadResponse {
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

export function UpdateLeadResponseToJSON(value?: UpdateLeadResponse | null): any {
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
