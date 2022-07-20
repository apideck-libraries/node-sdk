/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Modifier, ModifierFromJSON, ModifierToJSON } from './Modifier'

/**
 *
 * @export
 * @interface GetModifiersResponse
 */
export interface GetModifiersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetModifiersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetModifiersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetModifiersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetModifiersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetModifiersResponse
   */
  operation: string
  /**
   *
   * @type {Array<Modifier>}
   * @memberof GetModifiersResponse
   */
  data: Array<Modifier>
  /**
   *
   * @type {Meta}
   * @memberof GetModifiersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetModifiersResponse
   */
  links?: Links
}

export function GetModifiersResponseFromJSON(json: any): GetModifiersResponse {
  return GetModifiersResponseFromJSONTyped(json, false)
}

export function GetModifiersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetModifiersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ModifierFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetModifiersResponseToJSON(value?: GetModifiersResponse | null): any {
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
    data: (value.data as Array<any>).map(ModifierToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
