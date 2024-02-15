/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  AccountingLocation,
  AccountingLocationFromJSON,
  AccountingLocationToJSON
} from './AccountingLocation'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetAccountingLocationsResponse
 */
export interface GetAccountingLocationsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAccountingLocationsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAccountingLocationsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAccountingLocationsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAccountingLocationsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAccountingLocationsResponse
   */
  operation: string
  /**
   *
   * @type {Array<AccountingLocation>}
   * @memberof GetAccountingLocationsResponse
   */
  data: Array<AccountingLocation>
  /**
   *
   * @type {Meta}
   * @memberof GetAccountingLocationsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetAccountingLocationsResponse
   */
  links?: Links
}

export function GetAccountingLocationsResponseFromJSON(json: any): GetAccountingLocationsResponse {
  return GetAccountingLocationsResponseFromJSONTyped(json, false)
}

export function GetAccountingLocationsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAccountingLocationsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(AccountingLocationFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetAccountingLocationsResponseToJSON(
  value?: GetAccountingLocationsResponse | null
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
    data: (value.data as Array<any>).map(AccountingLocationToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}