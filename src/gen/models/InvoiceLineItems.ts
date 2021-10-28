/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  LinkedInvoiceItem,
  LinkedInvoiceItemFromJSON,
  LinkedInvoiceItemToJSON
} from './LinkedInvoiceItem'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
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
   * @type {string}
   * @memberof InvoiceLineItems
   */
  row_id?: string
  /**
   * User defined item code
   * @type {string}
   * @memberof InvoiceLineItems
   */
  code?: string | null
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
  type?: InvoiceLineItemsType
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
   * @type {string}
   * @memberof InvoiceLineItems
   */
  unit_of_measure?: string | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItems
   */
  discount_percentage?: number | null
  /**
   *
   * @type {LinkedInvoiceItem}
   * @memberof InvoiceLineItems
   */
  item?: LinkedInvoiceItem
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof InvoiceLineItems
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof InvoiceLineItems
   */
  ledger_account?: LinkedLedgerAccount
  /**
   *
   * @type {string}
   * @memberof InvoiceLineItems
   */
  row_version?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceLineItemsType {
  inventory = 'inventory',
  service = 'service'
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
    row_id: !exists(json, 'row_id') ? undefined : json['row_id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    line_number: !exists(json, 'line_number') ? undefined : json['line_number'],
    description: !exists(json, 'description') ? undefined : json['description'],
    type: !exists(json, 'type') ? undefined : json['type'],
    tax_amount: !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    unit_of_measure: !exists(json, 'unit_of_measure') ? undefined : json['unit_of_measure'],
    discount_percentage: !exists(json, 'discount_percentage')
      ? undefined
      : json['discount_percentage'],
    item: !exists(json, 'item') ? undefined : LinkedInvoiceItemFromJSON(json['item']),
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version']
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
    row_id: value.row_id,
    code: value.code,
    line_number: value.line_number,
    description: value.description,
    type: value.type,
    tax_amount: value.tax_amount,
    total_amount: value.total_amount,
    quantity: value.quantity,
    unit_price: value.unit_price,
    unit_of_measure: value.unit_of_measure,
    discount_percentage: value.discount_percentage,
    item: LinkedInvoiceItemToJSON(value.item),
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    row_version: value.row_version
  }
}
