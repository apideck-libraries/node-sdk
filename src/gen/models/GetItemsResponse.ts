/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.47.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Item, ItemFromJSON, ItemToJSON } from './Item'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetItemsResponse
 */
export interface GetItemsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetItemsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetItemsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetItemsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetItemsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetItemsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Item>}
   * @memberof GetItemsResponse
   */
  data: Array<Item>
  /**
   *
   * @type {Meta}
   * @memberof GetItemsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetItemsResponse
   */
  links?: Links
}

export function GetItemsResponseFromJSON(json: any): GetItemsResponse {
  return GetItemsResponseFromJSONTyped(json, false)
}

export function GetItemsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetItemsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ItemFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetItemsResponseToJSON(value?: GetItemsResponse | null): any {
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
    data: (value.data as Array<any>).map(ItemToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
