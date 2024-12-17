/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
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
 * @interface DrivesFilter
 */
export interface DrivesFilter {
  /**
   * ID of the drive group to filter on
   * @type {string}
   * @memberof DrivesFilter
   */
  group_id?: string
}

export function DrivesFilterFromJSON(json: any): DrivesFilter {
  return DrivesFilterFromJSONTyped(json, false)
}

export function DrivesFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): DrivesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    group_id: !exists(json, 'group_id') ? undefined : json['group_id']
  }
}

export function DrivesFilterToJSON(value?: DrivesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    group_id: value.group_id
  }
}
