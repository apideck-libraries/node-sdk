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

import {
  CustomFieldFinder,
  CustomFieldFinderFromJSON,
  CustomFieldFinderToJSON
} from './CustomFieldFinder'

/**
 *
 * @export
 * @interface GetCustomFieldsResponse
 */
export interface GetCustomFieldsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCustomFieldsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCustomFieldsResponse
   */
  status: string
  /**
   *
   * @type {Array<CustomFieldFinder>}
   * @memberof GetCustomFieldsResponse
   */
  data: Array<CustomFieldFinder>
}

export function GetCustomFieldsResponseFromJSON(json: any): GetCustomFieldsResponse {
  return GetCustomFieldsResponseFromJSONTyped(json, false)
}

export function GetCustomFieldsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCustomFieldsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(CustomFieldFinderFromJSON)
  }
}

export function GetCustomFieldsResponseToJSON(value?: GetCustomFieldsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(CustomFieldFinderToJSON)
  }
}
