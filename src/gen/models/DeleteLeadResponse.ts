/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.5
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
 * @interface DeleteLeadResponse
 */
export interface DeleteLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteLeadResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteLeadResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteLeadResponse
   */
  data: UnifiedId
}

export function DeleteLeadResponseFromJSON(json: any): DeleteLeadResponse {
  return DeleteLeadResponseFromJSONTyped(json, false)
}

export function DeleteLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteLeadResponse {
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

export function DeleteLeadResponseToJSON(value?: DeleteLeadResponse | null): any {
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
