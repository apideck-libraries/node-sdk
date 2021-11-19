/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { User, UserFromJSON, UserToJSON } from './User'

/**
 *
 * @export
 * @interface GetUsersResponse
 */
export interface GetUsersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetUsersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetUsersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetUsersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetUsersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetUsersResponse
   */
  operation: string
  /**
   *
   * @type {Array<User>}
   * @memberof GetUsersResponse
   */
  data: Array<User>
  /**
   *
   * @type {Meta}
   * @memberof GetUsersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetUsersResponse
   */
  links?: Links
}

export function GetUsersResponseFromJSON(json: any): GetUsersResponse {
  return GetUsersResponseFromJSONTyped(json, false)
}

export function GetUsersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetUsersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(UserFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetUsersResponseToJSON(value?: GetUsersResponse | null): any {
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
    data: (value.data as Array<any>).map(UserToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
