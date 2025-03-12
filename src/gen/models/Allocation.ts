/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.3
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
 * @interface Allocation
 */
export interface Allocation {
  /**
   * Unique identifier of entity this payment should be attributed to.
   * @type {string}
   * @memberof Allocation
   */
  id?: string
  /**
   * Type of entity this payment should be attributed to.
   * @type {string}
   * @memberof Allocation
   */
  type?: AllocationType
  /**
   *
   * @type {string}
   * @memberof Allocation
   */
  readonly code?: string
  /**
   * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
   * @type {number}
   * @memberof Allocation
   */
  amount?: number | null
  /**
   * Unique identifier of the allocation
   * @type {string}
   * @memberof Allocation
   */
  allocation_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum AllocationType {
  invoice = 'invoice',
  order = 'order',
  expense = 'expense',
  credit_memo = 'credit_memo',
  over_payment = 'over_payment',
  pre_payment = 'pre_payment',
  journal_entry = 'journal_entry',
  other = 'other',
  bill = 'bill'
}

export function AllocationFromJSON(json: any): Allocation {
  return AllocationFromJSONTyped(json, false)
}

export function AllocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Allocation {
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

export function AllocationToJSON(value?: Allocation | null): any {
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
