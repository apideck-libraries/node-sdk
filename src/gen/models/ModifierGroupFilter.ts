/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.44.0
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
 * @interface ModifierGroupFilter
 */
export interface ModifierGroupFilter {
  /**
   * Id of the job to filter on
   * @type {string}
   * @memberof ModifierGroupFilter
   */
  modifier_group_id?: string
}

export function ModifierGroupFilterFromJSON(json: any): ModifierGroupFilter {
  return ModifierGroupFilterFromJSONTyped(json, false)
}

export function ModifierGroupFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ModifierGroupFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    modifier_group_id: !exists(json, 'modifier_group_id') ? undefined : json['modifier_group_id']
  }
}

export function ModifierGroupFilterToJSON(value?: ModifierGroupFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    modifier_group_id: value.modifier_group_id
  }
}
