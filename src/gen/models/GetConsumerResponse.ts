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

import { Consumer, ConsumerFromJSON, ConsumerToJSON } from './Consumer'

/**
 *
 * @export
 * @interface GetConsumerResponse
 */
export interface GetConsumerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConsumerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConsumerResponse
   */
  status: string
  /**
   *
   * @type {Consumer}
   * @memberof GetConsumerResponse
   */
  data: Consumer
}

export function GetConsumerResponseFromJSON(json: any): GetConsumerResponse {
  return GetConsumerResponseFromJSONTyped(json, false)
}

export function GetConsumerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConsumerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConsumerFromJSON(json['data'])
  }
}

export function GetConsumerResponseToJSON(value?: GetConsumerResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ConsumerToJSON(value.data)
  }
}
