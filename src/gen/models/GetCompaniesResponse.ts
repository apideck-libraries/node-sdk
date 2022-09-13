/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.55.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Company, CompanyFromJSON, CompanyToJSON } from './Company'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCompaniesResponse
 */
export interface GetCompaniesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCompaniesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCompaniesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCompaniesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCompaniesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCompaniesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Company>}
   * @memberof GetCompaniesResponse
   */
  data: Array<Company>
  /**
   *
   * @type {Meta}
   * @memberof GetCompaniesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCompaniesResponse
   */
  links?: Links
}

export function GetCompaniesResponseFromJSON(json: any): GetCompaniesResponse {
  return GetCompaniesResponseFromJSONTyped(json, false)
}

export function GetCompaniesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCompaniesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CompanyFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCompaniesResponseToJSON(value?: GetCompaniesResponse | null): any {
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
    data: (value.data as Array<any>).map(CompanyToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
