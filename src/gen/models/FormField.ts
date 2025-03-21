/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
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
   * The unique identifier of the form field.
   * @type {string}
   * @memberof FormField
   */
  id?: string
  /**
   * The label of the field
   * @type {string}
   * @memberof FormField
   */
  label?: string
  /**
   * The placeholder for the form field
   * @type {string}
   * @memberof FormField
   */
  placeholder?: string | null
  /**
   * The description of the form field
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
   * Indicates if the form field is required, which means it must be filled in before the form can be submitted
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
   * Indicates if the form field is displayed in a “read-only” mode.
   * @type {boolean}
   * @memberof FormField
   */
  disabled?: boolean | null
  /**
   * Indicates if the form field is not displayed but the value that is being stored on the connection.
   * @type {boolean}
   * @memberof FormField
   */
  hidden?: boolean | null
  /**
   * When the setting is deprecated, it should be hidden from the user interface. The value will still be stored on the connection for the sake of backwards compatibility.
   * @type {boolean}
   * @memberof FormField
   */
  deprecated?: boolean | null
  /**
   * Indicates if the form field contains sensitive data, which will display the value as a masked input.
   * @type {boolean}
   * @memberof FormField
   */
  sensitive?: boolean | null
  /**
   * Prefix to display in front of the form field.
   * @type {string}
   * @memberof FormField
   */
  prefix?: string | null
  /**
   * Suffix to display next to the form field.
   * @type {string}
   * @memberof FormField
   */
  suffix?: string | null
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
    hidden: !exists(json, 'hidden') ? undefined : json['hidden'],
    deprecated: !exists(json, 'deprecated') ? undefined : json['deprecated'],
    sensitive: !exists(json, 'sensitive') ? undefined : json['sensitive'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
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
    hidden: value.hidden,
    deprecated: value.deprecated,
    sensitive: value.sensitive,
    prefix: value.prefix,
    suffix: value.suffix,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(FormFieldOptionToJSON)
  }
}
