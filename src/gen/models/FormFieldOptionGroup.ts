/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.75.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  SimpleFormFieldOption,
  SimpleFormFieldOptionFromJSON,
  SimpleFormFieldOptionToJSON
} from './SimpleFormFieldOption'

/**
 *
 * @export
 * @interface FormFieldOptionGroup
 */
export interface FormFieldOptionGroup {
  /**
   *
   * @type {string}
   * @memberof FormFieldOptionGroup
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof FormFieldOptionGroup
   */
  label?: string
  /**
   *
   * @type {Array<SimpleFormFieldOption>}
   * @memberof FormFieldOptionGroup
   */
  options?: Array<SimpleFormFieldOption>
}

export function FormFieldOptionGroupFromJSON(json: any): FormFieldOptionGroup {
  return FormFieldOptionGroupFromJSONTyped(json, false)
}

export function FormFieldOptionGroupFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FormFieldOptionGroup {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    label: !exists(json, 'label') ? undefined : json['label'],
    options: !exists(json, 'options')
      ? undefined
      : (json['options'] as Array<any>).map(SimpleFormFieldOptionFromJSON)
  }
}

export function FormFieldOptionGroupToJSON(value?: FormFieldOptionGroup | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    label: value.label,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(SimpleFormFieldOptionToJSON)
  }
}
