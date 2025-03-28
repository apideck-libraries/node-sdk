/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  FormFieldOptionGroup,
  FormFieldOptionGroupFromJSONTyped,
  FormFieldOptionGroupToJSON
} from './FormFieldOptionGroup'
import {
  SimpleFormFieldOption,
  SimpleFormFieldOptionFromJSONTyped,
  SimpleFormFieldOptionToJSON
} from './SimpleFormFieldOption'

/**
 * @type FormFieldOption
 *
 * @export
 */
export type FormFieldOption =
  | ({ option_type: 'group' } & FormFieldOptionGroup)
  | ({ option_type: 'simple' } & SimpleFormFieldOption)

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
  switch (json['option_type']) {
    case 'group':
      return { ...FormFieldOptionGroupFromJSONTyped(json, true), option_type: 'group' }
    case 'simple':
      return { ...SimpleFormFieldOptionFromJSONTyped(json, true), option_type: 'simple' }
    default:
      throw new Error(
        `No variant of FormFieldOption exists with 'option_type=${json['option_type']}'`
      )
  }
}

export function FormFieldOptionToJSON(value?: FormFieldOption | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  switch (value['option_type']) {
    case 'group':
      return FormFieldOptionGroupToJSON(value)
    case 'simple':
      return SimpleFormFieldOptionToJSON(value)
    default:
      throw new Error(
        `No variant of FormFieldOption exists with 'option_type=${value['option_type']}'`
      )
  }
}
