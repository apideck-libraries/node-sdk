/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Bill, BillFromJSON, BillToJSON } from './Bill'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetBillsResponse
 */
export interface GetBillsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetBillsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetBillsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetBillsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetBillsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetBillsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Bill>}
   * @memberof GetBillsResponse
   */
  data: Array<Bill>
  /**
   *
   * @type {Meta}
   * @memberof GetBillsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetBillsResponse
   */
  links?: Links
}

export function GetBillsResponseFromJSON(json: any): GetBillsResponse {
  return GetBillsResponseFromJSONTyped(json, false)
}

export function GetBillsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetBillsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(BillFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetBillsResponseToJSON(value?: GetBillsResponse | null): any {
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
    data: (value.data as Array<any>).map(BillToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
