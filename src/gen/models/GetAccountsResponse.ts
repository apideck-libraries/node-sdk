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
import { Account, AccountFromJSON, AccountToJSON } from './Account'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetAccountsResponse
 */
export interface GetAccountsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAccountsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAccountsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAccountsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAccountsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAccountsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Account>}
   * @memberof GetAccountsResponse
   */
  data: Array<Account>
  /**
   *
   * @type {Meta}
   * @memberof GetAccountsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetAccountsResponse
   */
  links?: Links
}

export function GetAccountsResponseFromJSON(json: any): GetAccountsResponse {
  return GetAccountsResponseFromJSONTyped(json, false)
}

export function GetAccountsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAccountsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(AccountFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetAccountsResponseToJSON(value?: GetAccountsResponse | null): any {
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
    data: (value.data as Array<any>).map(AccountToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
