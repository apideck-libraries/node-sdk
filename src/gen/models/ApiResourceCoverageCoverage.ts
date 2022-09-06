/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.49.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ApiResourceCoverageSupportedFields,
  ApiResourceCoverageSupportedFieldsFromJSON,
  ApiResourceCoverageSupportedFieldsToJSON
} from './ApiResourceCoverageSupportedFields'

/**
 *
 * @export
 * @interface ApiResourceCoverageCoverage
 */
export interface ApiResourceCoverageCoverage {
  /**
   * ID of the resource in the Connector's API (downstream)
   * @type {string}
   * @memberof ApiResourceCoverageCoverage
   */
  downstream_id?: string
  /**
   * Name of the resource in the Connector's API (downstream)
   * @type {string}
   * @memberof ApiResourceCoverageCoverage
   */
  downstream_name?: string
  /**
   * Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.
   * @type {boolean}
   * @memberof ApiResourceCoverageCoverage
   */
  pagination_supported?: boolean
  /**
   * List of supported operations on the resource.
   * @type {Array<string>}
   * @memberof ApiResourceCoverageCoverage
   */
  supported_operations?: Array<string>
  /**
   * Supported filters on the list endpoint of the resource.
   * @type {Array<string>}
   * @memberof ApiResourceCoverageCoverage
   */
  supported_filters?: Array<string>
  /**
   * Supported sorting properties on the list endpoint of the resource.
   * @type {Array<string>}
   * @memberof ApiResourceCoverageCoverage
   */
  supported_sort_by?: Array<string>
  /**
   * Supported fields on the detail endpoint.
   * @type {Array<ApiResourceCoverageSupportedFields>}
   * @memberof ApiResourceCoverageCoverage
   */
  supported_fields?: Array<ApiResourceCoverageSupportedFields>
  /**
   * Supported fields on the list endpoint.
   * @type {Array<ApiResourceCoverageSupportedFields>}
   * @memberof ApiResourceCoverageCoverage
   */
  supported_list_fields?: Array<ApiResourceCoverageSupportedFields>
}

export function ApiResourceCoverageCoverageFromJSON(json: any): ApiResourceCoverageCoverage {
  return ApiResourceCoverageCoverageFromJSONTyped(json, false)
}

export function ApiResourceCoverageCoverageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApiResourceCoverageCoverage {
  if (json === undefined || json === null) {
    return json
  }
  return {
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    downstream_name: !exists(json, 'downstream_name') ? undefined : json['downstream_name'],
    pagination_supported: !exists(json, 'pagination_supported')
      ? undefined
      : json['pagination_supported'],
    supported_operations: !exists(json, 'supported_operations')
      ? undefined
      : json['supported_operations'],
    supported_filters: !exists(json, 'supported_filters') ? undefined : json['supported_filters'],
    supported_sort_by: !exists(json, 'supported_sort_by') ? undefined : json['supported_sort_by'],
    supported_fields: !exists(json, 'supported_fields')
      ? undefined
      : (json['supported_fields'] as Array<any>).map(ApiResourceCoverageSupportedFieldsFromJSON),
    supported_list_fields: !exists(json, 'supported_list_fields')
      ? undefined
      : (json['supported_list_fields'] as Array<any>).map(
          ApiResourceCoverageSupportedFieldsFromJSON
        )
  }
}

export function ApiResourceCoverageCoverageToJSON(value?: ApiResourceCoverageCoverage | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    downstream_id: value.downstream_id,
    downstream_name: value.downstream_name,
    pagination_supported: value.pagination_supported,
    supported_operations: value.supported_operations,
    supported_filters: value.supported_filters,
    supported_sort_by: value.supported_sort_by,
    supported_fields:
      value.supported_fields === undefined
        ? undefined
        : (value.supported_fields as Array<any>).map(ApiResourceCoverageSupportedFieldsToJSON),
    supported_list_fields:
      value.supported_list_fields === undefined
        ? undefined
        : (value.supported_list_fields as Array<any>).map(ApiResourceCoverageSupportedFieldsToJSON)
  }
}
