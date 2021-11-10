/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { LedgerAccount, LedgerAccountFromJSON, LedgerAccountToJSON } from './LedgerAccount'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetLedgerAccountsResponse
 */
export interface GetLedgerAccountsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLedgerAccountsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLedgerAccountsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLedgerAccountsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLedgerAccountsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLedgerAccountsResponse
   */
  operation: string
  /**
   *
   * @type {Array<LedgerAccount>}
   * @memberof GetLedgerAccountsResponse
   */
  data: Array<LedgerAccount>
  /**
   *
   * @type {Meta}
   * @memberof GetLedgerAccountsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetLedgerAccountsResponse
   */
  links?: Links
}

export function GetLedgerAccountsResponseFromJSON(json: any): GetLedgerAccountsResponse {
  return GetLedgerAccountsResponseFromJSONTyped(json, false)
}

export function GetLedgerAccountsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLedgerAccountsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(LedgerAccountFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetLedgerAccountsResponseToJSON(value?: GetLedgerAccountsResponse | null): any {
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
    data: (value.data as Array<any>).map(LedgerAccountToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
