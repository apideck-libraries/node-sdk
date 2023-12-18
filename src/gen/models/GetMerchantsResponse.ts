/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Merchant, MerchantFromJSON, MerchantToJSON } from './Merchant'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetMerchantsResponse
 */
export interface GetMerchantsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetMerchantsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetMerchantsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetMerchantsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetMerchantsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetMerchantsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Merchant>}
   * @memberof GetMerchantsResponse
   */
  data: Array<Merchant>
  /**
   *
   * @type {Meta}
   * @memberof GetMerchantsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetMerchantsResponse
   */
  links?: Links
}

export function GetMerchantsResponseFromJSON(json: any): GetMerchantsResponse {
  return GetMerchantsResponseFromJSONTyped(json, false)
}

export function GetMerchantsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetMerchantsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(MerchantFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetMerchantsResponseToJSON(value?: GetMerchantsResponse | null): any {
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
    data: (value.data as Array<any>).map(MerchantToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
