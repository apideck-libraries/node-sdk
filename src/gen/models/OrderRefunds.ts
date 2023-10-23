/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface OrderRefunds
 */
export interface OrderRefunds {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderRefunds
   */
  readonly id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderRefunds
   */
  readonly location_id?: string
  /**
   *
   * @type {number}
   * @memberof OrderRefunds
   */
  amount?: number
  /**
   *
   * @type {Currency}
   * @memberof OrderRefunds
   */
  currency?: Currency | null
  /**
   *
   * @type {string}
   * @memberof OrderRefunds
   */
  reason?: string
  /**
   *
   * @type {string}
   * @memberof OrderRefunds
   */
  status?: OrderRefundsStatus
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderRefunds
   */
  readonly tender_id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof OrderRefunds
   */
  readonly transaction_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum OrderRefundsStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
  failed = 'failed'
}

export function OrderRefundsFromJSON(json: any): OrderRefunds {
  return OrderRefundsFromJSONTyped(json, false)
}

export function OrderRefundsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderRefunds {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    location_id: !exists(json, 'location_id') ? undefined : json['location_id'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    status: !exists(json, 'status') ? undefined : json['status'],
    tender_id: !exists(json, 'tender_id') ? undefined : json['tender_id'],
    transaction_id: !exists(json, 'transaction_id') ? undefined : json['transaction_id']
  }
}

export function OrderRefundsToJSON(value?: OrderRefunds | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    amount: value.amount,
    currency: CurrencyToJSON(value.currency),
    reason: value.reason,
    status: value.status
  }
}
