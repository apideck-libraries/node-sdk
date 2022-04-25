/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.26.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Activity, ActivityFromJSON, ActivityToJSON } from './Activity'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetActivitiesResponse
 */
export interface GetActivitiesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetActivitiesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetActivitiesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetActivitiesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetActivitiesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetActivitiesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Activity>}
   * @memberof GetActivitiesResponse
   */
  data: Array<Activity>
  /**
   *
   * @type {Meta}
   * @memberof GetActivitiesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetActivitiesResponse
   */
  links?: Links
}

export function GetActivitiesResponseFromJSON(json: any): GetActivitiesResponse {
  return GetActivitiesResponseFromJSONTyped(json, false)
}

export function GetActivitiesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetActivitiesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ActivityFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetActivitiesResponseToJSON(value?: GetActivitiesResponse | null): any {
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
    data: (value.data as Array<any>).map(ActivityToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
