/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
import { Company, CompanyFromJSON, CompanyToJSON } from './Company'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCompaniesResponse1
 */
export interface GetCompaniesResponse1 {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCompaniesResponse1
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCompaniesResponse1
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCompaniesResponse1
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCompaniesResponse1
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCompaniesResponse1
   */
  operation: string
  /**
   *
   * @type {Array<Company>}
   * @memberof GetCompaniesResponse1
   */
  data: Array<Company>
  /**
   *
   * @type {Meta}
   * @memberof GetCompaniesResponse1
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCompaniesResponse1
   */
  links?: Links
}

export function GetCompaniesResponse1FromJSON(json: any): GetCompaniesResponse1 {
  return GetCompaniesResponse1FromJSONTyped(json, false)
}

export function GetCompaniesResponse1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCompaniesResponse1 {
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

export function GetCompaniesResponse1ToJSON(value?: GetCompaniesResponse1 | null): any {
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
