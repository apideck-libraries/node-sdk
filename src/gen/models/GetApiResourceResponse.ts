/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ApiResource, ApiResourceFromJSON, ApiResourceToJSON } from './ApiResource'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

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
   * @type {Raw}
   * @memberof GetApiResourceResponse
   */
  _raw?: Raw | null
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
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw']),
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
    _raw: RawToJSON(value._raw),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
