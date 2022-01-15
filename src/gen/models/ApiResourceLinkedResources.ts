/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.10.2
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
 * @interface ApiResourceLinkedResources
 */
export interface ApiResourceLinkedResources {
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ApiResourceLinkedResources
   */
  id?: string
  /**
   * Name of the property in our Unified API.
   * @type {string}
   * @memberof ApiResourceLinkedResources
   */
  unified_property?: string
}

export function ApiResourceLinkedResourcesFromJSON(json: any): ApiResourceLinkedResources {
  return ApiResourceLinkedResourcesFromJSONTyped(json, false)
}

export function ApiResourceLinkedResourcesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApiResourceLinkedResources {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    unified_property: !exists(json, 'unified_property') ? undefined : json['unified_property']
  }
}

export function ApiResourceLinkedResourcesToJSON(value?: ApiResourceLinkedResources | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    unified_property: value.unified_property
  }
}
