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

import { Connection, ConnectionFromJSON, ConnectionToJSON } from './Connection'

/**
 *
 * @export
 * @interface CreateConnectionResponse
 */
export interface CreateConnectionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateConnectionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateConnectionResponse
   */
  status: string
  /**
   *
   * @type {Connection}
   * @memberof CreateConnectionResponse
   */
  data: Connection
}

export function CreateConnectionResponseFromJSON(json: any): CreateConnectionResponse {
  return CreateConnectionResponseFromJSONTyped(json, false)
}

export function CreateConnectionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConnectionResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConnectionFromJSON(json['data'])
  }
}

export function CreateConnectionResponseToJSON(value?: CreateConnectionResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ConnectionToJSON(value.data)
  }
}
