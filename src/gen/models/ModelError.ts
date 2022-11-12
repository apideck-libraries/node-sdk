/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.84.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * The error returned if your message status is failed or undelivered.
 * @export
 * @interface ModelError
 */
export interface ModelError {
  /**
   * The error_code provides more information about the failure. If the message was successful, this value is null
   * @type {string}
   * @memberof ModelError
   */
  readonly code?: string
  /**
   *
   * @type {string}
   * @memberof ModelError
   */
  readonly message?: string
}

export function ModelErrorFromJSON(json: any): ModelError {
  return ModelErrorFromJSONTyped(json, false)
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
  if (json === undefined || json === null) {
    return json
  }
  return {
    code: !exists(json, 'code') ? undefined : json['code'],
    message: !exists(json, 'message') ? undefined : json['message']
  }
}

export function ModelErrorToJSON(value?: ModelError | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
