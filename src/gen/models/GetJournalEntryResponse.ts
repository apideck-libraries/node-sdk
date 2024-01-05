/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { JournalEntry, JournalEntryFromJSON, JournalEntryToJSON } from './JournalEntry'

/**
 *
 * @export
 * @interface GetJournalEntryResponse
 */
export interface GetJournalEntryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetJournalEntryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetJournalEntryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetJournalEntryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetJournalEntryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetJournalEntryResponse
   */
  operation: string
  /**
   *
   * @type {JournalEntry}
   * @memberof GetJournalEntryResponse
   */
  data: JournalEntry
}

export function GetJournalEntryResponseFromJSON(json: any): GetJournalEntryResponse {
  return GetJournalEntryResponseFromJSONTyped(json, false)
}

export function GetJournalEntryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetJournalEntryResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: JournalEntryFromJSON(json['data'])
  }
}

export function GetJournalEntryResponseToJSON(value?: GetJournalEntryResponse | null): any {
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
    data: JournalEntryToJSON(value.data)
  }
}
