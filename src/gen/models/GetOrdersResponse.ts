/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Order, OrderFromJSON, OrderToJSON } from './Order'

/**
 *
 * @export
 * @interface GetOrdersResponse
 */
export interface GetOrdersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOrdersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOrdersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOrdersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOrdersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOrdersResponse
   */
  operation: string
  /**
   *
   * @type {Array<Order>}
   * @memberof GetOrdersResponse
   */
  data: Array<Order>
  /**
   *
   * @type {Meta}
   * @memberof GetOrdersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetOrdersResponse
   */
  links?: Links
}

export function GetOrdersResponseFromJSON(json: any): GetOrdersResponse {
  return GetOrdersResponseFromJSONTyped(json, false)
}

export function GetOrdersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOrdersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(OrderFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetOrdersResponseToJSON(value?: GetOrdersResponse | null): any {
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
    data: (value.data as Array<any>).map(OrderToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
