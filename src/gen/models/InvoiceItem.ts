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
  id?: string
  /**
   * User defined item code
   * @type {string}
   * @memberof InvoiceItem
   */
  code?: string | null
  /**
   * Item can be sold
   * @type {boolean}
   * @memberof InvoiceItem
   */
  sold?: boolean | null
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
  ledger_account?: LinkedLedgerAccount
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
  service = 'service'
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
    code: !exists(json, 'code') ? undefined : json['code'],
    sold: !exists(json, 'sold') ? undefined : json['sold'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    type: !exists(json, 'type') ? undefined : json['type'],
    sales_details: !exists(json, 'sales_details')
      ? undefined
      : InvoiceItemSalesDetailsFromJSON(json['sales_details']),
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    unit_price: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    ledger_account: !exists(json, 'ledger_account')
      ? undefined
      : LinkedLedgerAccountFromJSON(json['ledger_account']),
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
    id: value.id,
    code: value.code,
    sold: value.sold,
    name: value.name,
    description: value.description,
    type: value.type,
    sales_details: InvoiceItemSalesDetailsToJSON(value.sales_details),
    quantity: value.quantity,
    unit_price: value.unit_price,
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    active: value.active,
    row_version: value.row_version
  }
}
