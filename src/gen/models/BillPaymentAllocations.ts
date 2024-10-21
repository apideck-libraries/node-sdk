/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface BillPaymentAllocations
 */
export interface BillPaymentAllocations {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof BillPaymentAllocations
   */
  id?: string | null
  /**
   * Type of entity this payment should be attributed to.
   * @type {string}
   * @memberof BillPaymentAllocations
   */
  type?: BillPaymentAllocationsType
  /**
   *
   * @type {string}
   * @memberof BillPaymentAllocations
   */
  readonly code?: string
  /**
   * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
   * @type {number}
   * @memberof BillPaymentAllocations
   */
  amount?: number | null
  /**
   * Unique identifier of the allocation
   * @type {string}
   * @memberof BillPaymentAllocations
   */
  allocation_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum BillPaymentAllocationsType {
  bill = 'bill',
  expense = 'expense',
  credit_memo = 'credit_memo',
  over_payment = 'over_payment',
  pre_payment = 'pre_payment',
  journal_entry = 'journal_entry',
  other = 'other'
}

export function BillPaymentAllocationsFromJSON(json: any): BillPaymentAllocations {
  return BillPaymentAllocationsFromJSONTyped(json, false)
}

export function BillPaymentAllocationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BillPaymentAllocations {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    code: !exists(json, 'code') ? undefined : json['code'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    allocation_id: !exists(json, 'allocation_id') ? undefined : json['allocation_id']
  }
}

export function BillPaymentAllocationsToJSON(value?: BillPaymentAllocations | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    type: value.type,
    amount: value.amount,
    allocation_id: value.allocation_id
  }
}
