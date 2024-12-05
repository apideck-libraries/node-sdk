/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
 * @interface CreateConsumerResponse
 */
export interface CreateConsumerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateConsumerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateConsumerResponse
   */
  status: string
  /**
   *
   * @type {Consumer}
   * @memberof CreateConsumerResponse
   */
  data: Consumer
}

export function CreateConsumerResponseFromJSON(json: any): CreateConsumerResponse {
  return CreateConsumerResponseFromJSONTyped(json, false)
}

export function CreateConsumerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConsumerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConsumerFromJSON(json['data'])
  }
}

export function CreateConsumerResponseToJSON(value?: CreateConsumerResponse | null): any {
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
