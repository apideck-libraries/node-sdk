/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Consumer, ConsumerFromJSON, ConsumerToJSON } from './Consumer'

/**
 *
 * @export
 * @interface UpdateConsumerResponse
 */
export interface UpdateConsumerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateConsumerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateConsumerResponse
   */
  status: string
  /**
   *
   * @type {Consumer}
   * @memberof UpdateConsumerResponse
   */
  data: Consumer
}

export function UpdateConsumerResponseFromJSON(json: any): UpdateConsumerResponse {
  return UpdateConsumerResponseFromJSONTyped(json, false)
}

export function UpdateConsumerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateConsumerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConsumerFromJSON(json['data'])
  }
}

export function UpdateConsumerResponseToJSON(value?: UpdateConsumerResponse | null): any {
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
