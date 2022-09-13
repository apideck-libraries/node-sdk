/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.56.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Invoice, InvoiceFromJSON, InvoiceToJSON } from './Invoice'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetInvoicesResponse
 */
export interface GetInvoicesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetInvoicesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetInvoicesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetInvoicesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetInvoicesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetInvoicesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Invoice>}
   * @memberof GetInvoicesResponse
   */
  data: Array<Invoice>
  /**
   *
   * @type {Meta}
   * @memberof GetInvoicesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetInvoicesResponse
   */
  links?: Links
}

export function GetInvoicesResponseFromJSON(json: any): GetInvoicesResponse {
  return GetInvoicesResponseFromJSONTyped(json, false)
}

export function GetInvoicesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetInvoicesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(InvoiceFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetInvoicesResponseToJSON(value?: GetInvoicesResponse | null): any {
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
    data: (value.data as Array<any>).map(InvoiceToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
