/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.57.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Location, LocationFromJSON, LocationToJSON } from './Location'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetLocationsResponse
 */
export interface GetLocationsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLocationsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLocationsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLocationsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLocationsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLocationsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Location>}
   * @memberof GetLocationsResponse
   */
  data: Array<Location>
  /**
   *
   * @type {Meta}
   * @memberof GetLocationsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetLocationsResponse
   */
  links?: Links
}

export function GetLocationsResponseFromJSON(json: any): GetLocationsResponse {
  return GetLocationsResponseFromJSONTyped(json, false)
}

export function GetLocationsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLocationsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(LocationFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetLocationsResponseToJSON(value?: GetLocationsResponse | null): any {
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
    data: (value.data as Array<any>).map(LocationToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
