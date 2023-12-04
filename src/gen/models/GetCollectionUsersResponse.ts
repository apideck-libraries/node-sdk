/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CollectionUser, CollectionUserFromJSON, CollectionUserToJSON } from './CollectionUser'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCollectionUsersResponse
 */
export interface GetCollectionUsersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCollectionUsersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCollectionUsersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCollectionUsersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCollectionUsersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCollectionUsersResponse
   */
  operation: string
  /**
   *
   * @type {Array<CollectionUser>}
   * @memberof GetCollectionUsersResponse
   */
  data: Array<CollectionUser>
  /**
   *
   * @type {Meta}
   * @memberof GetCollectionUsersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCollectionUsersResponse
   */
  links?: Links
}

export function GetCollectionUsersResponseFromJSON(json: any): GetCollectionUsersResponse {
  return GetCollectionUsersResponseFromJSONTyped(json, false)
}

export function GetCollectionUsersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCollectionUsersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CollectionUserFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCollectionUsersResponseToJSON(value?: GetCollectionUsersResponse | null): any {
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
    data: (value.data as Array<any>).map(CollectionUserToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
