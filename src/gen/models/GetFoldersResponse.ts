/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.58.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Folder, FolderFromJSON, FolderToJSON } from './Folder'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetFoldersResponse
 */
export interface GetFoldersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetFoldersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetFoldersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetFoldersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetFoldersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetFoldersResponse
   */
  operation: string
  /**
   *
   * @type {Array<Folder>}
   * @memberof GetFoldersResponse
   */
  data: Array<Folder>
  /**
   *
   * @type {Meta}
   * @memberof GetFoldersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetFoldersResponse
   */
  links?: Links
}

export function GetFoldersResponseFromJSON(json: any): GetFoldersResponse {
  return GetFoldersResponseFromJSONTyped(json, false)
}

export function GetFoldersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetFoldersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(FolderFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetFoldersResponseToJSON(value?: GetFoldersResponse | null): any {
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
    data: (value.data as Array<any>).map(FolderToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
