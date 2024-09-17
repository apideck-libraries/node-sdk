/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { BillPayment, BillPaymentFromJSON, BillPaymentToJSON } from './BillPayment'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetBillPaymentsResponse
 */
export interface GetBillPaymentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetBillPaymentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetBillPaymentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetBillPaymentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetBillPaymentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetBillPaymentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<BillPayment>}
   * @memberof GetBillPaymentsResponse
   */
  data: Array<BillPayment>
  /**
   *
   * @type {Meta}
   * @memberof GetBillPaymentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetBillPaymentsResponse
   */
  links?: Links
}

export function GetBillPaymentsResponseFromJSON(json: any): GetBillPaymentsResponse {
  return GetBillPaymentsResponseFromJSONTyped(json, false)
}

export function GetBillPaymentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetBillPaymentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(BillPaymentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetBillPaymentsResponseToJSON(value?: GetBillPaymentsResponse | null): any {
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
    data: (value.data as Array<any>).map(BillPaymentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
