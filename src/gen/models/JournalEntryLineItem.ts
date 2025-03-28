/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
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
import { LinkedCustomer, LinkedCustomerFromJSON, LinkedCustomerToJSON } from './LinkedCustomer'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedSupplier, LinkedSupplierFromJSON, LinkedSupplierToJSON } from './LinkedSupplier'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'
import {
  LinkedTrackingCategories,
  LinkedTrackingCategoriesFromJSON,
  LinkedTrackingCategoriesToJSON
} from './LinkedTrackingCategories'

/**
 *
 * @export
 * @interface JournalEntryLineItem
 */
export interface JournalEntryLineItem {
  /**
   * Debit entries are considered positive, and credit entries are considered negative.
   * @type {string}
   * @memberof JournalEntryLineItem
   */
  type: JournalEntryLineItemType
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof JournalEntryLineItem
   */
  ledger_account: LinkedLedgerAccount | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof JournalEntryLineItem
   */
  readonly id?: string
  /**
   * User defined description
   * @type {string}
   * @memberof JournalEntryLineItem
   */
  description?: string | null
  /**
   * Tax amount
   * @type {number}
   * @memberof JournalEntryLineItem
   */
  tax_amount?: number | null
  /**
   * Sub-total amount, normally before tax.
   * @type {number}
   * @memberof JournalEntryLineItem
   */
  sub_total?: number | null
  /**
   * Debit entries are considered positive, and credit entries are considered negative.
   * @type {number}
   * @memberof JournalEntryLineItem
   */
  total_amount?: number | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof JournalEntryLineItem
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {DeprecatedLinkedTrackingCategory}
   * @memberof JournalEntryLineItem
   */
  tracking_category?: DeprecatedLinkedTrackingCategory | null
  /**
   *
   * @type {LinkedTrackingCategories}
   * @memberof JournalEntryLineItem
   */
  tracking_categories?: LinkedTrackingCategories | null
  /**
   *
   * @type {LinkedCustomer}
   * @memberof JournalEntryLineItem
   */
  customer?: LinkedCustomer | null
  /**
   *
   * @type {LinkedSupplier}
   * @memberof JournalEntryLineItem
   */
  supplier?: LinkedSupplier | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof JournalEntryLineItem
   */
  readonly department_id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof JournalEntryLineItem
   */
  readonly location_id?: string
  /**
   * Line number of the resource
   * @type {number}
   * @memberof JournalEntryLineItem
   */
  line_number?: number | null
}

/**
 * @export
 * @enum {string}
 */
export enum JournalEntryLineItemType {
  debit = 'debit',
  credit = 'credit'
}

export function JournalEntryLineItemFromJSON(json: any): JournalEntryLineItem {
  return JournalEntryLineItemFromJSONTyped(json, false)
}

export function JournalEntryLineItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): JournalEntryLineItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: json['type'],
    ledger_account: LinkedLedgerAccountFromJSON(json['ledger_account']),
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    tax_amount: !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    tracking_category: !exists(json, 'tracking_category')
      ? undefined
      : DeprecatedLinkedTrackingCategoryFromJSON(json['tracking_category']),
    tracking_categories: !exists(json, 'tracking_categories')
      ? undefined
      : LinkedTrackingCategoriesFromJSON(json['tracking_categories']),
    customer: !exists(json, 'customer') ? undefined : LinkedCustomerFromJSON(json['customer']),
    supplier: !exists(json, 'supplier') ? undefined : LinkedSupplierFromJSON(json['supplier']),
    department_id: !exists(json, 'department_id') ? undefined : json['department_id'],
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    line_number: !exists(json, 'line_number') ? undefined : json['line_number']
  }
}

export function JournalEntryLineItemToJSON(value?: JournalEntryLineItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    ledger_account: LinkedLedgerAccountToJSON(value.ledger_account),
    description: value.description,
    tax_amount: value.tax_amount,
    sub_total: value.sub_total,
    total_amount: value.total_amount,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    tracking_category: DeprecatedLinkedTrackingCategoryToJSON(value.tracking_category),
    tracking_categories: LinkedTrackingCategoriesToJSON(value.tracking_categories),
    customer: LinkedCustomerToJSON(value.customer),
    supplier: LinkedSupplierToJSON(value.supplier),
    line_number: value.line_number
  }
}
