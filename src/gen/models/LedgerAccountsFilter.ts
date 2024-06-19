/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.5.0
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
 * @interface LedgerAccountsFilter
 */
export interface LedgerAccountsFilter {
  /**
   *
   * @type {Date}
   * @memberof LedgerAccountsFilter
   */
  updated_since?: Date
}

export function LedgerAccountsFilterFromJSON(json: any): LedgerAccountsFilter {
  return LedgerAccountsFilterFromJSONTyped(json, false)
}

export function LedgerAccountsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LedgerAccountsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function LedgerAccountsFilterToJSON(value?: LedgerAccountsFilter | null): any {
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
