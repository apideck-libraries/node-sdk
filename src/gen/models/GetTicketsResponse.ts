/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { Ticket, TicketFromJSON, TicketToJSON } from './Ticket'

/**
 *
 * @export
 * @interface GetTicketsResponse
 */
export interface GetTicketsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTicketsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTicketsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTicketsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTicketsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTicketsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Ticket>}
   * @memberof GetTicketsResponse
   */
  data: Array<Ticket>
  /**
   *
   * @type {Meta}
   * @memberof GetTicketsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetTicketsResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetTicketsResponse
   */
  _raw?: Raw | null
}

export function GetTicketsResponseFromJSON(json: any): GetTicketsResponse {
  return GetTicketsResponseFromJSONTyped(json, false)
}

export function GetTicketsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTicketsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(TicketFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetTicketsResponseToJSON(value?: GetTicketsResponse | null): any {
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
    data: (value.data as Array<any>).map(TicketToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
