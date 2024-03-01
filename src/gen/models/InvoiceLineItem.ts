/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.5
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
 * @interface InvoiceLineItem
 */
export interface InvoiceLineItem {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof InvoiceLineItem
   */
  readonly id?: string
  /**
   * Row ID
   * @type {string}
   * @memberof InvoiceLineItem
   */
  row_id?: string
  /**
   * User defined item code
   * @type {string}
   * @memberof InvoiceLineItem
   */
  code?: string | null
  /**
   * Line number in the invoice
   * @type {number}
   * @memberof InvoiceLineItem
   */
  line_number?: number | null
  /**
   * User defined description
   * @type {string}
   * @memberof InvoiceLineItem
   */
  description?: string | null
  /**
   * Item type
   * @type {string}
   * @memberof InvoiceLineItem
   */
  type?: InvoiceLineItemType
  /**
   * Tax amount
   * @type {number}
   * @memberof InvoiceLineItem
   */
  tax_amount?: number | null
  /**
   * Total amount of the line item
   * @type {number}
   * @memberof InvoiceLineItem
   */
  total_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItem
   */
  quantity?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceLineItem
   */
  unit_price?: number | null
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   * @type {string}
   * @memberof InvoiceLineItem
   */
  unit_of_measure?: string | null
  /**
   * Discount percentage applied to the line item when supported downstream.
   * @type {number}
   * @memberof InvoiceLineItem
   */
  discount_percentage?: number | null
  /**
   * Discount amount applied to the line item when supported downstream.
   * @type {number}
   * @memberof InvoiceLineItem
   */
  discount_amount?: number | null
  /**
   * Location id
   * @type {string}
   * @memberof InvoiceLineItem
   */
  location_id?: string | null
  /**
   * Department id
   * @type {string}
   * @memberof InvoiceLineItem
   */
  department_id?: string | null
  /**
   *
   * @type {LinkedInvoiceItem}
   * @memberof InvoiceLineItem
   */
  item?: LinkedInvoiceItem
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof InvoiceLineItem
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof InvoiceLineItem
   */
  ledger_account?: LinkedLedgerAccount | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof InvoiceLineItem
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof InvoiceLineItem
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof InvoiceLineItem
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof InvoiceLineItem
   */
  readonly created_at?: Date | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof InvoiceLineItem
   */
  readonly updated_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceLineItemType {
  sales_item = 'sales_item',
  discount = 'discount',
  info = 'info',
  sub_total = 'sub_total',
  other = 'other'
}

export function InvoiceLineItemFromJSON(json: any): InvoiceLineItem {
  return InvoiceLineItemFromJSONTyped(json, false)
}

export function InvoiceLineItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceLineItem {
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
    discount_amount: !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    department_id: !exists(json, 'department_id') ? undefined : json['department_id'],
    item: !exists(json, 'item') ? undefined : LinkedInvoiceItemFromJSON(json['item']),
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function InvoiceLineItemToJSON(value?: InvoiceLineItem | null): any {
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
    discount_amount: value.discount_amount,
    location_id: value.location_id,
    department_id: value.department_id,
    item: LinkedInvoiceItemToJSON(value.item),
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    row_version: value.row_version
  }
}
