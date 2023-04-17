/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { EcommerceStore, EcommerceStoreFromJSON, EcommerceStoreToJSON } from './EcommerceStore'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetStoresResponse
 */
export interface GetStoresResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetStoresResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetStoresResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetStoresResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetStoresResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetStoresResponse
   */
  operation: string
  /**
   *
   * @type {Array<EcommerceStore>}
   * @memberof GetStoresResponse
   */
  data: Array<EcommerceStore>
  /**
   *
   * @type {Meta}
   * @memberof GetStoresResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetStoresResponse
   */
  links?: Links
}

export function GetStoresResponseFromJSON(json: any): GetStoresResponse {
  return GetStoresResponseFromJSONTyped(json, false)
}

export function GetStoresResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetStoresResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(EcommerceStoreFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetStoresResponseToJSON(value?: GetStoresResponse | null): any {
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
    data: (value.data as Array<any>).map(EcommerceStoreToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
