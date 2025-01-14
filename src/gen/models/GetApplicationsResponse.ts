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
import { Application, ApplicationFromJSON, ApplicationToJSON } from './Application'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetApplicationsResponse
 */
export interface GetApplicationsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApplicationsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApplicationsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetApplicationsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetApplicationsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetApplicationsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Application>}
   * @memberof GetApplicationsResponse
   */
  data: Array<Application>
  /**
   *
   * @type {Meta}
   * @memberof GetApplicationsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetApplicationsResponse
   */
  links?: Links
}

export function GetApplicationsResponseFromJSON(json: any): GetApplicationsResponse {
  return GetApplicationsResponseFromJSONTyped(json, false)
}

export function GetApplicationsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApplicationsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ApplicationFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetApplicationsResponseToJSON(value?: GetApplicationsResponse | null): any {
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
    data: (value.data as Array<any>).map(ApplicationToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
