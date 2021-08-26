/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'

/**
 *
 * @export
 * @interface InvoiceLineItems
 */
export interface InvoiceLineItems {
  /**
   *
   * @type {string}
   * @memberof InvoiceLineItems
   */
  readonly id?: string
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  line_number?: number | null
  /**
   *
   * @type {string}
   * @memberof InvoiceLineItems
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof InvoiceLineItems
   */
  type?: string | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  tax_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  total_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  quantity?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  unit_price?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  discount_percentage?: number | null
  /**
   * ID of the linked item
   * @type {number}
   * @memberof InvoiceLineItems
   */
  item_id?: number | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof InvoiceLineItems
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {object}
   * @memberof InvoiceLineItems
   */
  general_ledger_account?: object
}

export function InvoiceLineItemsFromJSON(json: any): InvoiceLineItems {
  return InvoiceLineItemsFromJSONTyped(json, false)
}

export function InvoiceLineItemsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceLineItems {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    line_number: !exists(json, 'line_number') ? undefined : json['line_number'],
    description: !exists(json, 'description') ? undefined : json['description'],
    type: !exists(json, 'type') ? undefined : json['type'],
    tax_amount: !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    discount_percentage: !exists(json, 'discount_percentage')
      ? undefined
      : json['discount_percentage'],
    item_id: !exists(json, 'item_id') ? undefined : json['item_id'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    general_ledger_account: !exists(json, 'general_ledger_account')
      ? undefined
      : json['general_ledger_account']
  }
}

export function InvoiceLineItemsToJSON(value?: InvoiceLineItems | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    line_number: value.line_number,
    description: value.description,
    type: value.type,
    tax_amount: value.tax_amount,
    total_amount: value.total_amount,
    quantity: value.quantity,
    unit_price: value.unit_price,
    discount_percentage: value.discount_percentage,
    item_id: value.item_id,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    general_ledger_account: value.general_ledger_account
  }
}
