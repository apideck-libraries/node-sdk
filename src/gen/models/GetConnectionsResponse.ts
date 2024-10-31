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

import { Connection, ConnectionFromJSON, ConnectionToJSON } from './Connection'

/**
 *
 * @export
 * @interface GetConnectionsResponse
 */
export interface GetConnectionsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectionsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectionsResponse
   */
  status: string
  /**
   *
   * @type {Array<Connection>}
   * @memberof GetConnectionsResponse
   */
  data: Array<Connection>
}

export function GetConnectionsResponseFromJSON(json: any): GetConnectionsResponse {
  return GetConnectionsResponseFromJSONTyped(json, false)
}

export function GetConnectionsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectionsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(ConnectionFromJSON)
  }
}

export function GetConnectionsResponseToJSON(value?: GetConnectionsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(ConnectionToJSON)
  }
}
