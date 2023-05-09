/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { EcommerceOrder, EcommerceOrderFromJSON, EcommerceOrderToJSON } from './EcommerceOrder'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetEcommerceOrdersResponse
 */
export interface GetEcommerceOrdersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEcommerceOrdersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEcommerceOrdersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEcommerceOrdersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEcommerceOrdersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEcommerceOrdersResponse
   */
  operation: string
  /**
   *
   * @type {Array<EcommerceOrder>}
   * @memberof GetEcommerceOrdersResponse
   */
  data: Array<EcommerceOrder>
  /**
   *
   * @type {Meta}
   * @memberof GetEcommerceOrdersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetEcommerceOrdersResponse
   */
  links?: Links
}

export function GetEcommerceOrdersResponseFromJSON(json: any): GetEcommerceOrdersResponse {
  return GetEcommerceOrdersResponseFromJSONTyped(json, false)
}

export function GetEcommerceOrdersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEcommerceOrdersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(EcommerceOrderFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetEcommerceOrdersResponseToJSON(value?: GetEcommerceOrdersResponse | null): any {
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
    data: (value.data as Array<any>).map(EcommerceOrderToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
