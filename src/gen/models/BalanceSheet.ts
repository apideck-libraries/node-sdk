/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.0
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
   * A unique identifier for an object.
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
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof BalanceSheet
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof BalanceSheet
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof BalanceSheet
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof BalanceSheet
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof BalanceSheet
   */
  readonly created_at?: Date | null
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
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at'])
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
