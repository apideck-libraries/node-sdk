/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
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
 * @interface CreateCustomMappingResponse
 */
export interface CreateCustomMappingResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCustomMappingResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCustomMappingResponse
   */
  status: string
  /**
   *
   * @type {CustomMapping}
   * @memberof CreateCustomMappingResponse
   */
  data: CustomMapping
}

export function CreateCustomMappingResponseFromJSON(json: any): CreateCustomMappingResponse {
  return CreateCustomMappingResponseFromJSONTyped(json, false)
}

export function CreateCustomMappingResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCustomMappingResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: CustomMappingFromJSON(json['data'])
  }
}

export function CreateCustomMappingResponseToJSON(value?: CreateCustomMappingResponse | null): any {
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
