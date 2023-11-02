/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.1
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
 * @interface BalanceSheetEquityItems
 */
export interface BalanceSheetEquityItems {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof BalanceSheetEquityItems
   */
  readonly id?: string
  /**
   * The type of the equity
   * @type {string}
   * @memberof BalanceSheetEquityItems
   */
  name?: string
  /**
   * The equity amount
   * @type {number}
   * @memberof BalanceSheetEquityItems
   */
  value?: number
}

export function BalanceSheetEquityItemsFromJSON(json: any): BalanceSheetEquityItems {
  return BalanceSheetEquityItemsFromJSONTyped(json, false)
}

export function BalanceSheetEquityItemsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetEquityItems {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function BalanceSheetEquityItemsToJSON(value?: BalanceSheetEquityItems | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    value: value.value
  }
}
