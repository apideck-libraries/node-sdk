/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  OrderPickupDetailsCurbsidePickupDetails,
  OrderPickupDetailsCurbsidePickupDetailsFromJSON,
  OrderPickupDetailsCurbsidePickupDetailsToJSON
} from './OrderPickupDetailsCurbsidePickupDetails'
import {
  OrderPickupDetailsRecipient,
  OrderPickupDetailsRecipientFromJSON,
  OrderPickupDetailsRecipientToJSON
} from './OrderPickupDetailsRecipient'

/**
 *
 * @export
 * @interface OrderPickupDetails
 */
export interface OrderPickupDetails {
  /**
   *
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  readonly accepted_at?: Date | null
  /**
   * The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').
   * @type {string}
   * @memberof OrderPickupDetails
   */
  auto_complete_duration?: string | null
  /**
   * A description of why the pickup was canceled.
   * @type {string}
   * @memberof OrderPickupDetails
   */
  cancel_reason?: string | null
  /**
   * Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.
   * If `expires_at` is not set, this pickup fulfillment is automatically accepted when
   * placed.
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  expires_at?: Date
  /**
   * The schedule type of the pickup fulfillment.
   * @type {string}
   * @memberof OrderPickupDetails
   */
  schedule_type?: OrderPickupDetailsScheduleType
  /**
   * The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
   * "2016-09-04T23:59:33.123Z".
   *
   * For fulfillments with the schedule type `ASAP`, this is automatically set
   * to the current time plus the expected duration to prepare the fulfillment.
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  pickup_at?: Date
  /**
   * The window of time in which the order should be picked up after the `pickup_at` timestamp.
   * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
   * informational guideline for merchants.
   * @type {string}
   * @memberof OrderPickupDetails
   */
  pickup_window_duration?: string
  /**
   * The duration of time it takes to prepare this fulfillment.
   * The duration must be in RFC 3339 format (for example, "P1W3D").
   * @type {string}
   * @memberof OrderPickupDetails
   */
  prep_time_duration?: string
  /**
   * A note meant to provide additional instructions about the pickup
   * fulfillment displayed in the Square Point of Sale application and set by the API.
   * @type {string}
   * @memberof OrderPickupDetails
   */
  note?: string
  /**
   * Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  placed_at?: Date
  /**
   * Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  rejected_at?: Date
  /**
   * Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  ready_at?: Date
  /**
   * Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  expired_at?: Date
  /**
   * Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  picked_up_at?: Date
  /**
   * Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetails
   */
  canceled_at?: Date
  /**
   * If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.
   * @type {boolean}
   * @memberof OrderPickupDetails
   */
  is_curbside_pickup?: boolean
  /**
   *
   * @type {OrderPickupDetailsCurbsidePickupDetails}
   * @memberof OrderPickupDetails
   */
  curbside_pickup_details?: OrderPickupDetailsCurbsidePickupDetails
  /**
   *
   * @type {OrderPickupDetailsRecipient}
   * @memberof OrderPickupDetails
   */
  recipient?: OrderPickupDetailsRecipient
}

/**
 * @export
 * @enum {string}
 */
export enum OrderPickupDetailsScheduleType {
  scheduled = 'scheduled'
}

export function OrderPickupDetailsFromJSON(json: any): OrderPickupDetails {
  return OrderPickupDetailsFromJSONTyped(json, false)
}

export function OrderPickupDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderPickupDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    accepted_at: !exists(json, 'accepted_at')
      ? undefined
      : json['accepted_at'] === null
      ? null
      : new Date(json['accepted_at']),
    auto_complete_duration: !exists(json, 'auto_complete_duration')
      ? undefined
      : json['auto_complete_duration'],
    cancel_reason: !exists(json, 'cancel_reason') ? undefined : json['cancel_reason'],
    expires_at: !exists(json, 'expires_at') ? undefined : new Date(json['expires_at']),
    schedule_type: !exists(json, 'schedule_type') ? undefined : json['schedule_type'],
    pickup_at: !exists(json, 'pickup_at') ? undefined : new Date(json['pickup_at']),
    pickup_window_duration: !exists(json, 'pickup_window_duration')
      ? undefined
      : json['pickup_window_duration'],
    prep_time_duration: !exists(json, 'prep_time_duration')
      ? undefined
      : json['prep_time_duration'],
    note: !exists(json, 'note') ? undefined : json['note'],
    placed_at: !exists(json, 'placed_at') ? undefined : new Date(json['placed_at']),
    rejected_at: !exists(json, 'rejected_at') ? undefined : new Date(json['rejected_at']),
    ready_at: !exists(json, 'ready_at') ? undefined : new Date(json['ready_at']),
    expired_at: !exists(json, 'expired_at') ? undefined : new Date(json['expired_at']),
    picked_up_at: !exists(json, 'picked_up_at') ? undefined : new Date(json['picked_up_at']),
    canceled_at: !exists(json, 'canceled_at') ? undefined : new Date(json['canceled_at']),
    is_curbside_pickup: !exists(json, 'is_curbside_pickup')
      ? undefined
      : json['is_curbside_pickup'],
    curbside_pickup_details: !exists(json, 'curbside_pickup_details')
      ? undefined
      : OrderPickupDetailsCurbsidePickupDetailsFromJSON(json['curbside_pickup_details']),
    recipient: !exists(json, 'recipient')
      ? undefined
      : OrderPickupDetailsRecipientFromJSON(json['recipient'])
  }
}

export function OrderPickupDetailsToJSON(value?: OrderPickupDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    auto_complete_duration: value.auto_complete_duration,
    cancel_reason: value.cancel_reason,
    expires_at:
      value.expires_at === undefined ? undefined : new Date(value.expires_at).toISOString(),
    schedule_type: value.schedule_type,
    pickup_at: value.pickup_at === undefined ? undefined : new Date(value.pickup_at).toISOString(),
    pickup_window_duration: value.pickup_window_duration,
    prep_time_duration: value.prep_time_duration,
    note: value.note,
    placed_at: value.placed_at === undefined ? undefined : new Date(value.placed_at).toISOString(),
    rejected_at:
      value.rejected_at === undefined ? undefined : new Date(value.rejected_at).toISOString(),
    ready_at: value.ready_at === undefined ? undefined : new Date(value.ready_at).toISOString(),
    expired_at:
      value.expired_at === undefined ? undefined : new Date(value.expired_at).toISOString(),
    picked_up_at:
      value.picked_up_at === undefined ? undefined : new Date(value.picked_up_at).toISOString(),
    canceled_at:
      value.canceled_at === undefined ? undefined : new Date(value.canceled_at).toISOString(),
    is_curbside_pickup: value.is_curbside_pickup,
    curbside_pickup_details: OrderPickupDetailsCurbsidePickupDetailsToJSON(
      value.curbside_pickup_details
    ),
    recipient: OrderPickupDetailsRecipientToJSON(value.recipient)
  }
}
