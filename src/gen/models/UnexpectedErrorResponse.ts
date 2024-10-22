/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'

/**
 *
 * @export
 * @interface UnexpectedErrorResponse
 */
export interface UnexpectedErrorResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof UnexpectedErrorResponse
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof UnexpectedErrorResponse
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof UnexpectedErrorResponse
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof UnexpectedErrorResponse
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   * @type {string | object}
   * @memberof UnexpectedErrorResponse
   */
  detail?: string | object | null
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof UnexpectedErrorResponse
   */
  ref?: string
}

export function UnexpectedErrorResponseFromJSON(json: any): UnexpectedErrorResponse {
  return UnexpectedErrorResponseFromJSONTyped(json, false)
}

export function UnexpectedErrorResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UnexpectedErrorResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    type_name: !exists(json, 'type_name') ? undefined : json['type_name'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : <string | object>json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  }
}

export function UnexpectedErrorResponseToJSON(value?: UnexpectedErrorResponse | null): any {
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
    detail: <string | object>value.detail,
    ref: value.ref
  }
}
