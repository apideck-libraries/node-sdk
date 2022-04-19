/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.23.0
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
 * @interface CreateLeadResponse
 */
export interface CreateLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateLeadResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateLeadResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateLeadResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateLeadResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateLeadResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateLeadResponse
   */
  data: UnifiedId
}

export function CreateLeadResponseFromJSON(json: any): CreateLeadResponse {
  return CreateLeadResponseFromJSONTyped(json, false)
}

export function CreateLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateLeadResponse {
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

export function CreateLeadResponseToJSON(value?: CreateLeadResponse | null): any {
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
