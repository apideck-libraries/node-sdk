/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Log, LogFromJSON, LogToJSON } from './Log'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetLogsResponse
 */
export interface GetLogsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLogsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLogsResponse
   */
  status: string
  /**
   *
   * @type {Array<Log>}
   * @memberof GetLogsResponse
   */
  data: Array<Log>
  /**
   *
   * @type {Meta}
   * @memberof GetLogsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetLogsResponse
   */
  links?: Links
}

export function GetLogsResponseFromJSON(json: any): GetLogsResponse {
  return GetLogsResponseFromJSONTyped(json, false)
}

export function GetLogsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLogsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(LogFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetLogsResponseToJSON(value?: GetLogsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(LogToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
