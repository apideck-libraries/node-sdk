/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.7.0
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
 * @interface FormFieldOption
 */
export interface FormFieldOption {
  /**
   *
   * @type {string}
   * @memberof FormFieldOption
   */
  label?: string
  /**
   *
   * @type {string | number | boolean | Array<string | number>}
   * @memberof FormFieldOption
   */
  value?: string | number | boolean | Array<string | number>
  /**
   *
   * @type {string}
   * @memberof FormFieldOption
   */
  id?: string
  /**
   *
   * @type {Array<SimpleFormFieldOption>}
   * @memberof FormFieldOption
   */
  options?: Array<SimpleFormFieldOption>
}

export function FormFieldOptionFromJSON(json: any): FormFieldOption {
  return FormFieldOptionFromJSONTyped(json, false)
}

export function FormFieldOptionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FormFieldOption {
  if (json === undefined || json === null) {
    return json
  }
  return {
    label: !exists(json, 'label') ? undefined : json['label'],
    value: !exists(json, 'value')
      ? undefined
      : <string | number | boolean | Array<string | number>>json['value'],
    id: !exists(json, 'id') ? undefined : json['id'],
    options: !exists(json, 'options')
      ? undefined
      : (json['options'] as Array<any>).map(SimpleFormFieldOptionFromJSON)
  }
}

export function FormFieldOptionToJSON(value?: FormFieldOption | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    label: value.label,
    value: <string | number | boolean | Array<string | number>>value.value,
    id: value.id,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(SimpleFormFieldOptionToJSON)
  }
}
