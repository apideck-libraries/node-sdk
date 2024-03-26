/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  OrderPickupDetails,
  OrderPickupDetailsFromJSON,
  OrderPickupDetailsToJSON
} from './OrderPickupDetails'

/**
 *
 * @export
 * @interface OrderFulfillments
 */
export interface OrderFulfillments {
  /**
   *
   * @type {string}
   * @memberof OrderFulfillments
   */
  id?: string
  /**
   * The state of the fulfillment.
   * @type {string}
   * @memberof OrderFulfillments
   */
  status?: OrderFulfillmentsStatus
  /**
   *
   * @type {string}
   * @memberof OrderFulfillments
   */
  type?: OrderFulfillmentsType
  /**
   *
   * @type {OrderPickupDetails}
   * @memberof OrderFulfillments
   */
  pickup_details?: OrderPickupDetails
  /**
   *
   * @type {object}
   * @memberof OrderFulfillments
   */
  shipment_details?: object
}

/**
 * @export
 * @enum {string}
 */
export enum OrderFulfillmentsStatus {
  proposed = 'proposed',
  reserved = 'reserved',
  prepared = 'prepared',
  completed = 'completed',
  cancelled = 'cancelled',
  failed = 'failed',
  other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum OrderFulfillmentsType {
  pickup = 'pickup',
  shipment = 'shipment'
}

export function OrderFulfillmentsFromJSON(json: any): OrderFulfillments {
  return OrderFulfillmentsFromJSONTyped(json, false)
}

export function OrderFulfillmentsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderFulfillments {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    type: !exists(json, 'type') ? undefined : json['type'],
    pickup_details: !exists(json, 'pickup_details')
      ? undefined
      : OrderPickupDetailsFromJSON(json['pickup_details']),
    shipment_details: !exists(json, 'shipment_details') ? undefined : json['shipment_details']
  }
}

export function OrderFulfillmentsToJSON(value?: OrderFulfillments | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    status: value.status,
    type: value.type,
    pickup_details: OrderPickupDetailsToJSON(value.pickup_details),
    shipment_details: value.shipment_details
  }
}
