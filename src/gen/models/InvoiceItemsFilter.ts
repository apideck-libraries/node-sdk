/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.54.0
 *
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
    name: !exists(json, 'name') ? undefined : json['name']
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
    name: value.name
  }
}
