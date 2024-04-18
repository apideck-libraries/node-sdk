/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  GetConsumersResponseData,
  GetConsumersResponseDataFromJSON,
  GetConsumersResponseDataToJSON
} from './GetConsumersResponseData'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetConsumersResponse
 */
export interface GetConsumersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConsumersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConsumersResponse
   */
  status: string
  /**
   *
   * @type {Array<GetConsumersResponseData>}
   * @memberof GetConsumersResponse
   */
  data: Array<GetConsumersResponseData>
  /**
   *
   * @type {Meta}
   * @memberof GetConsumersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetConsumersResponse
   */
  links?: Links
}

export function GetConsumersResponseFromJSON(json: any): GetConsumersResponse {
  return GetConsumersResponseFromJSONTyped(json, false)
}

export function GetConsumersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConsumersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(GetConsumersResponseDataFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetConsumersResponseToJSON(value?: GetConsumersResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(GetConsumersResponseDataToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
