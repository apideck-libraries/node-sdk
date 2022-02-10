/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { OrderMerchant, OrderMerchantFromJSON, OrderMerchantToJSON } from './OrderMerchant'

/**
 *
 * @export
 * @interface Order
 */
export interface Order {
  /**
   *
   * @type {string}
   * @memberof Order
   */
  readonly id?: string
  /**
   *
   * @type {OrderMerchant}
   * @memberof Order
   */
  merchant?: OrderMerchant
  /**
   *
   * @type {string}
   * @memberof Order
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Order
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Order
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Order
   */
  readonly created_at?: Date
}

export function OrderFromJSON(json: any): Order {
  return OrderFromJSONTyped(json, false)
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    merchant: !exists(json, 'merchant') ? undefined : OrderMerchantFromJSON(json['merchant']),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function OrderToJSON(value?: Order | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    merchant: OrderMerchantToJSON(value.merchant)
  }
}
