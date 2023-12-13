/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.2
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
 * @interface BadRequestResponse
 */
export interface BadRequestResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof BadRequestResponse
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof BadRequestResponse
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof BadRequestResponse
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof BadRequestResponse
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   * @type {string | object}
   * @memberof BadRequestResponse
   */
  detail?: string | object | null
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof BadRequestResponse
   */
  ref?: string
}

export function BadRequestResponseFromJSON(json: any): BadRequestResponse {
  return BadRequestResponseFromJSONTyped(json, false)
}

export function BadRequestResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BadRequestResponse {
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

export function BadRequestResponseToJSON(value?: BadRequestResponse | null): any {
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
