/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Note, NoteFromJSON, NoteToJSON } from './Note'

/**
 *
 * @export
 * @interface GetNoteResponse
 */
export interface GetNoteResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetNoteResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetNoteResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetNoteResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetNoteResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetNoteResponse
   */
  operation: string
  /**
   *
   * @type {Note}
   * @memberof GetNoteResponse
   */
  data: Note
}

export function GetNoteResponseFromJSON(json: any): GetNoteResponse {
  return GetNoteResponseFromJSONTyped(json, false)
}

export function GetNoteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetNoteResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: NoteFromJSON(json['data'])
  }
}

export function GetNoteResponseToJSON(value?: GetNoteResponse | null): any {
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
    data: NoteToJSON(value.data)
  }
}
