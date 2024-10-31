/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  ValidateConnectionStateResponseData,
  ValidateConnectionStateResponseDataFromJSON,
  ValidateConnectionStateResponseDataToJSON
} from './ValidateConnectionStateResponseData'

/**
 *
 * @export
 * @interface ValidateConnectionStateResponse
 */
export interface ValidateConnectionStateResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof ValidateConnectionStateResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof ValidateConnectionStateResponse
   */
  status: string
  /**
   *
   * @type {ValidateConnectionStateResponseData}
   * @memberof ValidateConnectionStateResponse
   */
  data: ValidateConnectionStateResponseData
}

export function ValidateConnectionStateResponseFromJSON(
  json: any
): ValidateConnectionStateResponse {
  return ValidateConnectionStateResponseFromJSONTyped(json, false)
}

export function ValidateConnectionStateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ValidateConnectionStateResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ValidateConnectionStateResponseDataFromJSON(json['data'])
  }
}

export function ValidateConnectionStateResponseToJSON(
  value?: ValidateConnectionStateResponse | null
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
    data: ValidateConnectionStateResponseDataToJSON(value.data)
  }
}
