/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { PurchaseOrder, PurchaseOrderFromJSON, PurchaseOrderToJSON } from './PurchaseOrder'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetPurchaseOrdersResponse
 */
export interface GetPurchaseOrdersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPurchaseOrdersResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPurchaseOrdersResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPurchaseOrdersResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPurchaseOrdersResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPurchaseOrdersResponse
   */
  operation: string
  /**
   *
   * @type {Array<PurchaseOrder>}
   * @memberof GetPurchaseOrdersResponse
   */
  data: Array<PurchaseOrder>
  /**
   *
   * @type {Meta}
   * @memberof GetPurchaseOrdersResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetPurchaseOrdersResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetPurchaseOrdersResponse
   */
  _raw?: Raw | null
}

export function GetPurchaseOrdersResponseFromJSON(json: any): GetPurchaseOrdersResponse {
  return GetPurchaseOrdersResponseFromJSONTyped(json, false)
}

export function GetPurchaseOrdersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPurchaseOrdersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(PurchaseOrderFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetPurchaseOrdersResponseToJSON(value?: GetPurchaseOrdersResponse | null): any {
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
    data: (value.data as Array<any>).map(PurchaseOrderToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
