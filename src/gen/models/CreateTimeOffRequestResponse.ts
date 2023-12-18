/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
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
 * @interface CreateTimeOffRequestResponse
 */
export interface CreateTimeOffRequestResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateTimeOffRequestResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateTimeOffRequestResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateTimeOffRequestResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateTimeOffRequestResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateTimeOffRequestResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateTimeOffRequestResponse
   */
  data: UnifiedId
}

export function CreateTimeOffRequestResponseFromJSON(json: any): CreateTimeOffRequestResponse {
  return CreateTimeOffRequestResponseFromJSONTyped(json, false)
}

export function CreateTimeOffRequestResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTimeOffRequestResponse {
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

export function CreateTimeOffRequestResponseToJSON(
  value?: CreateTimeOffRequestResponse | null
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
