/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.25.0
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
 * @interface CreateNoteResponse
 */
export interface CreateNoteResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateNoteResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateNoteResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateNoteResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateNoteResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateNoteResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateNoteResponse
   */
  data: UnifiedId
}

export function CreateNoteResponseFromJSON(json: any): CreateNoteResponse {
  return CreateNoteResponseFromJSONTyped(json, false)
}

export function CreateNoteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateNoteResponse {
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

export function CreateNoteResponseToJSON(value?: CreateNoteResponse | null): any {
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
