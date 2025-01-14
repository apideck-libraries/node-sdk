/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface InvoiceItemsFilter
 */
export interface InvoiceItemsFilter {
  /**
   * Name of Invoice Items to search for
   * @type {string}
   * @memberof InvoiceItemsFilter
   */
  name?: string
  /**
   * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
   * @type {string}
   * @memberof InvoiceItemsFilter
   */
  type?: InvoiceItemsFilterType
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceItemsFilterType {
  inventory = 'inventory',
  service = 'service',
  other = 'other'
}

export function InvoiceItemsFilterFromJSON(json: any): InvoiceItemsFilter {
  return InvoiceItemsFilterFromJSONTyped(json, false)
}

export function InvoiceItemsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceItemsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function InvoiceItemsFilterToJSON(value?: InvoiceItemsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    type: value.type
  }
}
