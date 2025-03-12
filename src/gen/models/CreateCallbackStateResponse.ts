/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  CreateCallbackStateResponseData,
  CreateCallbackStateResponseDataFromJSON,
  CreateCallbackStateResponseDataToJSON
} from './CreateCallbackStateResponseData'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface CreateCallbackStateResponse
 */
export interface CreateCallbackStateResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCallbackStateResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCallbackStateResponse
   */
  status: string
  /**
   *
   * @type {CreateCallbackStateResponseData}
   * @memberof CreateCallbackStateResponse
   */
  data: CreateCallbackStateResponseData
  /**
   *
   * @type {Raw}
   * @memberof CreateCallbackStateResponse
   */
  _raw?: Raw | null
}

export function CreateCallbackStateResponseFromJSON(json: any): CreateCallbackStateResponse {
  return CreateCallbackStateResponseFromJSONTyped(json, false)
}

export function CreateCallbackStateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCallbackStateResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: CreateCallbackStateResponseDataFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function CreateCallbackStateResponseToJSON(value?: CreateCallbackStateResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: CreateCallbackStateResponseDataToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
