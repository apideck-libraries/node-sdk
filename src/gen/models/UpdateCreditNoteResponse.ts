/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
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
 * @interface UpdateCreditNoteResponse
 */
export interface UpdateCreditNoteResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCreditNoteResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCreditNoteResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateCreditNoteResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateCreditNoteResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateCreditNoteResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateCreditNoteResponse
   */
  data: UnifiedId
}

export function UpdateCreditNoteResponseFromJSON(json: any): UpdateCreditNoteResponse {
  return UpdateCreditNoteResponseFromJSONTyped(json, false)
}

export function UpdateCreditNoteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCreditNoteResponse {
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

export function UpdateCreditNoteResponseToJSON(value?: UpdateCreditNoteResponse | null): any {
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
