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
/**
 *
 * @export
 * @interface PaymentAllocations
 */
export interface PaymentAllocations {
  /**
   * Unique identifier of entity this payment should be attributed to.
   * @type {string}
   * @memberof PaymentAllocations
   */
  id?: string
  /**
   * Type of entity this payment should be attributed to.
   * @type {string}
   * @memberof PaymentAllocations
   */
  type?: PaymentAllocationsType
  /**
   *
   * @type {string}
   * @memberof PaymentAllocations
   */
  readonly code?: string
  /**
   * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
   * @type {number}
   * @memberof PaymentAllocations
   */
  amount?: number | null
}

/**
 * @export
 * @enum {string}
 */
export enum PaymentAllocationsType {
  invoice = 'invoice',
  order = 'order',
  expense = 'expense',
  credit_memo = 'credit_memo',
  over_payment = 'over_payment',
  pre_payment = 'pre_payment'
}

export function PaymentAllocationsFromJSON(json: any): PaymentAllocations {
  return PaymentAllocationsFromJSONTyped(json, false)
}

export function PaymentAllocationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentAllocations {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    code: !exists(json, 'code') ? undefined : json['code'],
    amount: !exists(json, 'amount') ? undefined : json['amount']
  }
}

export function PaymentAllocationsToJSON(value?: PaymentAllocations | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    type: value.type,
    amount: value.amount
  }
}
