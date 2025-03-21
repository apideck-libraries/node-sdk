/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { PosPayment, PosPaymentFromJSON, PosPaymentToJSON } from './PosPayment'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetPosPaymentsResponse
 */
export interface GetPosPaymentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPosPaymentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPosPaymentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPosPaymentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPosPaymentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPosPaymentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<PosPayment>}
   * @memberof GetPosPaymentsResponse
   */
  data: Array<PosPayment>
  /**
   *
   * @type {Meta}
   * @memberof GetPosPaymentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetPosPaymentsResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetPosPaymentsResponse
   */
  _raw?: Raw | null
}

export function GetPosPaymentsResponseFromJSON(json: any): GetPosPaymentsResponse {
  return GetPosPaymentsResponseFromJSONTyped(json, false)
}

export function GetPosPaymentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPosPaymentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(PosPaymentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetPosPaymentsResponseToJSON(value?: GetPosPaymentsResponse | null): any {
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
    data: (value.data as Array<any>).map(PosPaymentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
