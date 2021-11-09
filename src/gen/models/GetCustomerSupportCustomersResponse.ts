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
import {
  CustomerSupportCustomer,
  CustomerSupportCustomerFromJSON,
  CustomerSupportCustomerToJSON
} from './CustomerSupportCustomer'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetCustomerSupportCustomersResponse
 */
export interface GetCustomerSupportCustomersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomerSupportCustomersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomerSupportCustomersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCustomerSupportCustomersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCustomerSupportCustomersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCustomerSupportCustomersResponse
   */
  operation: string
  /**
   *
   * @type {Array<CustomerSupportCustomer>}
   * @memberof GetCustomerSupportCustomersResponse
   */
  data: Array<CustomerSupportCustomer>
  /**
   *
   * @type {Meta}
   * @memberof GetCustomerSupportCustomersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCustomerSupportCustomersResponse
   */
  links?: Links
}

export function GetCustomerSupportCustomersResponseFromJSON(
  json: any
): GetCustomerSupportCustomersResponse {
  return GetCustomerSupportCustomersResponseFromJSONTyped(json, false)
}

export function GetCustomerSupportCustomersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomerSupportCustomersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CustomerSupportCustomerFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetCustomerSupportCustomersResponseToJSON(
  value?: GetCustomerSupportCustomersResponse | null
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
    data: (value.data as Array<any>).map(CustomerSupportCustomerToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
