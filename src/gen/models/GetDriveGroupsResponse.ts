/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { DriveGroup, DriveGroupFromJSON, DriveGroupToJSON } from './DriveGroup'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetDriveGroupsResponse
 */
export interface GetDriveGroupsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetDriveGroupsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetDriveGroupsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetDriveGroupsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetDriveGroupsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetDriveGroupsResponse
   */
  operation: string
  /**
   *
   * @type {Array<DriveGroup>}
   * @memberof GetDriveGroupsResponse
   */
  data: Array<DriveGroup>
  /**
   *
   * @type {Meta}
   * @memberof GetDriveGroupsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetDriveGroupsResponse
   */
  links?: Links
}

export function GetDriveGroupsResponseFromJSON(json: any): GetDriveGroupsResponse {
  return GetDriveGroupsResponseFromJSONTyped(json, false)
}

export function GetDriveGroupsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetDriveGroupsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(DriveGroupFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetDriveGroupsResponseToJSON(value?: GetDriveGroupsResponse | null): any {
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
    data: (value.data as Array<any>).map(DriveGroupToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
