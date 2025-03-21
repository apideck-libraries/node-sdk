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
import { InvoiceItem, InvoiceItemFromJSON, InvoiceItemToJSON } from './InvoiceItem'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetInvoiceItemsResponse
 */
export interface GetInvoiceItemsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetInvoiceItemsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetInvoiceItemsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetInvoiceItemsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetInvoiceItemsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetInvoiceItemsResponse
   */
  operation: string
  /**
   *
   * @type {Array<InvoiceItem>}
   * @memberof GetInvoiceItemsResponse
   */
  data: Array<InvoiceItem>
  /**
   *
   * @type {Meta}
   * @memberof GetInvoiceItemsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetInvoiceItemsResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetInvoiceItemsResponse
   */
  _raw?: Raw | null
}

export function GetInvoiceItemsResponseFromJSON(json: any): GetInvoiceItemsResponse {
  return GetInvoiceItemsResponseFromJSONTyped(json, false)
}

export function GetInvoiceItemsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetInvoiceItemsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(InvoiceItemFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetInvoiceItemsResponseToJSON(value?: GetInvoiceItemsResponse | null): any {
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
    data: (value.data as Array<any>).map(InvoiceItemToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
