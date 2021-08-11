/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

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
  statusCode: number
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
    statusCode: json['status_code'],
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
    status_code: value.statusCode,
    status: value.status,
    data: ConnectionToJSON(value.data)
  }
}
