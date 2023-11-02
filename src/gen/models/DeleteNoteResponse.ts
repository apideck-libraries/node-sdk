/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.1
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
 * @interface DeleteNoteResponse
 */
export interface DeleteNoteResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteNoteResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteNoteResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteNoteResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteNoteResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteNoteResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteNoteResponse
   */
  data: UnifiedId
}

export function DeleteNoteResponseFromJSON(json: any): DeleteNoteResponse {
  return DeleteNoteResponseFromJSONTyped(json, false)
}

export function DeleteNoteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteNoteResponse {
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

export function DeleteNoteResponseToJSON(value?: DeleteNoteResponse | null): any {
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
