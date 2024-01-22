/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
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
 * @interface ConnectionDefaults
 */
export interface ConnectionDefaults {
  /**
   *
   * @type {string}
   * @memberof ConnectionDefaults
   */
  readonly target?: ConnectionDefaultsTarget
  /**
   *
   * @type {string}
   * @memberof ConnectionDefaults
   */
  id?: string
  /**
   *
   * @type {Array<FormFieldOption>}
   * @memberof ConnectionDefaults
   */
  options?: Array<FormFieldOption>
  /**
   *
   * @type {string | number | boolean | Array<string | number>}
   * @memberof ConnectionDefaults
   */
  value?: string | number | boolean | Array<string | number> | null
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectionDefaultsTarget {
  custom_fields = 'custom_fields',
  resource = 'resource'
}

export function ConnectionDefaultsFromJSON(json: any): ConnectionDefaults {
  return ConnectionDefaultsFromJSONTyped(json, false)
}

export function ConnectionDefaultsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionDefaults {
  if (json === undefined || json === null) {
    return json
  }
  return {
    target: !exists(json, 'target') ? undefined : json['target'],
    id: !exists(json, 'id') ? undefined : json['id'],
    options: !exists(json, 'options')
      ? undefined
      : (json['options'] as Array<any>).map(FormFieldOptionFromJSON),
    value: !exists(json, 'value')
      ? undefined
      : <string | number | boolean | Array<string | number>>json['value']
  }
}

export function ConnectionDefaultsToJSON(value?: ConnectionDefaults | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    options:
      value.options === undefined
        ? undefined
        : (value.options as Array<any>).map(FormFieldOptionToJSON),
    value: <string | number | boolean | Array<string | number>>value.value
  }
}
