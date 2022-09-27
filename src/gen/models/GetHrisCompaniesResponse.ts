/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.63.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { HrisCompany, HrisCompanyFromJSON, HrisCompanyToJSON } from './HrisCompany'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetHrisCompaniesResponse
 */
export interface GetHrisCompaniesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetHrisCompaniesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetHrisCompaniesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetHrisCompaniesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetHrisCompaniesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetHrisCompaniesResponse
   */
  operation: string
  /**
   *
   * @type {Array<HrisCompany>}
   * @memberof GetHrisCompaniesResponse
   */
  data: Array<HrisCompany>
  /**
   *
   * @type {Meta}
   * @memberof GetHrisCompaniesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetHrisCompaniesResponse
   */
  links?: Links
}

export function GetHrisCompaniesResponseFromJSON(json: any): GetHrisCompaniesResponse {
  return GetHrisCompaniesResponseFromJSONTyped(json, false)
}

export function GetHrisCompaniesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetHrisCompaniesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(HrisCompanyFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetHrisCompaniesResponseToJSON(value?: GetHrisCompaniesResponse | null): any {
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
    data: (value.data as Array<any>).map(HrisCompanyToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
