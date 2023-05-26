/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.6.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import {
  EcommerceAddress,
  EcommerceAddressFromJSON,
  EcommerceAddressToJSON
} from './EcommerceAddress'
import {
  EcommerceDiscount,
  EcommerceDiscountFromJSON,
  EcommerceDiscountToJSON
} from './EcommerceDiscount'
import {
  EcommerceOrderLineItem,
  EcommerceOrderLineItemFromJSON,
  EcommerceOrderLineItemToJSON
} from './EcommerceOrderLineItem'
import {
  EcommerceOrderStatus,
  EcommerceOrderStatusFromJSON,
  EcommerceOrderStatusToJSON
} from './EcommerceOrderStatus'
import {
  LinkedEcommerceCustomer,
  LinkedEcommerceCustomerFromJSON,
  LinkedEcommerceCustomerToJSON
} from './LinkedEcommerceCustomer'
import { TrackingItem, TrackingItemFromJSON, TrackingItemToJSON } from './TrackingItem'

/**
 *
 * @export
 * @interface EcommerceOrder
 */
export interface EcommerceOrder {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceOrder
   */
  readonly id: string
  /**
   * Order number, if any.
   * @type {string}
   * @memberof EcommerceOrder
   */
  order_number?: string
  /**
   *
   * @type {Currency}
   * @memberof EcommerceOrder
   */
  currency?: Currency | null
  /**
   *
   * @type {Array<EcommerceDiscount>}
   * @memberof EcommerceOrder
   */
  discounts?: Array<EcommerceDiscount>
  /**
   * Sub-total amount, normally before tax.
   * @type {string}
   * @memberof EcommerceOrder
   */
  sub_total?: string
  /**
   * Shipping cost, if any.
   * @type {string}
   * @memberof EcommerceOrder
   */
  shipping_cost?: string
  /**
   * Total discount, if any.
   * @type {string}
   * @memberof EcommerceOrder
   */
  total_discount?: string
  /**
   * Total tax, if any.
   * @type {string}
   * @memberof EcommerceOrder
   */
  total_tax?: string
  /**
   * Total amount due.
   * @type {string}
   * @memberof EcommerceOrder
   */
  total_amount?: string
  /**
   *
   * @type {EcommerceOrderStatus}
   * @memberof EcommerceOrder
   */
  status?: EcommerceOrderStatus
  /**
   * Current payment status of the order.
   * @type {string}
   * @memberof EcommerceOrder
   */
  payment_status?: EcommerceOrderPaymentStatus
  /**
   * Current fulfillment status of the order.
   * @type {string}
   * @memberof EcommerceOrder
   */
  fulfillment_status?: EcommerceOrderFulfillmentStatus
  /**
   * Payment method used for this order.
   * @type {string}
   * @memberof EcommerceOrder
   */
  payment_method?: string
  /**
   *
   * @type {LinkedEcommerceCustomer}
   * @memberof EcommerceOrder
   */
  customer?: LinkedEcommerceCustomer
  /**
   *
   * @type {EcommerceAddress}
   * @memberof EcommerceOrder
   */
  billing_address?: EcommerceAddress
  /**
   *
   * @type {EcommerceAddress}
   * @memberof EcommerceOrder
   */
  shipping_address?: EcommerceAddress
  /**
   *
   * @type {Array<TrackingItem>}
   * @memberof EcommerceOrder
   */
  tracking?: Array<TrackingItem>
  /**
   *
   * @type {Array<EcommerceOrderLineItem>}
   * @memberof EcommerceOrder
   */
  line_items?: Array<EcommerceOrderLineItem>
  /**
   * Note for the order.
   * @type {string}
   * @memberof EcommerceOrder
   */
  note?: string
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof EcommerceOrder
   */
  readonly created_at?: Date
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof EcommerceOrder
   */
  readonly updated_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum EcommerceOrderPaymentStatus {
  pending = 'pending',
  authorized = 'authorized',
  paid = 'paid',
  partial = 'partial',
  refunded = 'refunded',
  voided = 'voided',
  unknown = 'unknown'
}
/**
 * @export
 * @enum {string}
 */
export enum EcommerceOrderFulfillmentStatus {
  pending = 'pending',
  shipped = 'shipped',
  partial = 'partial',
  delivered = 'delivered',
  cancelled = 'cancelled',
  returned = 'returned',
  unknown = 'unknown'
}

export function EcommerceOrderFromJSON(json: any): EcommerceOrder {
  return EcommerceOrderFromJSONTyped(json, false)
}

export function EcommerceOrderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceOrder {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    order_number: !exists(json, 'order_number') ? undefined : json['order_number'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    discounts: !exists(json, 'discounts')
      ? undefined
      : (json['discounts'] as Array<any>).map(EcommerceDiscountFromJSON),
    sub_total: !exists(json, 'sub_total') ? undefined : json['sub_total'],
    shipping_cost: !exists(json, 'shipping_cost') ? undefined : json['shipping_cost'],
    total_discount: !exists(json, 'total_discount') ? undefined : json['total_discount'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    status: !exists(json, 'status') ? undefined : EcommerceOrderStatusFromJSON(json['status']),
    payment_status: !exists(json, 'payment_status') ? undefined : json['payment_status'],
    fulfillment_status: !exists(json, 'fulfillment_status')
      ? undefined
      : json['fulfillment_status'],
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    customer: !exists(json, 'customer')
      ? undefined
      : LinkedEcommerceCustomerFromJSON(json['customer']),
    billing_address: !exists(json, 'billing_address')
      ? undefined
      : EcommerceAddressFromJSON(json['billing_address']),
    shipping_address: !exists(json, 'shipping_address')
      ? undefined
      : EcommerceAddressFromJSON(json['shipping_address']),
    tracking: !exists(json, 'tracking')
      ? undefined
      : (json['tracking'] as Array<any>).map(TrackingItemFromJSON),
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(EcommerceOrderLineItemFromJSON),
    note: !exists(json, 'note') ? undefined : json['note'],
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function EcommerceOrderToJSON(value?: EcommerceOrder | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    order_number: value.order_number,
    currency: CurrencyToJSON(value.currency),
    discounts:
      value.discounts === undefined
        ? undefined
        : (value.discounts as Array<any>).map(EcommerceDiscountToJSON),
    sub_total: value.sub_total,
    shipping_cost: value.shipping_cost,
    total_discount: value.total_discount,
    total_tax: value.total_tax,
    total_amount: value.total_amount,
    status: EcommerceOrderStatusToJSON(value.status),
    payment_status: value.payment_status,
    fulfillment_status: value.fulfillment_status,
    payment_method: value.payment_method,
    customer: LinkedEcommerceCustomerToJSON(value.customer),
    billing_address: EcommerceAddressToJSON(value.billing_address),
    shipping_address: EcommerceAddressToJSON(value.shipping_address),
    tracking:
      value.tracking === undefined
        ? undefined
        : (value.tracking as Array<any>).map(TrackingItemToJSON),
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(EcommerceOrderLineItemToJSON),
    note: value.note
  }
}
