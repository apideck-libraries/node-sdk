/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BalanceSheetReports,
  BalanceSheetReportsFromJSON,
  BalanceSheetReportsToJSON
} from './BalanceSheetReports'

/**
 *
 * @export
 * @interface BalanceSheet
 */
export interface BalanceSheet {
  /**
   *
   * @type {Array<BalanceSheetReports>}
   * @memberof BalanceSheet
   */
  reports: Array<BalanceSheetReports>
}

export function BalanceSheetFromJSON(json: any): BalanceSheet {
  return BalanceSheetFromJSONTyped(json, false)
}

export function BalanceSheetFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceSheet {
  if (json === undefined || json === null) {
    return json
  }
  return {
    reports: (json['reports'] as Array<any>).map(BalanceSheetReportsFromJSON)
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
    reports: (value.reports as Array<any>).map(BalanceSheetReportsToJSON)
  }
}
