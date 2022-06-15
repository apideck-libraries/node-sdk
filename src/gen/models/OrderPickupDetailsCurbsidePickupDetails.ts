/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Specific details for curbside pickup.
 * @export
 * @interface OrderPickupDetailsCurbsidePickupDetails
 */
export interface OrderPickupDetailsCurbsidePickupDetails {
  /**
   * Specific details for curbside pickup, such as parking number and vehicle model.
   * @type {string}
   * @memberof OrderPickupDetailsCurbsidePickupDetails
   */
  curbside_details?: string
  /**
   * Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   * @type {Date}
   * @memberof OrderPickupDetailsCurbsidePickupDetails
   */
  buyer_arrived_at?: Date
}

export function OrderPickupDetailsCurbsidePickupDetailsFromJSON(
  json: any
): OrderPickupDetailsCurbsidePickupDetails {
  return OrderPickupDetailsCurbsidePickupDetailsFromJSONTyped(json, false)
}

export function OrderPickupDetailsCurbsidePickupDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderPickupDetailsCurbsidePickupDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    curbside_details: !exists(json, 'curbside_details') ? undefined : json['curbside_details'],
    buyer_arrived_at: !exists(json, 'buyer_arrived_at')
      ? undefined
      : new Date(json['buyer_arrived_at'])
  }
}

export function OrderPickupDetailsCurbsidePickupDetailsToJSON(
  value?: OrderPickupDetailsCurbsidePickupDetails | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    curbside_details: value.curbside_details,
    buyer_arrived_at:
      value.buyer_arrived_at === undefined
        ? undefined
        : new Date(value.buyer_arrived_at).toISOString()
  }
}
