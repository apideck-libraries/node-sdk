/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
 * @interface GetCustomMappingsResponse
 */
export interface GetCustomMappingsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomMappingsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomMappingsResponse
   */
  status: string
  /**
   *
   * @type {Array<CustomMapping>}
   * @memberof GetCustomMappingsResponse
   */
  data: Array<CustomMapping>
}

export function GetCustomMappingsResponseFromJSON(json: any): GetCustomMappingsResponse {
  return GetCustomMappingsResponseFromJSONTyped(json, false)
}

export function GetCustomMappingsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomMappingsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(CustomMappingFromJSON)
  }
}

export function GetCustomMappingsResponseToJSON(value?: GetCustomMappingsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(CustomMappingToJSON)
  }
}
