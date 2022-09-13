/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.55.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  BalanceSheetAssets,
  BalanceSheetAssetsFromJSON,
  BalanceSheetAssetsToJSON
} from './BalanceSheetAssets'
import {
  BalanceSheetEquity,
  BalanceSheetEquityFromJSON,
  BalanceSheetEquityToJSON
} from './BalanceSheetEquity'
import {
  BalanceSheetLiabilities,
  BalanceSheetLiabilitiesFromJSON,
  BalanceSheetLiabilitiesToJSON
} from './BalanceSheetLiabilities'

/**
 *
 * @export
 * @interface BalanceSheet
 */
export interface BalanceSheet {
  /**
   * The name of the report
   * @type {string}
   * @memberof BalanceSheet
   */
  report_name: string
  /**
   * The start date of the report
   * @type {string}
   * @memberof BalanceSheet
   */
  start_date: string
  /**
   *
   * @type {BalanceSheetAssets}
   * @memberof BalanceSheet
   */
  assets: BalanceSheetAssets
  /**
   *
   * @type {BalanceSheetLiabilities}
   * @memberof BalanceSheet
   */
  liabilities: BalanceSheetLiabilities
  /**
   *
   * @type {BalanceSheetEquity}
   * @memberof BalanceSheet
   */
  equity: BalanceSheetEquity
  /**
   *
   * @type {string}
   * @memberof BalanceSheet
   */
  readonly id?: string
  /**
   * The start date of the report
   * @type {string}
   * @memberof BalanceSheet
   */
  end_date?: string
  /**
   *
   * @type {string}
   * @memberof BalanceSheet
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof BalanceSheet
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof BalanceSheet
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof BalanceSheet
   */
  readonly created_at?: Date
}

export function BalanceSheetFromJSON(json: any): BalanceSheet {
  return BalanceSheetFromJSONTyped(json, false)
}

export function BalanceSheetFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceSheet {
  if (json === undefined || json === null) {
    return json
  }
  return {
    report_name: json['report_name'],
    start_date: json['start_date'],
    assets: BalanceSheetAssetsFromJSON(json['assets']),
    liabilities: BalanceSheetLiabilitiesFromJSON(json['liabilities']),
    equity: BalanceSheetEquityFromJSON(json['equity']),
    id: !exists(json, 'id') ? undefined : json['id'],
    end_date: !exists(json, 'end_date') ? undefined : json['end_date'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function BalanceSheetToJSON(value?: BalanceSheet | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    report_name: value.report_name,
    start_date: value.start_date,
    assets: BalanceSheetAssetsToJSON(value.assets),
    liabilities: BalanceSheetLiabilitiesToJSON(value.liabilities),
    equity: BalanceSheetEquityToJSON(value.equity),
    end_date: value.end_date
  }
}
