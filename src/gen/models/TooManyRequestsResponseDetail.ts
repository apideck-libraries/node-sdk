/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.0
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
 * @interface TooManyRequestsResponseDetail
 */
export interface TooManyRequestsResponseDetail {
  /**
   *
   * @type {string}
   * @memberof TooManyRequestsResponseDetail
   */
  context?: string
  /**
   *
   * @type {{ [key: string]: unknown; }}
   * @memberof TooManyRequestsResponseDetail
   */
  error?: { [key: string]: unknown }
}

export function TooManyRequestsResponseDetailFromJSON(json: any): TooManyRequestsResponseDetail {
  return TooManyRequestsResponseDetailFromJSONTyped(json, false)
}

export function TooManyRequestsResponseDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TooManyRequestsResponseDetail {
  if (json === undefined || json === null) {
    return json
  }
  return {
    context: !exists(json, 'context') ? undefined : json['context'],
    error: !exists(json, 'error') ? undefined : json['error']
  }
}

export function TooManyRequestsResponseDetailToJSON(
  value?: TooManyRequestsResponseDetail | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    context: value.context,
    error: value.error
  }
}
