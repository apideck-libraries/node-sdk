/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
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
 * @interface GetResourceSchemaResponse
 */
export interface GetResourceSchemaResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetResourceSchemaResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetResourceSchemaResponse
   */
  status: string
  /**
   *
   * @type {object}
   * @memberof GetResourceSchemaResponse
   */
  data: object
  /**
   *
   * @type {Raw}
   * @memberof GetResourceSchemaResponse
   */
  _raw?: Raw | null
}

export function GetResourceSchemaResponseFromJSON(json: any): GetResourceSchemaResponse {
  return GetResourceSchemaResponseFromJSONTyped(json, false)
}

export function GetResourceSchemaResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetResourceSchemaResponse {
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

export function GetResourceSchemaResponseToJSON(value?: GetResourceSchemaResponse | null): any {
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
