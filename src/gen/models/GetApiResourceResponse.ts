/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.44.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ApiResource, ApiResourceFromJSON, ApiResourceToJSON } from './ApiResource'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetApiResourceResponse
 */
export interface GetApiResourceResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApiResourceResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApiResourceResponse
   */
  status: string
  /**
   *
   * @type {ApiResource}
   * @memberof GetApiResourceResponse
   */
  data: ApiResource
  /**
   *
   * @type {Meta}
   * @memberof GetApiResourceResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetApiResourceResponse
   */
  links?: Links
}

export function GetApiResourceResponseFromJSON(json: any): GetApiResourceResponse {
  return GetApiResourceResponseFromJSONTyped(json, false)
}

export function GetApiResourceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApiResourceResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ApiResourceFromJSON(json['data']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetApiResourceResponseToJSON(value?: GetApiResourceResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ApiResourceToJSON(value.data),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
