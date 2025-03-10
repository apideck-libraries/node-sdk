/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  GetConnectorResourceExampleResponseData,
  GetConnectorResourceExampleResponseDataFromJSON,
  GetConnectorResourceExampleResponseDataToJSON
} from './GetConnectorResourceExampleResponseData'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

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
  /**
   *
   * @type {Raw}
   * @memberof GetConnectorResourceExampleResponse
   */
  _raw?: Raw | null
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
    data: GetConnectorResourceExampleResponseDataFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
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
    data: GetConnectorResourceExampleResponseDataToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
