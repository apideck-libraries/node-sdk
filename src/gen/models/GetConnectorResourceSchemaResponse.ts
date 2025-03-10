/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetConnectorResourceSchemaResponse
 */
export interface GetConnectorResourceSchemaResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectorResourceSchemaResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectorResourceSchemaResponse
   */
  status: string
  /**
   *
   * @type {object}
   * @memberof GetConnectorResourceSchemaResponse
   */
  data: object
  /**
   *
   * @type {Raw}
   * @memberof GetConnectorResourceSchemaResponse
   */
  _raw?: Raw | null
}

export function GetConnectorResourceSchemaResponseFromJSON(
  json: any
): GetConnectorResourceSchemaResponse {
  return GetConnectorResourceSchemaResponseFromJSONTyped(json, false)
}

export function GetConnectorResourceSchemaResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorResourceSchemaResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: json['data'],
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetConnectorResourceSchemaResponseToJSON(
  value?: GetConnectorResourceSchemaResponse | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: value.data,
    _raw: RawToJSON(value._raw)
  }
}
