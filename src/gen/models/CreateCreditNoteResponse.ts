/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.0
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
 * @interface CreateCreditNoteResponse
 */
export interface CreateCreditNoteResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCreditNoteResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCreditNoteResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateCreditNoteResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateCreditNoteResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateCreditNoteResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateCreditNoteResponse
   */
  data: UnifiedId
}

export function CreateCreditNoteResponseFromJSON(json: any): CreateCreditNoteResponse {
  return CreateCreditNoteResponseFromJSONTyped(json, false)
}

export function CreateCreditNoteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCreditNoteResponse {
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

export function CreateCreditNoteResponseToJSON(value?: CreateCreditNoteResponse | null): any {
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
