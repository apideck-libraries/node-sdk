/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { OrderCustomers, OrderCustomersFromJSON, OrderCustomersToJSON } from './OrderCustomers'
import { OrderDiscounts, OrderDiscountsFromJSON, OrderDiscountsToJSON } from './OrderDiscounts'
import {
  OrderFulfillments,
  OrderFulfillmentsFromJSON,
  OrderFulfillmentsToJSON
} from './OrderFulfillments'
import { OrderLineItems, OrderLineItemsFromJSON, OrderLineItemsToJSON } from './OrderLineItems'
import { OrderPayments, OrderPaymentsFromJSON, OrderPaymentsToJSON } from './OrderPayments'
import { OrderRefunds, OrderRefundsFromJSON, OrderRefundsToJSON } from './OrderRefunds'
import { OrderTenders, OrderTendersFromJSON, OrderTendersToJSON } from './OrderTenders'
import { ServiceCharges, ServiceChargesFromJSON, ServiceChargesToJSON } from './ServiceCharges'

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
  merchant_id: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  location_id: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  order_number?: string
  /**
   *
   * @type {Date}
   * @memberof Order
   */
  order_date?: Date | null
  /**
   *
   * @type {Date}
   * @memberof Order
   */
  closed_date?: Date | null
  /**
   * An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.
   * @type {string}
   * @memberof Order
   */
  reference_id?: string | null
  /**
   *
   * @type {string}
   * @memberof Order
   */
  status?: OrderStatus
  /**
   * A string describing the state of the order. Clover specific: If no value is set, the state defaults to null, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()
   * @type {string}
   * @memberof Order
   */
  state?: string
  /**
   * Is this order paid or not?
   * @type {string}
   * @memberof Order
   */
  payment_status?: OrderPaymentStatus
  /**
   *
   * @type {Currency}
   * @memberof Order
   */
  currency?: Currency | null
  /**
   *
   * @type {string}
   * @memberof Order
   */
  title?: string
  /**
   * A note with information about this order, may be printed on the order receipt and displayed in apps
   * @type {string}
   * @memberof Order
   */
  note?: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  customer_id?: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  employee_id?: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  order_type_id?: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  table?: string
  /**
   *
   * @type {string}
   * @memberof Order
   */
  seat?: string
  /**
   *
   * @type {number}
   * @memberof Order
   */
  total_amount?: number | null
  /**
   *
   * @type {number}
   * @memberof Order
   */
  total_tip?: number | null
  /**
   *
   * @type {number}
   * @memberof Order
   */
  total_tax?: number | null
  /**
   *
   * @type {number}
   * @memberof Order
   */
  total_discount?: number | null
  /**
   *
   * @type {number}
   * @memberof Order
   */
  total_refund?: number | null
  /**
   *
   * @type {number}
   * @memberof Order
   */
  total_service_charge?: number | null
  /**
   *
   * @type {boolean}
   * @memberof Order
   */
  refunded?: boolean
  /**
   *
   * @type {Array<OrderCustomers>}
   * @memberof Order
   */
  customers?: Array<OrderCustomers>
  /**
   *
   * @type {Array<OrderFulfillments>}
   * @memberof Order
   */
  fulfillments?: Array<OrderFulfillments>
  /**
   *
   * @type {Array<OrderLineItems>}
   * @memberof Order
   */
  line_items?: Array<OrderLineItems>
  /**
   *
   * @type {Array<OrderPayments>}
   * @memberof Order
   */
  payments?: Array<OrderPayments>
  /**
   *
   * @type {ServiceCharges}
   * @memberof Order
   */
  service_charges?: ServiceCharges
  /**
   *
   * @type {Array<OrderRefunds>}
   * @memberof Order
   */
  refunds?: Array<OrderRefunds>
  /**
   *
   * @type {Array<object>}
   * @memberof Order
   */
  taxes?: Array<object>
  /**
   *
   * @type {Array<OrderDiscounts>}
   * @memberof Order
   */
  discounts?: Array<OrderDiscounts>
  /**
   *
   * @type {Array<OrderTenders>}
   * @memberof Order
   */
  tenders?: Array<OrderTenders>
  /**
   * Source of order. Indicates the way that the order was placed.
   * @type {string}
   * @memberof Order
   */
  readonly source?: OrderSource
  /**
   *
   * @type {boolean}
   * @memberof Order
   */
  voided?: boolean
  /**
   *
   * @type {Date}
   * @memberof Order
   */
  readonly voided_at?: Date
  /**
   *
   * @type {string}
   * @memberof Order
   */
  version?: string | null
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

/**
 * @export
 * @enum {string}
 */
export enum OrderStatus {
  open = 'open',
  draft = 'draft',
  delivered = 'delivered',
  delayed = 'delayed',
  voided = 'voided',
  completed = 'completed'
}
/**
 * @export
 * @enum {string}
 */
export enum OrderPaymentStatus {
  open = 'open',
  paid = 'paid',
  refunded = 'refunded',
  credited = 'credited',
  partially_paid = 'partially_paid',
  partially_refunded = 'partially_refunded',
  unknown = 'unknown'
}
/**
 * @export
 * @enum {string}
 */
export enum OrderSource {
  in_store = 'in-store',
  online = 'online',
  opt = 'opt',
  api = 'api',
  kiosk = 'kiosk',
  caller_id = 'caller-id',
  google = 'google',
  invoice = 'invoice'
}

export function OrderFromJSON(json: any): Order {
  return OrderFromJSONTyped(json, false)
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
  if (json === undefined || json === null) {
    return json
  }
  return {
    merchant_id: json['merchant_id'],
    location_id: json['location_id'],
    id: !exists(json, 'id') ? undefined : json['id'],
    order_number: !exists(json, 'order_number') ? undefined : json['order_number'],
    order_date: !exists(json, 'order_date')
      ? undefined
      : json['order_date'] === null
      ? null
      : new Date(json['order_date']),
    closed_date: !exists(json, 'closed_date')
      ? undefined
      : json['closed_date'] === null
      ? null
      : new Date(json['closed_date']),
    reference_id: !exists(json, 'reference_id') ? undefined : json['reference_id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    state: !exists(json, 'state') ? undefined : json['state'],
    payment_status: !exists(json, 'payment_status') ? undefined : json['payment_status'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    title: !exists(json, 'title') ? undefined : json['title'],
    note: !exists(json, 'note') ? undefined : json['note'],
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    order_type_id: !exists(json, 'order_type_id') ? undefined : json['order_type_id'],
    table: !exists(json, 'table') ? undefined : json['table'],
    seat: !exists(json, 'seat') ? undefined : json['seat'],
    total_amount: !exists(json, 'total_amount') ? undefined : json['total_amount'],
    total_tip: !exists(json, 'total_tip') ? undefined : json['total_tip'],
    total_tax: !exists(json, 'total_tax') ? undefined : json['total_tax'],
    total_discount: !exists(json, 'total_discount') ? undefined : json['total_discount'],
    total_refund: !exists(json, 'total_refund') ? undefined : json['total_refund'],
    total_service_charge: !exists(json, 'total_service_charge')
      ? undefined
      : json['total_service_charge'],
    refunded: !exists(json, 'refunded') ? undefined : json['refunded'],
    customers: !exists(json, 'customers')
      ? undefined
      : (json['customers'] as Array<any>).map(OrderCustomersFromJSON),
    fulfillments: !exists(json, 'fulfillments')
      ? undefined
      : (json['fulfillments'] as Array<any>).map(OrderFulfillmentsFromJSON),
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(OrderLineItemsFromJSON),
    payments: !exists(json, 'payments')
      ? undefined
      : (json['payments'] as Array<any>).map(OrderPaymentsFromJSON),
    service_charges: !exists(json, 'service_charges')
      ? undefined
      : ServiceChargesFromJSON(json['service_charges']),
    refunds: !exists(json, 'refunds')
      ? undefined
      : (json['refunds'] as Array<any>).map(OrderRefundsFromJSON),
    taxes: !exists(json, 'taxes') ? undefined : json['taxes'],
    discounts: !exists(json, 'discounts')
      ? undefined
      : (json['discounts'] as Array<any>).map(OrderDiscountsFromJSON),
    tenders: !exists(json, 'tenders')
      ? undefined
      : (json['tenders'] as Array<any>).map(OrderTendersFromJSON),
    source: !exists(json, 'source') ? undefined : json['source'],
    voided: !exists(json, 'voided') ? undefined : json['voided'],
    voided_at: !exists(json, 'voided_at') ? undefined : new Date(json['voided_at']),
    version: !exists(json, 'version') ? undefined : json['version'],
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
    merchant_id: value.merchant_id,
    location_id: value.location_id,
    order_number: value.order_number,
    order_date:
      value.order_date === undefined
        ? undefined
        : value.order_date === null
        ? null
        : new Date(value.order_date).toISOString().substr(0, 10),
    closed_date:
      value.closed_date === undefined
        ? undefined
        : value.closed_date === null
        ? null
        : new Date(value.closed_date).toISOString().substr(0, 10),
    reference_id: value.reference_id,
    status: value.status,
    state: value.state,
    payment_status: value.payment_status,
    currency: CurrencyToJSON(value.currency),
    title: value.title,
    note: value.note,
    customer_id: value.customer_id,
    employee_id: value.employee_id,
    order_type_id: value.order_type_id,
    table: value.table,
    seat: value.seat,
    total_amount: value.total_amount,
    total_tip: value.total_tip,
    total_tax: value.total_tax,
    total_discount: value.total_discount,
    total_refund: value.total_refund,
    total_service_charge: value.total_service_charge,
    refunded: value.refunded,
    customers:
      value.customers === undefined
        ? undefined
        : (value.customers as Array<any>).map(OrderCustomersToJSON),
    fulfillments:
      value.fulfillments === undefined
        ? undefined
        : (value.fulfillments as Array<any>).map(OrderFulfillmentsToJSON),
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(OrderLineItemsToJSON),
    payments:
      value.payments === undefined
        ? undefined
        : (value.payments as Array<any>).map(OrderPaymentsToJSON),
    service_charges: ServiceChargesToJSON(value.service_charges),
    refunds:
      value.refunds === undefined
        ? undefined
        : (value.refunds as Array<any>).map(OrderRefundsToJSON),
    taxes: value.taxes,
    discounts:
      value.discounts === undefined
        ? undefined
        : (value.discounts as Array<any>).map(OrderDiscountsToJSON),
    tenders:
      value.tenders === undefined
        ? undefined
        : (value.tenders as Array<any>).map(OrderTendersToJSON),
    voided: value.voided,
    version: value.version
  }
}
