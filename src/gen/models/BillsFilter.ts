/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
 * @interface BillsFilter
 */
export interface BillsFilter {
  /**
   *
   * @type {Date}
   * @memberof BillsFilter
   */
  updated_since?: Date
}

export function BillsFilterFromJSON(json: any): BillsFilter {
  return BillsFilterFromJSONTyped(json, false)
}

export function BillsFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function BillsFilterToJSON(value?: BillsFilter | null): any {
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
