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
 * @interface UpdateConnectionResponse
 */
export interface UpdateConnectionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateConnectionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateConnectionResponse
   */
  status: string
  /**
   *
   * @type {Connection}
   * @memberof UpdateConnectionResponse
   */
  data: Connection
}

export function UpdateConnectionResponseFromJSON(json: any): UpdateConnectionResponse {
  return UpdateConnectionResponseFromJSONTyped(json, false)
}

export function UpdateConnectionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateConnectionResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConnectionFromJSON(json['data'])
  }
}

export function UpdateConnectionResponseToJSON(value?: UpdateConnectionResponse | null): any {
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
