/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.2
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
 * @interface UpdateTimeOffRequestResponse
 */
export interface UpdateTimeOffRequestResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateTimeOffRequestResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateTimeOffRequestResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateTimeOffRequestResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateTimeOffRequestResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateTimeOffRequestResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateTimeOffRequestResponse
   */
  data: UnifiedId
}

export function UpdateTimeOffRequestResponseFromJSON(json: any): UpdateTimeOffRequestResponse {
  return UpdateTimeOffRequestResponseFromJSONTyped(json, false)
}

export function UpdateTimeOffRequestResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateTimeOffRequestResponse {
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

export function UpdateTimeOffRequestResponseToJSON(
  value?: UpdateTimeOffRequestResponse | null
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
