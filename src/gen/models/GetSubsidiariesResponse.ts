/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Subsidiary, SubsidiaryFromJSON, SubsidiaryToJSON } from './Subsidiary'

/**
 *
 * @export
 * @interface GetSubsidiariesResponse
 */
export interface GetSubsidiariesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetSubsidiariesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetSubsidiariesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetSubsidiariesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetSubsidiariesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetSubsidiariesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Subsidiary>}
   * @memberof GetSubsidiariesResponse
   */
  data: Array<Subsidiary>
  /**
   *
   * @type {Meta}
   * @memberof GetSubsidiariesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetSubsidiariesResponse
   */
  links?: Links
}

export function GetSubsidiariesResponseFromJSON(json: any): GetSubsidiariesResponse {
  return GetSubsidiariesResponseFromJSONTyped(json, false)
}

export function GetSubsidiariesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetSubsidiariesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(SubsidiaryFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetSubsidiariesResponseToJSON(value?: GetSubsidiariesResponse | null): any {
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
    data: (value.data as Array<any>).map(SubsidiaryToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
