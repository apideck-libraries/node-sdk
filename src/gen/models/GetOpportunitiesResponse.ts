/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.6.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Opportunity, OpportunityFromJSON, OpportunityToJSON } from './Opportunity'

/**
 *
 * @export
 * @interface GetOpportunitiesResponse
 */
export interface GetOpportunitiesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOpportunitiesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOpportunitiesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Opportunity>}
   * @memberof GetOpportunitiesResponse
   */
  data: Array<Opportunity>
  /**
   *
   * @type {Meta}
   * @memberof GetOpportunitiesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetOpportunitiesResponse
   */
  links?: Links
}

export function GetOpportunitiesResponseFromJSON(json: any): GetOpportunitiesResponse {
  return GetOpportunitiesResponseFromJSONTyped(json, false)
}

export function GetOpportunitiesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOpportunitiesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(OpportunityFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetOpportunitiesResponseToJSON(value?: GetOpportunitiesResponse | null): any {
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
    data: (value.data as Array<any>).map(OpportunityToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
