/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.49.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { OrderType, OrderTypeFromJSON, OrderTypeToJSON } from './OrderType'

/**
 *
 * @export
 * @interface GetOrderTypesResponse
 */
export interface GetOrderTypesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOrderTypesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOrderTypesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOrderTypesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOrderTypesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOrderTypesResponse
   */
  operation: string
  /**
   *
   * @type {Array<OrderType>}
   * @memberof GetOrderTypesResponse
   */
  data: Array<OrderType>
  /**
   *
   * @type {Meta}
   * @memberof GetOrderTypesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetOrderTypesResponse
   */
  links?: Links
}

export function GetOrderTypesResponseFromJSON(json: any): GetOrderTypesResponse {
  return GetOrderTypesResponseFromJSONTyped(json, false)
}

export function GetOrderTypesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOrderTypesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(OrderTypeFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetOrderTypesResponseToJSON(value?: GetOrderTypesResponse | null): any {
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
    data: (value.data as Array<any>).map(OrderTypeToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
