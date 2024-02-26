/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Collection, CollectionFromJSON, CollectionToJSON } from './Collection'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCollectionsResponse
 */
export interface GetCollectionsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCollectionsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCollectionsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCollectionsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCollectionsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCollectionsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Collection>}
   * @memberof GetCollectionsResponse
   */
  data: Array<Collection>
  /**
   *
   * @type {Meta}
   * @memberof GetCollectionsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCollectionsResponse
   */
  links?: Links
}

export function GetCollectionsResponseFromJSON(json: any): GetCollectionsResponse {
  return GetCollectionsResponseFromJSONTyped(json, false)
}

export function GetCollectionsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCollectionsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CollectionFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCollectionsResponseToJSON(value?: GetCollectionsResponse | null): any {
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
    data: (value.data as Array<any>).map(CollectionToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
