/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Connection, ConnectionFromJSON, ConnectionToJSON } from './Connection'

/**
 *
 * @export
 * @interface GetConnectionResponse
 */
export interface GetConnectionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectionResponse
   */
  status: string
  /**
   *
   * @type {Connection}
   * @memberof GetConnectionResponse
   */
  data: Connection
}

export function GetConnectionResponseFromJSON(json: any): GetConnectionResponse {
  return GetConnectionResponseFromJSONTyped(json, false)
}

export function GetConnectionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectionResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConnectionFromJSON(json['data'])
  }
}

export function GetConnectionResponseToJSON(value?: GetConnectionResponse | null): any {
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
