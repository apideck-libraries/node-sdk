/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.29.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Note, NoteFromJSON, NoteToJSON } from './Note'

/**
 *
 * @export
 * @interface GetNotesResponse
 */
export interface GetNotesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetNotesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetNotesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetNotesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetNotesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetNotesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Note>}
   * @memberof GetNotesResponse
   */
  data: Array<Note>
  /**
   *
   * @type {Meta}
   * @memberof GetNotesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetNotesResponse
   */
  links?: Links
}

export function GetNotesResponseFromJSON(json: any): GetNotesResponse {
  return GetNotesResponseFromJSONTyped(json, false)
}

export function GetNotesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetNotesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(NoteFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetNotesResponseToJSON(value?: GetNotesResponse | null): any {
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
    data: (value.data as Array<any>).map(NoteToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
