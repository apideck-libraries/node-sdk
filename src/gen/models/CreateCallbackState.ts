/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
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
 * @interface CreateCallbackState
 */
export interface CreateCallbackState {
  /**
   * The redirect URI to be used after the connection is created.
   * @type {string}
   * @memberof CreateCallbackState
   */
  redirect_uri?: string
}

export function CreateCallbackStateFromJSON(json: any): CreateCallbackState {
  return CreateCallbackStateFromJSONTyped(json, false)
}

export function CreateCallbackStateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCallbackState {
  if (json === undefined || json === null) {
    return json
  }
  return {
    redirect_uri: !exists(json, 'redirect_uri') ? undefined : json['redirect_uri']
  }
}

export function CreateCallbackStateToJSON(value?: CreateCallbackState | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    redirect_uri: value.redirect_uri
  }
}
