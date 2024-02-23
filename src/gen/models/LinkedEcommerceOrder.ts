/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  EcommerceOrderStatus,
  EcommerceOrderStatusFromJSON,
  EcommerceOrderStatusToJSON
} from './EcommerceOrderStatus'

/**
 * The order this entity is linked to.
 * @export
 * @interface LinkedEcommerceOrder
 */
export interface LinkedEcommerceOrder {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof LinkedEcommerceOrder
   */
  readonly id?: string
  /**
   * The total amount of the order.
   * @type {string}
   * @memberof LinkedEcommerceOrder
   */
  total?: string | null
  /**
   *
   * @type {EcommerceOrderStatus}
   * @memberof LinkedEcommerceOrder
   */
  status?: EcommerceOrderStatus | null
}

export function LinkedEcommerceOrderFromJSON(json: any): LinkedEcommerceOrder {
  return LinkedEcommerceOrderFromJSONTyped(json, false)
}

export function LinkedEcommerceOrderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedEcommerceOrder {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    total: !exists(json, 'total') ? undefined : json['total'],
    status: !exists(json, 'status') ? undefined : EcommerceOrderStatusFromJSON(json['status'])
  }
}

export function LinkedEcommerceOrderToJSON(value?: LinkedEcommerceOrder | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    status: EcommerceOrderStatusToJSON(value.status)
  }
}
