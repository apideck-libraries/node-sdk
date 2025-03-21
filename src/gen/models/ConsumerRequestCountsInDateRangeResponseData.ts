/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  RequestCountAllocation,
  RequestCountAllocationFromJSON,
  RequestCountAllocationToJSON
} from './RequestCountAllocation'

/**
 *
 * @export
 * @interface ConsumerRequestCountsInDateRangeResponseData
 */
export interface ConsumerRequestCountsInDateRangeResponseData {
  /**
   *
   * @type {string}
   * @memberof ConsumerRequestCountsInDateRangeResponseData
   */
  application_id?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerRequestCountsInDateRangeResponseData
   */
  consumer_id?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerRequestCountsInDateRangeResponseData
   */
  start_datetime?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerRequestCountsInDateRangeResponseData
   */
  end_datetime?: string
  /**
   *
   * @type {number}
   * @memberof ConsumerRequestCountsInDateRangeResponseData
   */
  aggregated_request_count?: number
  /**
   *
   * @type {RequestCountAllocation}
   * @memberof ConsumerRequestCountsInDateRangeResponseData
   */
  request_counts?: RequestCountAllocation
}

export function ConsumerRequestCountsInDateRangeResponseDataFromJSON(
  json: any
): ConsumerRequestCountsInDateRangeResponseData {
  return ConsumerRequestCountsInDateRangeResponseDataFromJSONTyped(json, false)
}

export function ConsumerRequestCountsInDateRangeResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConsumerRequestCountsInDateRangeResponseData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    application_id: !exists(json, 'application_id') ? undefined : json['application_id'],
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    start_datetime: !exists(json, 'start_datetime') ? undefined : json['start_datetime'],
    end_datetime: !exists(json, 'end_datetime') ? undefined : json['end_datetime'],
    aggregated_request_count: !exists(json, 'aggregated_request_count')
      ? undefined
      : json['aggregated_request_count'],
    request_counts: !exists(json, 'request_counts')
      ? undefined
      : RequestCountAllocationFromJSON(json['request_counts'])
  }
}

export function ConsumerRequestCountsInDateRangeResponseDataToJSON(
  value?: ConsumerRequestCountsInDateRangeResponseData | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    application_id: value.application_id,
    consumer_id: value.consumer_id,
    start_datetime: value.start_datetime,
    end_datetime: value.end_datetime,
    aggregated_request_count: value.aggregated_request_count,
    request_counts: RequestCountAllocationToJSON(value.request_counts)
  }
}
