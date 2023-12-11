/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Customer, CustomerFromJSON, CustomerToJSON } from './Customer'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCustomersResponse
 */
export interface GetCustomersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCustomersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCustomersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCustomersResponse
   */
  operation: string
  /**
   *
   * @type {Array<Customer>}
   * @memberof GetCustomersResponse
   */
  data: Array<Customer>
  /**
   *
   * @type {Meta}
   * @memberof GetCustomersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCustomersResponse
   */
  links?: Links
}

export function GetCustomersResponseFromJSON(json: any): GetCustomersResponse {
  return GetCustomersResponseFromJSONTyped(json, false)
}

export function GetCustomersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CustomerFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCustomersResponseToJSON(value?: GetCustomersResponse | null): any {
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
    data: (value.data as Array<any>).map(CustomerToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
