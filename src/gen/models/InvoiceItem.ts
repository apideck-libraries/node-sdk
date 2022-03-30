/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.17.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  InvoiceItemSalesDetails,
  InvoiceItemSalesDetailsFromJSON,
  InvoiceItemSalesDetailsToJSON
} from './InvoiceItemSalesDetails'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'

/**
 *
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  description?: string | null
  /**
   * User defined item code
   * @type {string}
   * @memberof InvoiceItem
   */
  code?: string | null
  /**
   * Item will be available on sales transactions
   * @type {boolean}
   * @memberof InvoiceItem
   */
  sold?: boolean | null
  /**
   * Item is available for purchase transactions
   * @type {boolean}
   * @memberof InvoiceItem
   */
  purchased?: boolean | null
  /**
   * Item is inventoried
   * @type {boolean}
   * @memberof InvoiceItem
   */
  tracked?: boolean | null
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  type?: InvoiceItemType
  /**
   *
   * @type {InvoiceItemSalesDetails}
   * @memberof InvoiceItem
   */
  sales_details?: InvoiceItemSalesDetails
  /**
   *
   * @type {InvoiceItemSalesDetails}
   * @memberof InvoiceItem
   */
  purchase_details?: InvoiceItemSalesDetails
  /**
   *
   * @type {number}
   * @memberof InvoiceItem
   */
  quantity?: number | null
  /**
   *
   * @type {number}
   * @memberof InvoiceItem
   */
  unit_price?: number | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof InvoiceItem
   */
  asset_account?: LinkedLedgerAccount | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof InvoiceItem
   */
  income_account?: LinkedLedgerAccount | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof InvoiceItem
   */
  expense_account?: LinkedLedgerAccount | null
  /**
   *
   * @type {boolean}
   * @memberof InvoiceItem
   */
  active?: boolean | null
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  row_version?: string | null
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof InvoiceItem
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof InvoiceItem
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum InvoiceItemType {
  inventory = 'inventory',
  service = 'service',
  other = 'other'
}

export function InvoiceItemFromJSON(json: any): InvoiceItem {
  return InvoiceItemFromJSONTyped(json, false)
}

export function InvoiceItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    code: !exists(json, 'code') ? undefined : json['code'],
    sold: !exists(json, 'sold') ? undefined : json['sold'],
    purchased: !exists(json, 'purchased') ? undefined : json['purchased'],
    tracked: !exists(json, 'tracked') ? undefined : json['tracked'],
    type: !exists(json, 'type') ? undefined : json['type'],
    sales_details: !exists(json, 'sales_details')
      ? undefined
      : InvoiceItemSalesDetailsFromJSON(json['sales_details']),
    purchase_details: !exists(json, 'purchase_details')
      ? undefined
      : InvoiceItemSalesDetailsFromJSON(json['purchase_details']),
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    asset_account: !exists(json, 'asset_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['asset_account']),
    income_account: !exists(json, 'income_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['income_account']),
    expense_account: !exists(json, 'expense_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['expense_account']),
    active: !exists(json, 'active') ? undefined : json['active'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function InvoiceItemToJSON(value?: InvoiceItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    description: value.description,
    code: value.code,
    sold: value.sold,
    purchased: value.purchased,
    tracked: value.tracked,
    type: value.type,
    sales_details: InvoiceItemSalesDetailsToJSON(value.sales_details),
    purchase_details: InvoiceItemSalesDetailsToJSON(value.purchase_details),
    quantity: value.quantity,
    unit_price: value.unit_price,
    asset_account: LinkedLedgerAccountToJSON(value.asset_account),
    income_account: LinkedLedgerAccountToJSON(value.income_account),
    expense_account: LinkedLedgerAccountToJSON(value.expense_account),
    active: value.active,
    row_version: value.row_version
  }
}
