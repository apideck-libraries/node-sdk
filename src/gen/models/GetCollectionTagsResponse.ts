/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CollectionTag, CollectionTagFromJSON, CollectionTagToJSON } from './CollectionTag'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCollectionTagsResponse
 */
export interface GetCollectionTagsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCollectionTagsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCollectionTagsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCollectionTagsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCollectionTagsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCollectionTagsResponse
   */
  operation: string
  /**
   *
   * @type {Array<CollectionTag>}
   * @memberof GetCollectionTagsResponse
   */
  data: Array<CollectionTag>
  /**
   *
   * @type {Meta}
   * @memberof GetCollectionTagsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCollectionTagsResponse
   */
  links?: Links
}

export function GetCollectionTagsResponseFromJSON(json: any): GetCollectionTagsResponse {
  return GetCollectionTagsResponseFromJSONTyped(json, false)
}

export function GetCollectionTagsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCollectionTagsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CollectionTagFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCollectionTagsResponseToJSON(value?: GetCollectionTagsResponse | null): any {
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
    data: (value.data as Array<any>).map(CollectionTagToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
