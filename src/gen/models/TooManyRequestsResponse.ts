/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  TooManyRequestsResponseDetail,
  TooManyRequestsResponseDetailFromJSON,
  TooManyRequestsResponseDetailToJSON
} from './TooManyRequestsResponseDetail'

/**
 *
 * @export
 * @interface TooManyRequestsResponse
 */
export interface TooManyRequestsResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof TooManyRequestsResponse
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585)
   * @type {string}
   * @memberof TooManyRequestsResponse
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof TooManyRequestsResponse
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof TooManyRequestsResponse
   */
  message?: string
  /**
   *
   * @type {TooManyRequestsResponseDetail}
   * @memberof TooManyRequestsResponse
   */
  detail?: TooManyRequestsResponseDetail
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof TooManyRequestsResponse
   */
  ref?: string
}

export function TooManyRequestsResponseFromJSON(json: any): TooManyRequestsResponse {
  return TooManyRequestsResponseFromJSONTyped(json, false)
}

export function TooManyRequestsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TooManyRequestsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    type_name: !exists(json, 'type_name') ? undefined : json['type_name'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail')
      ? undefined
      : TooManyRequestsResponseDetailFromJSON(json['detail']),
    ref: !exists(json, 'ref') ? undefined : json['ref']
  }
}

export function TooManyRequestsResponseToJSON(value?: TooManyRequestsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    error: value.error,
    type_name: value.type_name,
    message: value.message,
    detail: TooManyRequestsResponseDetailToJSON(value.detail),
    ref: value.ref
  }
}
