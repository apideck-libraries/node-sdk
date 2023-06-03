/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Drive, DriveFromJSON, DriveToJSON } from './Drive'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetDrivesResponse
 */
export interface GetDrivesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetDrivesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetDrivesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetDrivesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetDrivesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetDrivesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Drive>}
   * @memberof GetDrivesResponse
   */
  data: Array<Drive>
  /**
   *
   * @type {Meta}
   * @memberof GetDrivesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetDrivesResponse
   */
  links?: Links
}

export function GetDrivesResponseFromJSON(json: any): GetDrivesResponse {
  return GetDrivesResponseFromJSONTyped(json, false)
}

export function GetDrivesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetDrivesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(DriveFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetDrivesResponseToJSON(value?: GetDrivesResponse | null): any {
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
    data: (value.data as Array<any>).map(DriveToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
