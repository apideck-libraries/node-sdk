/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.74.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Api, ApiFromJSON, ApiToJSON } from './Api'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetApisResponse
 */
export interface GetApisResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApisResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApisResponse
   */
  status: string
  /**
   *
   * @type {Array<Api>}
   * @memberof GetApisResponse
   */
  data: Array<Api>
  /**
   *
   * @type {Meta}
   * @memberof GetApisResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetApisResponse
   */
  links?: Links
}

export function GetApisResponseFromJSON(json: any): GetApisResponse {
  return GetApisResponseFromJSONTyped(json, false)
}

export function GetApisResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApisResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(ApiFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetApisResponseToJSON(value?: GetApisResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(ApiToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
