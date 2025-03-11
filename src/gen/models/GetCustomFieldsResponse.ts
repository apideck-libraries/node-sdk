/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  CustomFieldFinder,
  CustomFieldFinderFromJSON,
  CustomFieldFinderToJSON
} from './CustomFieldFinder'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

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
  /**
   *
   * @type {Raw}
   * @memberof GetCustomFieldsResponse
   */
  _raw?: Raw | null
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
    data: (json['data'] as Array<any>).map(CustomFieldFinderFromJSON),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
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
    data: (value.data as Array<any>).map(CustomFieldFinderToJSON),
    _raw: RawToJSON(value._raw)
  }
}
