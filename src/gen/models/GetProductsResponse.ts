/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceProduct,
  EcommerceProductFromJSON,
  EcommerceProductToJSON
} from './EcommerceProduct'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetProductsResponse
 */
export interface GetProductsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetProductsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetProductsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetProductsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetProductsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetProductsResponse
   */
  operation: string
  /**
   *
   * @type {Array<EcommerceProduct>}
   * @memberof GetProductsResponse
   */
  data: Array<EcommerceProduct>
  /**
   *
   * @type {Meta}
   * @memberof GetProductsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetProductsResponse
   */
  links?: Links
}

export function GetProductsResponseFromJSON(json: any): GetProductsResponse {
  return GetProductsResponseFromJSONTyped(json, false)
}

export function GetProductsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetProductsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(EcommerceProductFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetProductsResponseToJSON(value?: GetProductsResponse | null): any {
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
    data: (value.data as Array<any>).map(EcommerceProductToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
