/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.3
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
 * @interface InvoiceItemFilter
 */
export interface InvoiceItemFilter {
  /**
   * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
   * @type {string}
   * @memberof InvoiceItemFilter
   */
  type?: InvoiceItemFilterType
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceItemFilterType {
  inventory = 'inventory',
  service = 'service',
  other = 'other'
}

export function InvoiceItemFilterFromJSON(json: any): InvoiceItemFilter {
  return InvoiceItemFilterFromJSONTyped(json, false)
}

export function InvoiceItemFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceItemFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function InvoiceItemFilterToJSON(value?: InvoiceItemFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type
  }
}