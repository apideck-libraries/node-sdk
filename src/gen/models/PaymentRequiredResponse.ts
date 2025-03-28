/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
 * @interface PaymentRequiredResponse
 */
export interface PaymentRequiredResponse {
  /**
   * HTTP status code
   * @type {number}
   * @memberof PaymentRequiredResponse
   */
  status_code?: number
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   * @type {string}
   * @memberof PaymentRequiredResponse
   */
  error?: string
  /**
   * The type of error returned
   * @type {string}
   * @memberof PaymentRequiredResponse
   */
  type_name?: string
  /**
   * A human-readable message providing more details about the error.
   * @type {string}
   * @memberof PaymentRequiredResponse
   */
  message?: string
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   * @type {string}
   * @memberof PaymentRequiredResponse
   */
  detail?: string
  /**
   * Link to documentation of error type
   * @type {string}
   * @memberof PaymentRequiredResponse
   */
  ref?: string
}

export function PaymentRequiredResponseFromJSON(json: any): PaymentRequiredResponse {
  return PaymentRequiredResponseFromJSONTyped(json, false)
}

export function PaymentRequiredResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentRequiredResponse {
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

export function PaymentRequiredResponseToJSON(value?: PaymentRequiredResponse | null): any {
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
