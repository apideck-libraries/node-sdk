/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BalanceSheetAssetsCurrentAssets,
  BalanceSheetAssetsCurrentAssetsFromJSON,
  BalanceSheetAssetsCurrentAssetsToJSON
} from './BalanceSheetAssetsCurrentAssets'
import {
  BalanceSheetAssetsFixedAssets,
  BalanceSheetAssetsFixedAssetsFromJSON,
  BalanceSheetAssetsFixedAssetsToJSON
} from './BalanceSheetAssetsFixedAssets'

/**
 *
 * @export
 * @interface BalanceSheetAssets
 */
export interface BalanceSheetAssets {
  /**
   * Total assets
   * @type {number}
   * @memberof BalanceSheetAssets
   */
  total: number
  /**
   *
   * @type {BalanceSheetAssetsCurrentAssets}
   * @memberof BalanceSheetAssets
   */
  current_assets: BalanceSheetAssetsCurrentAssets
  /**
   *
   * @type {BalanceSheetAssetsFixedAssets}
   * @memberof BalanceSheetAssets
   */
  fixed_assets: BalanceSheetAssetsFixedAssets
}

export function BalanceSheetAssetsFromJSON(json: any): BalanceSheetAssets {
  return BalanceSheetAssetsFromJSONTyped(json, false)
}

export function BalanceSheetAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetAssets {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    current_assets: BalanceSheetAssetsCurrentAssetsFromJSON(json['current_assets']),
    fixed_assets: BalanceSheetAssetsFixedAssetsFromJSON(json['fixed_assets'])
  }
}

export function BalanceSheetAssetsToJSON(value?: BalanceSheetAssets | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    current_assets: BalanceSheetAssetsCurrentAssetsToJSON(value.current_assets),
    fixed_assets: BalanceSheetAssetsFixedAssetsToJSON(value.fixed_assets)
  }
}
