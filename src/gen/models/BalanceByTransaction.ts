/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
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
 * @interface BalanceByTransaction
 */
export interface BalanceByTransaction {
  /**
   * Unique identifier for the transaction.
   * @type {string}
   * @memberof BalanceByTransaction
   */
  transaction_id?: string
  /**
   * Date of the transaction.
   * @type {Date}
   * @memberof BalanceByTransaction
   */
  transaction_date?: Date
  /**
   * Type of the transaction.
   * @type {string}
   * @memberof BalanceByTransaction
   */
  transaction_type?: BalanceByTransactionTransactionType
  /**
   * Due date of the transaction.
   * @type {Date}
   * @memberof BalanceByTransaction
   */
  due_date?: Date
  /**
   * Original amount of the transaction.
   * @type {number}
   * @memberof BalanceByTransaction
   */
  original_amount?: number
  /**
   * Outstanding balance of the transaction.
   * @type {number}
   * @memberof BalanceByTransaction
   */
  outstanding_balance?: number
  /**
   * Transaction number of the transaction.
   * @type {string}
   * @memberof BalanceByTransaction
   */
  transaction_number?: string
}

/**
 * @export
 * @enum {string}
 */
export enum BalanceByTransactionTransactionType {
  invoice = 'invoice',
  credit_note = 'credit_note',
  bill = 'bill',
  payment = 'payment',
  bill_payment = 'bill_payment'
}

export function BalanceByTransactionFromJSON(json: any): BalanceByTransaction {
  return BalanceByTransactionFromJSONTyped(json, false)
}

export function BalanceByTransactionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceByTransaction {
  if (json === undefined || json === null) {
    return json
  }
  return {
    transaction_id: !exists(json, 'transaction_id') ? undefined : json['transaction_id'],
    transaction_date: !exists(json, 'transaction_date')
      ? undefined
      : new Date(json['transaction_date']),
    transaction_type: !exists(json, 'transaction_type') ? undefined : json['transaction_type'],
    due_date: !exists(json, 'due_date') ? undefined : new Date(json['due_date']),
    original_amount: !exists(json, 'original_amount') ? undefined : json['original_amount'],
    outstanding_balance: !exists(json, 'outstanding_balance')
      ? undefined
      : json['outstanding_balance'],
    transaction_number: !exists(json, 'transaction_number') ? undefined : json['transaction_number']
  }
}

export function BalanceByTransactionToJSON(value?: BalanceByTransaction | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    transaction_id: value.transaction_id,
    transaction_date:
      value.transaction_date === undefined
        ? undefined
        : new Date(value.transaction_date).toISOString().substr(0, 10),
    transaction_type: value.transaction_type,
    due_date:
      value.due_date === undefined
        ? undefined
        : new Date(value.due_date).toISOString().substr(0, 10),
    original_amount: value.original_amount,
    outstanding_balance: value.outstanding_balance,
    transaction_number: value.transaction_number
  }
}
