/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
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
 * @interface UpdateJournalEntryResponse
 */
export interface UpdateJournalEntryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateJournalEntryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateJournalEntryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateJournalEntryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateJournalEntryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateJournalEntryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateJournalEntryResponse
   */
  data: UnifiedId
}

export function UpdateJournalEntryResponseFromJSON(json: any): UpdateJournalEntryResponse {
  return UpdateJournalEntryResponseFromJSONTyped(json, false)
}

export function UpdateJournalEntryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateJournalEntryResponse {
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

export function UpdateJournalEntryResponseToJSON(value?: UpdateJournalEntryResponse | null): any {
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