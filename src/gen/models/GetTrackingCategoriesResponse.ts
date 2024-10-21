/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import {
  TrackingCategory,
  TrackingCategoryFromJSON,
  TrackingCategoryToJSON
} from './TrackingCategory'

/**
 *
 * @export
 * @interface GetTrackingCategoriesResponse
 */
export interface GetTrackingCategoriesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTrackingCategoriesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTrackingCategoriesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTrackingCategoriesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTrackingCategoriesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTrackingCategoriesResponse
   */
  operation: string
  /**
   *
   * @type {Array<TrackingCategory>}
   * @memberof GetTrackingCategoriesResponse
   */
  data: Array<TrackingCategory>
  /**
   *
   * @type {Meta}
   * @memberof GetTrackingCategoriesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetTrackingCategoriesResponse
   */
  links?: Links
}

export function GetTrackingCategoriesResponseFromJSON(json: any): GetTrackingCategoriesResponse {
  return GetTrackingCategoriesResponseFromJSONTyped(json, false)
}

export function GetTrackingCategoriesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTrackingCategoriesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(TrackingCategoryFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetTrackingCategoriesResponseToJSON(
  value?: GetTrackingCategoriesResponse | null
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
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: (value.data as Array<any>).map(TrackingCategoryToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
