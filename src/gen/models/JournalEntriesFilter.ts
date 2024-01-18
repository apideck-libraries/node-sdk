/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.1
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
 * @interface JournalEntriesFilter
 */
export interface JournalEntriesFilter {
  /**
   *
   * @type {Date}
   * @memberof JournalEntriesFilter
   */
  updated_since?: Date
}

export function JournalEntriesFilterFromJSON(json: any): JournalEntriesFilter {
  return JournalEntriesFilterFromJSONTyped(json, false)
}

export function JournalEntriesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): JournalEntriesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function JournalEntriesFilterToJSON(value?: JournalEntriesFilter | null): any {
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
