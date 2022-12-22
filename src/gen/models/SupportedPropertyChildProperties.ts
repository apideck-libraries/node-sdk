/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  SupportedProperty,
  SupportedPropertyFromJSON,
  SupportedPropertyToJSON
} from './SupportedProperty'

/**
 *
 * @export
 * @interface SupportedPropertyChildProperties
 */
export interface SupportedPropertyChildProperties {
  /**
   *
   * @type {SupportedProperty}
   * @memberof SupportedPropertyChildProperties
   */
  unified_property?: SupportedProperty
}

export function SupportedPropertyChildPropertiesFromJSON(
  json: any
): SupportedPropertyChildProperties {
  return SupportedPropertyChildPropertiesFromJSONTyped(json, false)
}

export function SupportedPropertyChildPropertiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SupportedPropertyChildProperties {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_property: !exists(json, 'unified_property')
      ? undefined
      : SupportedPropertyFromJSON(json['unified_property'])
  }
}

export function SupportedPropertyChildPropertiesToJSON(
  value?: SupportedPropertyChildProperties | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_property: SupportedPropertyToJSON(value.unified_property)
  }
}
