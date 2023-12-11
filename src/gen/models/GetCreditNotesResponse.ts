/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CreditNote, CreditNoteFromJSON, CreditNoteToJSON } from './CreditNote'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCreditNotesResponse
 */
export interface GetCreditNotesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCreditNotesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCreditNotesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCreditNotesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCreditNotesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCreditNotesResponse
   */
  operation: string
  /**
   *
   * @type {Array<CreditNote>}
   * @memberof GetCreditNotesResponse
   */
  data: Array<CreditNote>
  /**
   *
   * @type {Meta}
   * @memberof GetCreditNotesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCreditNotesResponse
   */
  links?: Links
}

export function GetCreditNotesResponseFromJSON(json: any): GetCreditNotesResponse {
  return GetCreditNotesResponseFromJSONTyped(json, false)
}

export function GetCreditNotesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCreditNotesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CreditNoteFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCreditNotesResponseToJSON(value?: GetCreditNotesResponse | null): any {
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
    data: (value.data as Array<any>).map(CreditNoteToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
