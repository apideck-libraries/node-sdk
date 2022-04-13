/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'

/**
 *
 * @export
 * @interface InvoiceItemSalesDetails
 */
export interface InvoiceItemSalesDetails {
  /**
   *
   * @type {number}
   * @memberof InvoiceItemSalesDetails
   */
  unit_price?: number | null
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   * @type {string}
   * @memberof InvoiceItemSalesDetails
   */
  unit_of_measure?: string | null
  /**
   * Amounts are including tax
   * @type {boolean}
   * @memberof InvoiceItemSalesDetails
   */
  tax_inclusive?: boolean | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof InvoiceItemSalesDetails
   */
  tax_rate?: LinkedTaxRate
}

export function InvoiceItemSalesDetailsFromJSON(json: any): InvoiceItemSalesDetails {
  return InvoiceItemSalesDetailsFromJSONTyped(json, false)
}

export function InvoiceItemSalesDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceItemSalesDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    unit_of_measure: !exists(json, 'unit_of_measure') ? undefined : json['unit_of_measure'],
    tax_inclusive: !exists(json, 'tax_inclusive') ? undefined : json['tax_inclusive'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate'])
  }
}

export function InvoiceItemSalesDetailsToJSON(value?: InvoiceItemSalesDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unit_price: value.unit_price,
    unit_of_measure: value.unit_of_measure,
    tax_inclusive: value.tax_inclusive,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate)
  }
}
