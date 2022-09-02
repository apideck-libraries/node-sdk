/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.46.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { FormFieldOption, FormFieldOptionFromJSON, FormFieldOptionToJSON } from './FormFieldOption'

/**
 *
 * @export
 * @interface FormField
 */
export interface FormField {
  /**
   *
   * @type {string}
   * @memberof FormField
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof FormField
   */
  label?: string
  /**
   *
   * @type {string}
   * @memberof FormField
   */
  placeholder?: string | null
  /**
   *
   * @type {string}
   * @memberof FormField
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof FormField
   */
  type?: FormFieldType
  /**
   *
   * @type {boolean}
   * @memberof FormField
   */
  required?: boolean
  /**
   *
   * @type {boolean}
   * @memberof FormField
   */
  custom_field?: boolean
  /**
   * Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list.
   * @type {boolean}
   * @memberof FormField
   */
  allow_custom_values?: boolean
  /**
   *
   * @type {boolean}
   * @memberof FormField
   */
  disabled?: boolean | null
  /**
   *
   * @type {boolean}
   * @memberof FormField
   */
  sensitive?: boolean | null
  /**
   *
   * @type {Array<FormFieldOption>}
   * @memberof FormField
   */
  options?: Array<FormFieldOption>
}

/**
 * @export
 * @enum {string}
 */
export enum FormFieldType {
  text = 'text',
  checkbox = 'checkbox',
  tel = 'tel',
  email = 'email',
  url = 'url',
  textarea = 'textarea',
  select = 'select',
  filtered_select = 'filtered-select',
  multi_select = 'multi-select',
  datetime = 'datetime',
  date = 'date',
  time = 'time',
  number = 'number'
}

export function FormFieldFromJSON(json: any): FormField {
  return FormFieldFromJSONTyped(json, false)
}

export function FormFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormField {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    label: !exists(json, 'label') ? undefined : json['label'],
    placeholder: !exists(json, 'placeholder') ? undefined : json['placeholder'],
    description: !exists(json, 'description') ? undefined : json['description'],
    type: !exists(json, 'type') ? undefined : json['type'],
    required: !exists(json, 'required') ? undefined : json['required'],
    custom_field: !exists(json, 'custom_field') ? undefined : json['custom_field'],
    allow_custom_values: !exists(json, 'allow_custom_values')
      ? undefined
      : json['allow_custom_values'],
    disabled: !exists(json, 'disabled') ? undefined : json['disabled'],
    sensitive: !exists(json, 'sensitive') ? undefined : json['sensitive'],
    options: !exists(json, 'options')
      ? undefined
      : (json['options'] as Array<any>).map(FormFieldOptionFromJSON)
  }
}

export function FormFieldToJSON(value?: FormField | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    label: value.label,
    placeholder: value.placeholder,
    description: value.description,
    type: value.type,
    required: value.required,
    custom_field: value.custom_field,
    allow_custom_values: value.allow_custom_values,
    disabled: value.disabled,
    sensitive: value.sensitive,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(FormFieldOptionToJSON)
  }
}
