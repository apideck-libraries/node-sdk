/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { TaxRate, TaxRateFromJSON, TaxRateToJSON } from './TaxRate'

/**
 *
 * @export
 * @interface GetTaxRatesResponse
 */
export interface GetTaxRatesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTaxRatesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTaxRatesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTaxRatesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTaxRatesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTaxRatesResponse
   */
  operation: string
  /**
   *
   * @type {Array<TaxRate>}
   * @memberof GetTaxRatesResponse
   */
  data: Array<TaxRate>
  /**
   *
   * @type {Meta}
   * @memberof GetTaxRatesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetTaxRatesResponse
   */
  links?: Links
}

export function GetTaxRatesResponseFromJSON(json: any): GetTaxRatesResponse {
  return GetTaxRatesResponseFromJSONTyped(json, false)
}

export function GetTaxRatesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTaxRatesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(TaxRateFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetTaxRatesResponseToJSON(value?: GetTaxRatesResponse | null): any {
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
    data: (value.data as Array<any>).map(TaxRateToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
