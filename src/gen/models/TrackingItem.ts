/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Represents the tracking information associated with an ecommerce order.
 * @export
 * @interface TrackingItem
 */
export interface TrackingItem {
  /**
   * The name or code of the carrier or shipping company that is handling the shipment.
   * @type {string}
   * @memberof TrackingItem
   */
  provider: string | null
  /**
   *  The tracking number associated with the shipment, which can be used to track the progress of the delivery.
   * @type {string}
   * @memberof TrackingItem
   */
  number: string | null
  /**
   * The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress.
   * @type {string}
   * @memberof TrackingItem
   */
  url?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof TrackingItem
   */
  readonly updated_at?: Date | null
}

export function TrackingItemFromJSON(json: any): TrackingItem {
  return TrackingItemFromJSONTyped(json, false)
}

export function TrackingItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    provider: json['provider'],
    number: json['number'],
    url: !exists(json, 'url') ? undefined : json['url'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function TrackingItemToJSON(value?: TrackingItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    provider: value.provider,
    number: value.number,
    url: value.url
  }
}