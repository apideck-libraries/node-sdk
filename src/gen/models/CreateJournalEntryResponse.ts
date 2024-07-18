/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
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
 * @interface CreateJournalEntryResponse
 */
export interface CreateJournalEntryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateJournalEntryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateJournalEntryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateJournalEntryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateJournalEntryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateJournalEntryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateJournalEntryResponse
   */
  data: UnifiedId
}

export function CreateJournalEntryResponseFromJSON(json: any): CreateJournalEntryResponse {
  return CreateJournalEntryResponseFromJSONTyped(json, false)
}

export function CreateJournalEntryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateJournalEntryResponse {
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

export function CreateJournalEntryResponseToJSON(value?: CreateJournalEntryResponse | null): any {
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
