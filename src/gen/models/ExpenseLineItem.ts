/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'
import {
  LinkedTrackingCategories,
  LinkedTrackingCategoriesFromJSON,
  LinkedTrackingCategoriesToJSON
} from './LinkedTrackingCategories'

/**
 *
 * @export
 * @interface ExpenseLineItem
 */
export interface ExpenseLineItem {
  /**
   * The total amount of the expense line item.
   * @type {number}
   * @memberof ExpenseLineItem
   */
  total_amount: number | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof ExpenseLineItem
   */
  readonly id?: string
  /**
   *
   * @type {LinkedTrackingCategories}
   * @memberof ExpenseLineItem
   */
  tracking_categories?: LinkedTrackingCategories | null
  /**
   * The unique identifier for the ledger account.
   * @type {string}
   * @memberof ExpenseLineItem
   */
  account_id?: string
  /**
   * The ID of the customer this expense item is linked to.
   * @type {string}
   * @memberof ExpenseLineItem
   */
  customer_id?: string
  /**
   * The ID of the department this expense item is linked to.
   * @type {string}
   * @memberof ExpenseLineItem
   */
  department_id?: string
  /**
   * The ID of the location this expense item is linked to.
   * @type {string}
   * @memberof ExpenseLineItem
   */
  location_id?: string
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof ExpenseLineItem
   */
  tax_rate?: LinkedTaxRate
  /**
   * The expense line item description
   * @type {string}
   * @memberof ExpenseLineItem
   */
  description?: string | null
  /**
   * Boolean that indicates if the line item is billable or not.
   * @type {boolean}
   * @memberof ExpenseLineItem
   */
  billable?: boolean
}

export function ExpenseLineItemFromJSON(json: any): ExpenseLineItem {
  return ExpenseLineItemFromJSONTyped(json, false)
}

export function ExpenseLineItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExpenseLineItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total_amount: json['total_amount'],
    id: !exists(json, 'id') ? undefined : json['id'],
    tracking_categories: !exists(json, 'tracking_categories')
      ? undefined
      : LinkedTrackingCategoriesFromJSON(json['tracking_categories']),
    account_id: !exists(json, 'account_id') ? undefined : json['account_id'],
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    department_id: !exists(json, 'department_id') ? undefined : json['department_id'],
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    description: !exists(json, 'description') ? undefined : json['description'],
    billable: !exists(json, 'billable') ? undefined : json['billable']
  }
}

export function ExpenseLineItemToJSON(value?: ExpenseLineItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total_amount: value.total_amount,
    tracking_categories: LinkedTrackingCategoriesToJSON(value.tracking_categories),
    account_id: value.account_id,
    customer_id: value.customer_id,
    department_id: value.department_id,
    location_id: value.location_id,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    description: value.description,
    billable: value.billable
  }
}
