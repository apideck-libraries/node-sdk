/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.84.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { SharedLink, SharedLinkFromJSON, SharedLinkToJSON } from './SharedLink'

/**
 *
 * @export
 * @interface GetSharedLinksResponse
 */
export interface GetSharedLinksResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetSharedLinksResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetSharedLinksResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetSharedLinksResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetSharedLinksResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetSharedLinksResponse
   */
  operation: string
  /**
   *
   * @type {Array<SharedLink>}
   * @memberof GetSharedLinksResponse
   */
  data: Array<SharedLink>
  /**
   *
   * @type {Meta}
   * @memberof GetSharedLinksResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetSharedLinksResponse
   */
  links?: Links
}

export function GetSharedLinksResponseFromJSON(json: any): GetSharedLinksResponse {
  return GetSharedLinksResponseFromJSONTyped(json, false)
}

export function GetSharedLinksResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetSharedLinksResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(SharedLinkFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetSharedLinksResponseToJSON(value?: GetSharedLinksResponse | null): any {
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
    data: (value.data as Array<any>).map(SharedLinkToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
