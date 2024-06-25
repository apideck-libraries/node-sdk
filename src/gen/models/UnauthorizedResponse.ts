/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.2
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
 * @interface UnauthorizedResponse
 */
export interface UnauthorizedResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof UnauthorizedResponse
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof UnauthorizedResponse
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof UnauthorizedResponse
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof UnauthorizedResponse
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   * @type {string | object}
   * @memberof UnauthorizedResponse
   */
  detail?: string | object | null
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof UnauthorizedResponse
   */
  ref?: string
}

export function UnauthorizedResponseFromJSON(json: any): UnauthorizedResponse {
  return UnauthorizedResponseFromJSONTyped(json, false)
}

export function UnauthorizedResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UnauthorizedResponse {
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

export function UnauthorizedResponseToJSON(value?: UnauthorizedResponse | null): any {
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
