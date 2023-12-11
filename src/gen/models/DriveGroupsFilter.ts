/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.1
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
 * @interface DriveGroupsFilter
 */
export interface DriveGroupsFilter {
  /**
   * ID of the drive group to filter on
   * @type {string}
   * @memberof DriveGroupsFilter
   */
  parent_group_id?: string
}

export function DriveGroupsFilterFromJSON(json: any): DriveGroupsFilter {
  return DriveGroupsFilterFromJSONTyped(json, false)
}

export function DriveGroupsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DriveGroupsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    parent_group_id: !exists(json, 'parent_group_id') ? undefined : json['parent_group_id']
  }
}

export function DriveGroupsFilterToJSON(value?: DriveGroupsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    parent_group_id: value.parent_group_id
  }
}
