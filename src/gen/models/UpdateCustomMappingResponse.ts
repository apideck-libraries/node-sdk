/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CustomMapping, CustomMappingFromJSON, CustomMappingToJSON } from './CustomMapping'

/**
 *
 * @export
 * @interface UpdateCustomMappingResponse
 */
export interface UpdateCustomMappingResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCustomMappingResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCustomMappingResponse
   */
  status: string
  /**
   *
   * @type {CustomMapping}
   * @memberof UpdateCustomMappingResponse
   */
  data: CustomMapping
}

export function UpdateCustomMappingResponseFromJSON(json: any): UpdateCustomMappingResponse {
  return UpdateCustomMappingResponseFromJSONTyped(json, false)
}

export function UpdateCustomMappingResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCustomMappingResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: CustomMappingFromJSON(json['data'])
  }
}

export function UpdateCustomMappingResponseToJSON(value?: UpdateCustomMappingResponse | null): any {
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