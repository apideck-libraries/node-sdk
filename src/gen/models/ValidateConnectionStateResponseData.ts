/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ConnectionState, ConnectionStateFromJSON, ConnectionStateToJSON } from './ConnectionState'

/**
 *
 * @export
 * @interface ValidateConnectionStateResponseData
 */
export interface ValidateConnectionStateResponseData {
  /**
   * The unique identifier of the connection.
   * @type {string}
   * @memberof ValidateConnectionStateResponseData
   */
  readonly id?: string
  /**
   *
   * @type {ConnectionState}
   * @memberof ValidateConnectionStateResponseData
   */
  state?: ConnectionState
}

export function ValidateConnectionStateResponseDataFromJSON(
  json: any
): ValidateConnectionStateResponseData {
  return ValidateConnectionStateResponseDataFromJSONTyped(json, false)
}

export function ValidateConnectionStateResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ValidateConnectionStateResponseData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    state: !exists(json, 'state') ? undefined : ConnectionStateFromJSON(json['state'])
  }
}

export function ValidateConnectionStateResponseDataToJSON(
  value?: ValidateConnectionStateResponseData | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    state: ConnectionStateToJSON(value.state)
  }
}
