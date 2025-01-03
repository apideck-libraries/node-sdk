/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CustomMapping, CustomMappingFromJSON, CustomMappingToJSON } from './CustomMapping'

/**
 *
 * @export
 * @interface GetCustomMappingResponse
 */
export interface GetCustomMappingResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomMappingResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomMappingResponse
   */
  status: string
  /**
   *
   * @type {CustomMapping}
   * @memberof GetCustomMappingResponse
   */
  data: CustomMapping
}

export function GetCustomMappingResponseFromJSON(json: any): GetCustomMappingResponse {
  return GetCustomMappingResponseFromJSONTyped(json, false)
}

export function GetCustomMappingResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomMappingResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: CustomMappingFromJSON(json['data'])
  }
}

export function GetCustomMappingResponseToJSON(value?: GetCustomMappingResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: CustomMappingToJSON(value.data)
  }
}
