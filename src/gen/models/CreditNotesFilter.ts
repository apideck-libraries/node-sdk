/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.0
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
 * @interface CreditNotesFilter
 */
export interface CreditNotesFilter {
  /**
   *
   * @type {Date}
   * @memberof CreditNotesFilter
   */
  updated_since?: Date
}

export function CreditNotesFilterFromJSON(json: any): CreditNotesFilter {
  return CreditNotesFilterFromJSONTyped(json, false)
}

export function CreditNotesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreditNotesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function CreditNotesFilterToJSON(value?: CreditNotesFilter | null): any {
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
