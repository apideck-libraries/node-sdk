/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  GetConnectorResourceExampleResponseData,
  GetConnectorResourceExampleResponseDataFromJSON,
  GetConnectorResourceExampleResponseDataToJSON
} from './GetConnectorResourceExampleResponseData'

/**
 *
 * @export
 * @interface GetConnectorResourceExampleResponse
 */
export interface GetConnectorResourceExampleResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectorResourceExampleResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectorResourceExampleResponse
   */
  status: string
  /**
   *
   * @type {GetConnectorResourceExampleResponseData}
   * @memberof GetConnectorResourceExampleResponse
   */
  data: GetConnectorResourceExampleResponseData
}

export function GetConnectorResourceExampleResponseFromJSON(
  json: any
): GetConnectorResourceExampleResponse {
  return GetConnectorResourceExampleResponseFromJSONTyped(json, false)
}

export function GetConnectorResourceExampleResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorResourceExampleResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: GetConnectorResourceExampleResponseDataFromJSON(json['data'])
  }
}

export function GetConnectorResourceExampleResponseToJSON(
  value?: GetConnectorResourceExampleResponse | null
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
    data: GetConnectorResourceExampleResponseDataToJSON(value.data)
  }
}
