/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { UnifiedFile, UnifiedFileFromJSON, UnifiedFileToJSON } from './UnifiedFile'

/**
 *
 * @export
 * @interface GetFilesResponse
 */
export interface GetFilesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetFilesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetFilesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetFilesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetFilesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetFilesResponse
   */
  operation: string
  /**
   *
   * @type {Array<UnifiedFile>}
   * @memberof GetFilesResponse
   */
  data: Array<UnifiedFile>
  /**
   *
   * @type {Meta}
   * @memberof GetFilesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetFilesResponse
   */
  links?: Links
}

export function GetFilesResponseFromJSON(json: any): GetFilesResponse {
  return GetFilesResponseFromJSONTyped(json, false)
}

export function GetFilesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetFilesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(UnifiedFileFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetFilesResponseToJSON(value?: GetFilesResponse | null): any {
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
    data: (value.data as Array<any>).map(UnifiedFileToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
