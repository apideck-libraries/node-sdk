/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.2
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
 * @interface CustomField
 */
export interface CustomField {
  /**
   * Unique identifier for the custom field.
   * @type {string}
   * @memberof CustomField
   */
  id: string | null
  /**
   * Name of the custom field.
   * @type {string}
   * @memberof CustomField
   */
  name?: string | null
  /**
   * More information about the custom field
   * @type {string}
   * @memberof CustomField
   */
  description?: string | null
  /**
   *
   * @type {string | number | boolean | object | Array<string> | Array<object>}
   * @memberof CustomField
   */
  value?: string | number | boolean | object | Array<string> | Array<object> | null
}

export function CustomFieldFromJSON(json: any): CustomField {
  return CustomFieldFromJSONTyped(json, false)
}

export function CustomFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomField {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    value: !exists(json, 'value')
      ? undefined
      : <string | number | boolean | object | Array<string> | Array<object>>json['value']
  }
}

export function CustomFieldToJSON(value?: CustomField | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    description: value.description,
    value: <string | number | boolean | object | Array<string> | Array<object>>value.value
  }
}
