/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.76.0
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
 * @interface DeleteTimeOffRequestResponse
 */
export interface DeleteTimeOffRequestResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteTimeOffRequestResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteTimeOffRequestResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteTimeOffRequestResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteTimeOffRequestResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteTimeOffRequestResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteTimeOffRequestResponse
   */
  data: UnifiedId
}

export function DeleteTimeOffRequestResponseFromJSON(json: any): DeleteTimeOffRequestResponse {
  return DeleteTimeOffRequestResponseFromJSONTyped(json, false)
}

export function DeleteTimeOffRequestResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteTimeOffRequestResponse {
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

export function DeleteTimeOffRequestResponseToJSON(
  value?: DeleteTimeOffRequestResponse | null
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
