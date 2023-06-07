/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { JournalEntry, JournalEntryFromJSON, JournalEntryToJSON } from './JournalEntry'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetJournalEntriesResponse
 */
export interface GetJournalEntriesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetJournalEntriesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetJournalEntriesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetJournalEntriesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetJournalEntriesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetJournalEntriesResponse
   */
  operation: string
  /**
   *
   * @type {Array<JournalEntry>}
   * @memberof GetJournalEntriesResponse
   */
  data: Array<JournalEntry>
  /**
   *
   * @type {Meta}
   * @memberof GetJournalEntriesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetJournalEntriesResponse
   */
  links?: Links
}

export function GetJournalEntriesResponseFromJSON(json: any): GetJournalEntriesResponse {
  return GetJournalEntriesResponseFromJSONTyped(json, false)
}

export function GetJournalEntriesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetJournalEntriesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(JournalEntryFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetJournalEntriesResponseToJSON(value?: GetJournalEntriesResponse | null): any {
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
    data: (value.data as Array<any>).map(JournalEntryToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
