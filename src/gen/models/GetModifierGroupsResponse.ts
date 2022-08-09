/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { ModifierGroup, ModifierGroupFromJSON, ModifierGroupToJSON } from './ModifierGroup'

/**
 *
 * @export
 * @interface GetModifierGroupsResponse
 */
export interface GetModifierGroupsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetModifierGroupsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetModifierGroupsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetModifierGroupsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetModifierGroupsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetModifierGroupsResponse
   */
  operation: string
  /**
   *
   * @type {Array<ModifierGroup>}
   * @memberof GetModifierGroupsResponse
   */
  data: Array<ModifierGroup>
  /**
   *
   * @type {Meta}
   * @memberof GetModifierGroupsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetModifierGroupsResponse
   */
  links?: Links
}

export function GetModifierGroupsResponseFromJSON(json: any): GetModifierGroupsResponse {
  return GetModifierGroupsResponseFromJSONTyped(json, false)
}

export function GetModifierGroupsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetModifierGroupsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ModifierGroupFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetModifierGroupsResponseToJSON(value?: GetModifierGroupsResponse | null): any {
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
    data: (value.data as Array<any>).map(ModifierGroupToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
