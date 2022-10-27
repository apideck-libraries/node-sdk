/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.73.0
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
 * @interface BillLineItem
 */
export interface BillLineItem {
  /**
   *
   * @type {string}
   * @memberof BillLineItem
   */
  readonly id?: string
  /**
   * Row ID
   * @type {string}
   * @memberof BillLineItem
   */
  row_id?: string
  /**
   * User defined item code
   * @type {string}
   * @memberof BillLineItem
   */
  code?: string | null
  /**
   * Line number in the invoice
   * @type {number}
   * @memberof BillLineItem
   */
  line_number?: number | null
  /**
   * User defined description
   * @type {string}
   * @memberof BillLineItem
   */
  description?: string | null
  /**
   * Bill Line Item type
   * @type {string}
   * @memberof BillLineItem
   */
  type?: BillLineItemType
  /**
   * Tax amount
   * @type {number}
   * @memberof BillLineItem
   */
  tax_amount?: number | null
  /**
   * Total amount of the line item
   * @type {number}
   * @memberof BillLineItem
   */
  total_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof BillLineItem
   */
  quantity?: number | null
  /**
   *
   * @type {number}
   * @memberof BillLineItem
   */
  unit_price?: number | null
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   * @type {string}
   * @memberof BillLineItem
   */
  unit_of_measure?: string | null
  /**
   * Discount percentage
   * @type {number}
   * @memberof BillLineItem
   */
  discount_percentage?: number | null
  /**
   * Location id
   * @type {string}
   * @memberof BillLineItem
   */
  location_id?: string | null
  /**
   * Department id
   * @type {string}
   * @memberof BillLineItem
   */
  department_id?: string | null
  /**
   *
   * @type {LinkedInvoiceItem}
   * @memberof BillLineItem
   */
  item?: LinkedInvoiceItem
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof BillLineItem
   */
  ledger_account?: LinkedLedgerAccount | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof BillLineItem
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {string}
   * @memberof BillLineItem
   */
  row_version?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum BillLineItemType {
  item = 'expense_item',
  account = 'expense_account'
}

export function BillLineItemFromJSON(json: any): BillLineItem {
  return BillLineItemFromJSONTyped(json, false)
}

export function BillLineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillLineItem {
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
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    department_id: !exists(json, 'department_id') ? undefined : json['department_id'],
    item: !exists(json, 'item') ? undefined : LinkedInvoiceItemFromJSON(json['item']),
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version']
  }
}

export function BillLineItemToJSON(value?: BillLineItem | null): any {
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
    location_id: value.location_id,
    department_id: value.department_id,
    item: LinkedInvoiceItemToJSON(value.item),
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    row_version: value.row_version
  }
}
