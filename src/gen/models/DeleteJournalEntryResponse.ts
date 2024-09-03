/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.2
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
 * @interface DeleteJournalEntryResponse
 */
export interface DeleteJournalEntryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteJournalEntryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteJournalEntryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteJournalEntryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteJournalEntryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteJournalEntryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteJournalEntryResponse
   */
  data: UnifiedId
}

export function DeleteJournalEntryResponseFromJSON(json: any): DeleteJournalEntryResponse {
  return DeleteJournalEntryResponseFromJSONTyped(json, false)
}

export function DeleteJournalEntryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteJournalEntryResponse {
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

export function DeleteJournalEntryResponseToJSON(value?: DeleteJournalEntryResponse | null): any {
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
