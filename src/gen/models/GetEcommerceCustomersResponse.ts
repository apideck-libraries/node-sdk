/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceCustomer,
  EcommerceCustomerFromJSON,
  EcommerceCustomerToJSON
} from './EcommerceCustomer'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetEcommerceCustomersResponse
 */
export interface GetEcommerceCustomersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEcommerceCustomersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEcommerceCustomersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEcommerceCustomersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEcommerceCustomersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEcommerceCustomersResponse
   */
  operation: string
  /**
   *
   * @type {Array<EcommerceCustomer>}
   * @memberof GetEcommerceCustomersResponse
   */
  data: Array<EcommerceCustomer>
  /**
   *
   * @type {Meta}
   * @memberof GetEcommerceCustomersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetEcommerceCustomersResponse
   */
  links?: Links
}

export function GetEcommerceCustomersResponseFromJSON(json: any): GetEcommerceCustomersResponse {
  return GetEcommerceCustomersResponseFromJSONTyped(json, false)
}

export function GetEcommerceCustomersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEcommerceCustomersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(EcommerceCustomerFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetEcommerceCustomersResponseToJSON(
  value?: GetEcommerceCustomersResponse | null
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
    data: (value.data as Array<any>).map(EcommerceCustomerToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
