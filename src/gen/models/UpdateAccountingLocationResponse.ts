/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
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
 * @interface UpdateAccountingLocationResponse
 */
export interface UpdateAccountingLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateAccountingLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateAccountingLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateAccountingLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateAccountingLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateAccountingLocationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateAccountingLocationResponse
   */
  data: UnifiedId
}

export function UpdateAccountingLocationResponseFromJSON(
  json: any
): UpdateAccountingLocationResponse {
  return UpdateAccountingLocationResponseFromJSONTyped(json, false)
}

export function UpdateAccountingLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateAccountingLocationResponse {
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

export function UpdateAccountingLocationResponseToJSON(
  value?: UpdateAccountingLocationResponse | null
): any {
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