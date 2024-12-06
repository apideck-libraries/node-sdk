/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  BalanceSheetAssetsAccount,
  BalanceSheetAssetsAccountFromJSON,
  BalanceSheetAssetsAccountToJSON
} from './BalanceSheetAssetsAccount'
import {
  BalanceSheetEquityAccount,
  BalanceSheetEquityAccountFromJSON,
  BalanceSheetEquityAccountToJSON
} from './BalanceSheetEquityAccount'
import {
  BalanceSheetLiabilitiesAccount,
  BalanceSheetLiabilitiesAccountFromJSON,
  BalanceSheetLiabilitiesAccountToJSON
} from './BalanceSheetLiabilitiesAccount'
import {
  BalanceSheetUncategorizedItemsAccount,
  BalanceSheetUncategorizedItemsAccountFromJSON,
  BalanceSheetUncategorizedItemsAccountToJSON
} from './BalanceSheetUncategorizedItemsAccount'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface BalanceSheetReports
 */
export interface BalanceSheetReports {
  /**
   * The start date of the report
   * @type {string}
   * @memberof BalanceSheetReports
   */
  end_date: string
  /**
   *
   * @type {BalanceSheetAssetsAccount}
   * @memberof BalanceSheetReports
   */
  assets: BalanceSheetAssetsAccount
  /**
   *
   * @type {BalanceSheetLiabilitiesAccount}
   * @memberof BalanceSheetReports
   */
  liabilities: BalanceSheetLiabilitiesAccount
  /**
   *
   * @type {BalanceSheetEquityAccount}
   * @memberof BalanceSheetReports
   */
  equity: BalanceSheetEquityAccount
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof BalanceSheetReports
   */
  readonly id?: string
  /**
   * The name of the report
   * @type {string}
   * @memberof BalanceSheetReports
   */
  report_name?: string
  /**
   * The start date of the report
   * @type {string}
   * @memberof BalanceSheetReports
   */
  start_date?: string
  /**
   *
   * @type {Currency}
   * @memberof BalanceSheetReports
   */
  currency?: Currency | null
  /**
   * The net assets of the balance sheet
   * @type {number}
   * @memberof BalanceSheetReports
   */
  net_assets?: number
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof BalanceSheetReports
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof BalanceSheetReports
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof BalanceSheetReports
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof BalanceSheetReports
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof BalanceSheetReports
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {BalanceSheetUncategorizedItemsAccount}
   * @memberof BalanceSheetReports
   */
  uncategorized_items?: BalanceSheetUncategorizedItemsAccount
}

export function BalanceSheetReportsFromJSON(json: any): BalanceSheetReports {
  return BalanceSheetReportsFromJSONTyped(json, false)
}

export function BalanceSheetReportsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BalanceSheetReports {
  if (json === undefined || json === null) {
    return json
  }
  return {
    end_date: json['end_date'],
    assets: BalanceSheetAssetsAccountFromJSON(json['assets']),
    liabilities: BalanceSheetLiabilitiesAccountFromJSON(json['liabilities']),
    equity: BalanceSheetEquityAccountFromJSON(json['equity']),
    id: !exists(json, 'id') ? undefined : json['id'],
    report_name: !exists(json, 'report_name') ? undefined : json['report_name'],
    start_date: !exists(json, 'start_date') ? undefined : json['start_date'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    net_assets: !exists(json, 'net_assets') ? undefined : json['net_assets'],
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
      : new Date(json['created_at']),
    uncategorized_items: !exists(json, 'uncategorized_items')
      ? undefined
      : BalanceSheetUncategorizedItemsAccountFromJSON(json['uncategorized_items'])
  }
}

export function BalanceSheetReportsToJSON(value?: BalanceSheetReports | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    end_date: value.end_date,
    assets: BalanceSheetAssetsAccountToJSON(value.assets),
    liabilities: BalanceSheetLiabilitiesAccountToJSON(value.liabilities),
    equity: BalanceSheetEquityAccountToJSON(value.equity),
    report_name: value.report_name,
    start_date: value.start_date,
    currency: CurrencyToJSON(value.currency),
    net_assets: value.net_assets,
    uncategorized_items: BalanceSheetUncategorizedItemsAccountToJSON(value.uncategorized_items)
  }
}
