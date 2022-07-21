/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
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
   *
   * @type {string}
   * @memberof CustomField
   */
  id: string
  /**
   * Name of the custom field.
   * @type {string}
   * @memberof CustomField
   */
  name?: string
  /**
   * More information about the custom field
   * @type {string}
   * @memberof CustomField
   */
  description?: string
  /**
   *
   * @type {string | number | boolean | Array<string>}
   * @memberof CustomField
   */
  value?: string | number | boolean | Array<string> | null
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
      : <string | number | boolean | Array<string>>json['value']
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
    value: <string | number | boolean | Array<string>>value.value
  }
}
