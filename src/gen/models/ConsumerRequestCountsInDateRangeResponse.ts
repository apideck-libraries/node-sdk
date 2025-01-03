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

import {
  ConsumerRequestCountsInDateRangeResponseData,
  ConsumerRequestCountsInDateRangeResponseDataFromJSON,
  ConsumerRequestCountsInDateRangeResponseDataToJSON
} from './ConsumerRequestCountsInDateRangeResponseData'

/**
 *
 * @export
 * @interface ConsumerRequestCountsInDateRangeResponse
 */
export interface ConsumerRequestCountsInDateRangeResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof ConsumerRequestCountsInDateRangeResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof ConsumerRequestCountsInDateRangeResponse
   */
  status: string
  /**
   *
   * @type {ConsumerRequestCountsInDateRangeResponseData}
   * @memberof ConsumerRequestCountsInDateRangeResponse
   */
  data: ConsumerRequestCountsInDateRangeResponseData
}

export function ConsumerRequestCountsInDateRangeResponseFromJSON(
  json: any
): ConsumerRequestCountsInDateRangeResponse {
  return ConsumerRequestCountsInDateRangeResponseFromJSONTyped(json, false)
}

export function ConsumerRequestCountsInDateRangeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConsumerRequestCountsInDateRangeResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConsumerRequestCountsInDateRangeResponseDataFromJSON(json['data'])
  }
}

export function ConsumerRequestCountsInDateRangeResponseToJSON(
  value?: ConsumerRequestCountsInDateRangeResponse | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ConsumerRequestCountsInDateRangeResponseDataToJSON(value.data)
  }
}
