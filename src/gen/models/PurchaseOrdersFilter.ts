/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.2
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
 * @interface PurchaseOrdersFilter
 */
export interface PurchaseOrdersFilter {
  /**
   *
   * @type {Date}
   * @memberof PurchaseOrdersFilter
   */
  updated_since?: Date
}

export function PurchaseOrdersFilterFromJSON(json: any): PurchaseOrdersFilter {
  return PurchaseOrdersFilterFromJSONTyped(json, false)
}

export function PurchaseOrdersFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PurchaseOrdersFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function PurchaseOrdersFilterToJSON(value?: PurchaseOrdersFilter | null): any {
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
