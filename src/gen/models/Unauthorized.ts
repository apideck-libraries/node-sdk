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
 * @interface Unauthorized
 */
export interface Unauthorized {
  /**
   * HTTP status code
   * @type {number}
   * @memberof Unauthorized
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof Unauthorized
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof Unauthorized
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof Unauthorized
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occured.
   * @type {string}
   * @memberof Unauthorized
   */
  detail?: string
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof Unauthorized
   */
  ref?: string
}

export function UnauthorizedFromJSON(json: any): Unauthorized {
  return UnauthorizedFromJSONTyped(json, false)
}

export function UnauthorizedFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unauthorized {
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

export function UnauthorizedToJSON(value?: Unauthorized | null): any {
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
