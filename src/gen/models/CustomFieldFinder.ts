/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
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
 * @interface CustomFieldFinder
 */
export interface CustomFieldFinder {
  /**
   * Custom Field ID
   * @type {string}
   * @memberof CustomFieldFinder
   */
  readonly id?: string
  /**
   * Custom Field name to use as a label if provided
   * @type {string}
   * @memberof CustomFieldFinder
   */
  readonly name?: string | null
  /**
   * More information about the custom field
   * @type {string}
   * @memberof CustomFieldFinder
   */
  description?: string | null
  /**
   * Custom Field value
   * @type {any}
   * @memberof CustomFieldFinder
   */
  value?: any | null
  /**
   * JSONPath finder for retrieving this value when mapping a response payload from downstream
   * @type {string}
   * @memberof CustomFieldFinder
   */
  readonly finder?: string
}

export function CustomFieldFinderFromJSON(json: any): CustomFieldFinder {
  return CustomFieldFinderFromJSONTyped(json, false)
}

export function CustomFieldFinderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CustomFieldFinder {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    value: !exists(json, 'value') ? undefined : json['value'],
    finder: !exists(json, 'finder') ? undefined : json['finder']
  }
}

export function CustomFieldFinderToJSON(value?: CustomFieldFinder | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    description: value.description,
    value: value.value
  }
}
