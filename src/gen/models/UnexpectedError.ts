/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface UnexpectedError
 */
export interface UnexpectedError {
  /**
   * HTTP status code
   * @type {number}
   * @memberof UnexpectedError
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof UnexpectedError
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof UnexpectedError
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof UnexpectedError
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occured.
   * @type {string | object}
   * @memberof UnexpectedError
   */
  detail?: string | object
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof UnexpectedError
   */
  ref?: string
}

export function UnexpectedErrorFromJSON(json: any): UnexpectedError {
  return UnexpectedErrorFromJSONTyped(json, false)
}

export function UnexpectedErrorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UnexpectedError {
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

export function UnexpectedErrorToJSON(value?: UnexpectedError | null): any {
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