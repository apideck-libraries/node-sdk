/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  DeprecatedLinkedTrackingCategory,
  DeprecatedLinkedTrackingCategoryFromJSON,
  DeprecatedLinkedTrackingCategoryToJSON
} from './DeprecatedLinkedTrackingCategory'
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
import {
  LinkedTrackingCategories,
  LinkedTrackingCategoriesFromJSON,
  LinkedTrackingCategoriesToJSON
} from './LinkedTrackingCategories'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
  /**
   * The ID of the item.
   * @type {string}
   * @memberof InvoiceItem
   */
  readonly id?: string
  /**
   * Item name
   * @type {string}
   * @memberof InvoiceItem
   */
  name?: string | null
  /**
   * A short description of the item
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
   * If true, transactions for this item are taxable
   * @type {boolean}
   * @memberof InvoiceItem
   */
  taxable?: boolean | null
  /**
   * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
   * @type {Date}
   * @memberof InvoiceItem
   */
  inventory_date?: Date | null
  /**
   * Item type
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
   * @type {DeprecatedLinkedTrackingCategory}
   * @memberof InvoiceItem
   */
  tracking_category?: DeprecatedLinkedTrackingCategory | null
  /**
   *
   * @type {LinkedTrackingCategories}
   * @memberof InvoiceItem
   */
  tracking_categories?: LinkedTrackingCategories | null
  /**
   *
   * @type {boolean}
   * @memberof InvoiceItem
   */
  active?: boolean | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof InvoiceItem
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof InvoiceItem
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof InvoiceItem
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof InvoiceItem
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof InvoiceItem
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof InvoiceItem
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof InvoiceItem
   */
  pass_through?: PassThroughBody
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
    taxable: !exists(json, 'taxable') ? undefined : json['taxable'],
    inventory_date: !exists(json, 'inventory_date')
      ? undefined
      : json['inventory_date'] === null
      ? null
      : new Date(json['inventory_date']),
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
    tracking_category: !exists(json, 'tracking_category')
      ? undefined
      : DeprecatedLinkedTrackingCategoryFromJSON(json['tracking_category']),
    tracking_categories: !exists(json, 'tracking_categories')
      ? undefined
      : LinkedTrackingCategoriesFromJSON(json['tracking_categories']),
    active: !exists(json, 'active') ? undefined : json['active'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
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
    taxable: value.taxable,
    inventory_date:
      value.inventory_date === undefined
        ? undefined
        : value.inventory_date === null
        ? null
        : new Date(value.inventory_date).toISOString().substr(0, 10),
    type: value.type,
    sales_details: InvoiceItemSalesDetailsToJSON(value.sales_details),
    purchase_details: InvoiceItemSalesDetailsToJSON(value.purchase_details),
    quantity: value.quantity,
    unit_price: value.unit_price,
    asset_account: LinkedLedgerAccountToJSON(value.asset_account),
    income_account: LinkedLedgerAccountToJSON(value.income_account),
    expense_account: LinkedLedgerAccountToJSON(value.expense_account),
    tracking_category: DeprecatedLinkedTrackingCategoryToJSON(value.tracking_category),
    tracking_categories: LinkedTrackingCategoriesToJSON(value.tracking_categories),
    active: value.active,
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
