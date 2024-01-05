/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Payment, PaymentFromJSON, PaymentToJSON } from './Payment'

/**
 *
 * @export
 * @interface GetPaymentsResponse
 */
export interface GetPaymentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPaymentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPaymentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPaymentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPaymentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPaymentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Payment>}
   * @memberof GetPaymentsResponse
   */
  data: Array<Payment>
  /**
   *
   * @type {Meta}
   * @memberof GetPaymentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetPaymentsResponse
   */
  links?: Links
}

export function GetPaymentsResponseFromJSON(json: any): GetPaymentsResponse {
  return GetPaymentsResponseFromJSONTyped(json, false)
}

export function GetPaymentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPaymentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(PaymentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetPaymentsResponseToJSON(value?: GetPaymentsResponse | null): any {
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
    data: (value.data as Array<any>).map(PaymentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
