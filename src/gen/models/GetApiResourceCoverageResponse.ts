/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.80.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ApiResourceCoverage,
  ApiResourceCoverageFromJSON,
  ApiResourceCoverageToJSON
} from './ApiResourceCoverage'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetApiResourceCoverageResponse
 */
export interface GetApiResourceCoverageResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApiResourceCoverageResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApiResourceCoverageResponse
   */
  status: string
  /**
   *
   * @type {ApiResourceCoverage}
   * @memberof GetApiResourceCoverageResponse
   */
  data: ApiResourceCoverage
  /**
   *
   * @type {Meta}
   * @memberof GetApiResourceCoverageResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetApiResourceCoverageResponse
   */
  links?: Links
}

export function GetApiResourceCoverageResponseFromJSON(json: any): GetApiResourceCoverageResponse {
  return GetApiResourceCoverageResponseFromJSONTyped(json, false)
}

export function GetApiResourceCoverageResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApiResourceCoverageResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ApiResourceCoverageFromJSON(json['data']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetApiResourceCoverageResponseToJSON(
  value?: GetApiResourceCoverageResponse | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ApiResourceCoverageToJSON(value.data),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
