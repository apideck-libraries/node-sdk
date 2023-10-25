/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
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
 * @interface ActivitiesFilter
 */
export interface ActivitiesFilter {
  /**
   *
   * @type {Date}
   * @memberof ActivitiesFilter
   */
  updated_since?: Date
}

export function ActivitiesFilterFromJSON(json: any): ActivitiesFilter {
  return ActivitiesFilterFromJSONTyped(json, false)
}

export function ActivitiesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ActivitiesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function ActivitiesFilterToJSON(value?: ActivitiesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    updated_since:
      value.updated_since === undefined ? undefined : new Date(value.updated_since).toISOString()
  }
}
