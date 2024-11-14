/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface SupportedProperty
 */
export interface SupportedProperty {
  /**
   * Name of the property in our Unified API.
   * @type {string}
   * @memberof SupportedProperty
   */
  unified_property?: string
  /**
   * List of child properties of the unified property.
   * @type {Array<SupportedProperty>}
   * @memberof SupportedProperty
   */
  child_properties?: Array<SupportedProperty>
}

export function SupportedPropertyFromJSON(json: any): SupportedProperty {
  return SupportedPropertyFromJSONTyped(json, false)
}

export function SupportedPropertyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SupportedProperty {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_property: !exists(json, 'unified_property') ? undefined : json['unified_property'],
    child_properties: !exists(json, 'child_properties')
      ? undefined
      : (json['child_properties'] as Array<any>).map(SupportedPropertyFromJSON)
  }
}

export function SupportedPropertyToJSON(value?: SupportedProperty | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_property: value.unified_property,
    child_properties:
      value.child_properties === undefined
        ? undefined
        : (value.child_properties as Array<any>).map(SupportedPropertyToJSON)
  }
}
