/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.27.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ApiResourceCoverageSupportedFields
 */
export interface ApiResourceCoverageSupportedFields {
  /**
   * Name of the property in our Unified API.
   * @type {string}
   * @memberof ApiResourceCoverageSupportedFields
   */
  unified_property?: string
}

export function ApiResourceCoverageSupportedFieldsFromJSON(
  json: any
): ApiResourceCoverageSupportedFields {
  return ApiResourceCoverageSupportedFieldsFromJSONTyped(json, false)
}

export function ApiResourceCoverageSupportedFieldsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApiResourceCoverageSupportedFields {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_property: !exists(json, 'unified_property') ? undefined : json['unified_property']
  }
}

export function ApiResourceCoverageSupportedFieldsToJSON(
  value?: ApiResourceCoverageSupportedFields | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_property: value.unified_property
  }
}
