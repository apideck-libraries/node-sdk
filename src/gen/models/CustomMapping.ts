/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.5.0
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
 * @interface CustomMapping
 */
export interface CustomMapping {
  /**
   * Target Field ID
   * @type {string}
   * @memberof CustomMapping
   */
  readonly id?: string
  /**
   * Target Field name to use as a label
   * @type {string}
   * @memberof CustomMapping
   */
  readonly label?: string
  /**
   * Target Field description
   * @type {string}
   * @memberof CustomMapping
   */
  readonly description?: string | null
  /**
   * Target Field Mapping value
   * @type {string}
   * @memberof CustomMapping
   */
  value?: string
  /**
   * Target Field Key
   * @type {string}
   * @memberof CustomMapping
   */
  readonly key?: string
  /**
   * Target Field Mapping is required
   * @type {boolean}
   * @memberof CustomMapping
   */
  readonly required?: boolean
  /**
   * This mapping represents a finder for a custom field
   * @type {boolean}
   * @memberof CustomMapping
   */
  readonly custom_field?: boolean
  /**
   * Consumer ID
   * @type {string}
   * @memberof CustomMapping
   */
  readonly consumer_id?: string | null
}

export function CustomMappingFromJSON(json: any): CustomMapping {
  return CustomMappingFromJSONTyped(json, false)
}

export function CustomMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomMapping {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    label: !exists(json, 'label') ? undefined : json['label'],
    description: !exists(json, 'description') ? undefined : json['description'],
    value: !exists(json, 'value') ? undefined : json['value'],
    key: !exists(json, 'key') ? undefined : json['key'],
    required: !exists(json, 'required') ? undefined : json['required'],
    custom_field: !exists(json, 'custom_field') ? undefined : json['custom_field'],
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id']
  }
}

export function CustomMappingToJSON(value?: CustomMapping | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    value: value.value
  }
}
