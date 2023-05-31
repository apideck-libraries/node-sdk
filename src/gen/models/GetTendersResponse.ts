/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Tender, TenderFromJSON, TenderToJSON } from './Tender'

/**
 *
 * @export
 * @interface GetTendersResponse
 */
export interface GetTendersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTendersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTendersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTendersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTendersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTendersResponse
   */
  operation: string
  /**
   *
   * @type {Array<Tender>}
   * @memberof GetTendersResponse
   */
  data: Array<Tender>
  /**
   *
   * @type {Meta}
   * @memberof GetTendersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetTendersResponse
   */
  links?: Links
}

export function GetTendersResponseFromJSON(json: any): GetTendersResponse {
  return GetTendersResponseFromJSONTyped(json, false)
}

export function GetTendersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTendersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(TenderFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetTendersResponseToJSON(value?: GetTendersResponse | null): any {
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
    data: (value.data as Array<any>).map(TenderToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
