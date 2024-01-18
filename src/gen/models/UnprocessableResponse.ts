/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface UnprocessableResponse
 */
export interface UnprocessableResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof UnprocessableResponse
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof UnprocessableResponse
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof UnprocessableResponse
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof UnprocessableResponse
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   * @type {string}
   * @memberof UnprocessableResponse
   */
  detail?: string
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof UnprocessableResponse
   */
  ref?: string
}

export function UnprocessableResponseFromJSON(json: any): UnprocessableResponse {
  return UnprocessableResponseFromJSONTyped(json, false)
}

export function UnprocessableResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UnprocessableResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    type_name: !exists(json, 'type_name') ? undefined : json['type_name'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  }
}

export function UnprocessableResponseToJSON(value?: UnprocessableResponse | null): any {
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
    detail: value.detail,
    ref: value.ref
  }
}
