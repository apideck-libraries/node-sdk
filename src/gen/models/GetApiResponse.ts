/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.71.0
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
 * @interface GetApiResponse
 */
export interface GetApiResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApiResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApiResponse
   */
  status: string
  /**
   *
   * @type {Api}
   * @memberof GetApiResponse
   */
  data: Api
  /**
   *
   * @type {Meta}
   * @memberof GetApiResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetApiResponse
   */
  links?: Links
}

export function GetApiResponseFromJSON(json: any): GetApiResponse {
  return GetApiResponseFromJSONTyped(json, false)
}

export function GetApiResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApiResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ApiFromJSON(json['data']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetApiResponseToJSON(value?: GetApiResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ApiToJSON(value.data),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
