/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { JournalEntry, JournalEntryFromJSON, JournalEntryToJSON } from './JournalEntry'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

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
  /**
   *
   * @type {Raw}
   * @memberof GetJournalEntryResponse
   */
  _raw?: Raw | null
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
    data: JournalEntryFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
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
    data: JournalEntryToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
